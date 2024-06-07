import React from "react";
import Sec3Card from "../../Card";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";

const OurWork = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black relative overflow-hidden">
      <div className="absolute top-[350px] z-10 bg-sky-300 rounded-lg w-[120%] left-1/2 transform -translate-x-1/2 h-48 hidden lg:block"></div>
      <div className="z-20 flex flex-col justify-center items-center w-full">
        <div className="flex flex-row w-full h-10 justify-center m-5">
          <h1 className="text-3xl font-semibold pr-2 text-white">OUR </h1>
          <h1 className="text-3xl text-blue-600 font-semibold"> WORK</h1>
        </div>
        <div className="p-1 flex flex-wrap justify-center items-center w-full">
          <Sec3Card image={img1} />
          <Sec3Card image={img2} />
          <Sec3Card image={img3} />
        </div>
        <button className="w-40 m-16 border border-blue-900 text-sm text-white py-2 rounded-tl-lg rounded-br-lg">
          View All
        </button>
      </div>
    </div>
  );
};

export default OurWork;
