import Avatar from "../../assets/img/avatar.png";


//Other Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import DailyForcast from "./DailyForcast";
import CommonLoader from "./CommonLoader";


const Dashboard = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const search = (async (city) => {
    const query = city || input;
    if (query) {
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const api_key = process.env.REACT_APP_API_KEY;
      await axios
        .get(url, {
          params: {
            q: query,
            units: "metric",
            appid: api_key,
          },
        })
        .then((res) => {
        //   console.log("res", res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
        //   console.log("error", error);
        });
    }
  },[input, weather]);

  useEffect(() => {
    search("Swamimalai");
    console.log("Application of Dashboard Started...");
  }, [search]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
      setInput("");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 lg:h-svh p-10 flex flex-col gap-7 md:px-52">
        <div className="grid sm:grid-cols-2 gap-7 ">
          <div className="flex w- items-center bg-white rounded-md overflow-hidden shadow-lg">
            <span className="px-4 py-2 bg-gray-200">
              <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="p-2 w-full border-0 h-full outline-none"
              placeholder="Enter City Name.."
              name="query"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <div className="flex justify-end px-9">
                <div className="flex flex-col">
                    <p className="text-white px-1 text-xs">Powered By:</p>
                    <a className="text-white px-1 hover:no-underline underline" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/shathis-kannan-v/">Shathis Kannan V</a>
                </div>
              <img
                src={Avatar}
                alt="Avatar of CHS Weather App"
                className="rounded-full shadow-xl"
                width={"40px"}
                title="Shathis Kannan "
              />
            </div>
          </div>
        </div>
        <div className="h-full">
          
          <div className="h-full text-center bg-white/15 sm:col-span-2 backdrop-blur-md rounded-lg border-white/25 border-2">
          {weather.loading ? (
            <CommonLoader/>
          ) : weather.error ? (
            <>
            <p className={`text-xl sm:text-3xl text-white/70 mt-52 ${weather.error && "h-full"}`}>Searched City is Not Found..<br/><br/><br/> Kindly Search your City with correct spelling</p> 
            </>
            )
          :  (
              <>
                <DailyForcast weather={weather}/>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
