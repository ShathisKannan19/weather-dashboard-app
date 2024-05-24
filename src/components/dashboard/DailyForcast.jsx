import toDateFunction from "./utility/dateConverter";

//Icons
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { FaCloud } from "react-icons/fa";

//Icons for Sunrise and Sun Set
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";

import CommonLoader from "./CommonLoader";

const DailyForcast = ({ weather }) => {

    if (!weather || !weather.data || !weather.data.main) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CommonLoader />
            </div>
        );
    }

    const Temp =  Math.floor(weather.data.main.temp);

    return (
        <>
        <div className="flex flex-col gap-12 sm:p-2">
            <div>
                <p className="text-white text-2xl font-bold">CURRENT WEATHER</p>
            </div>
            <div className="grid sm:grid-cols-2 gris-cols-1 text-white bg-white/10 gap-2 h-full sm:p-0 p-2 sm:m-0 m-2">
                <div>
                    <p className="font-bold text-xl">City</p>
                    <div className="">{weather.data.name}, {weather.data.sys.country}</div>
                    <p className=" text-gray-300">{toDateFunction()}</p>
                </div>
                <div>
                    <p className="font-bold text-xl">Temperature</p>
                    <p>{Temp} °C</p>
                    <p className=" text-gray-300 capitalize">{weather.data.weather[0].description} </p>
                </div>
            </div>
            <p className="text-white text-2xl font-bold uppercase">Air Conditions</p>
            <div className="grid sm:grid-cols-4 grid-cols-2 text-white gap-2 p-1">
                <div className="flex flex-col gap-3 border-2 border-white/20 p-2">
                    <div className="flex flex-row text-center justify-center text-gray-200">
                        <FaTemperatureHalf className="m-1"/>
                        <p>Real Feel</p>
                    </div>
                    <div>
                        <p>{weather.data.main.feels_like}°C</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-2 border-white/20 p-2">
                    <div className="flex flex-row text-center justify-center text-gray-200">
                        <FaWind className="m-1"/>
                        <p>Wind</p>
                    </div>
                    <div>
                        <p>{weather.data.wind.speed} m/s</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-2 border-white/20 p-2">
                    <div className="flex flex-row text-center justify-center text-gray-200">
                        <FaCloud className="m-1"/>
                        <p>Clouds</p>
                    </div>
                    <div>
                        <p>{weather.data.clouds.all}%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-2 border-white/20 p-2">
                    <div className="flex flex-row text-center justify-center text-gray-200">
                        <IoIosWater className="m-1"/>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <p>{weather.data.main.humidity}%</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="text-white text-2xl sm:text-2xl text-center grid grid-col-1 gap-4 justify-center">
                    <p className="flex"><GiSunrise className="m-1"/> Sunrise: {new Date(weather.data.sys.sunrise * 1000).toLocaleTimeString()} </p>
                    <p className="flex"><GiSunset className="m-1"/>Sunset: {new Date(weather.data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default DailyForcast;
