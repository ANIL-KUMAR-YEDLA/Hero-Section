import React from "react";

const Sec3Card = ({ image }) => {
  return (
    <div className="flex flex-col bg-white border m-2 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[400px] rounded-lg relative">
      <div className="w-full h-[60%] p-3">
        <img src={image} className="w-full h-full rounded-lg" alt="Card" />
      </div>
      <div className="flex flex-col text-black pt-3 pl-4 pr-10 flex-grow">
        <div>
          <h1 className="my-2 font-bold text-xl sm:text-2xl">Lorem ipsum is simply</h1>
          <div className="flex flex-row place-items-end">
            <div className="tracking-wide font-medium">
              industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when
            </div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-0 right-0 p-2 border border-black w-10 h-10 rounded-br-lg rounded-tl-lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoX_2o2VSgrxlNRM89Kg21z5LGs8Hm1t7Fg&s" alt="Icon" />
      </button>
    </div>
  );
}

export default Sec3Card;
