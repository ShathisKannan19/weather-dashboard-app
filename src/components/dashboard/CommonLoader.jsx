import React from "react";
import { Oval } from "react-loader-spinner";

const CommonLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CommonLoader;
