import React from "react";
import "./Clientsay.css"; // Remove this line if not using fallback styles
import ellipse129 from "../../assets/Ellipse.png";

const Clientsay = () => {
  return (
    <div className="clientsay-container bg-black text-white flex items-center justify-center py-20">
      <div className="clientsay-content max-w-1200 text-center relative">
        <p className="quote-mark left-quote text-5xl text-blue-600 absolute top-1/2 transform -translate-y-1/2 left-0 rotate-180">
          ”
        </p>
        <p className="clientsay-heading text-3xl font-bold mb-8">
          WHAT OUR <span className="text-blue-600">CLIENT</span> SAY'S
        </p>
        <div className="client-info flex flex-col items-center">
          <img
            src={ellipse129}
            className="client-image w-46 h-46 mb-4 rounded-full"
            alt="Client"
          />
          <p className="client-name text-2xl font-bold">Aman Gupta</p>
          <p className="client-title text-lg opacity-40">CEO Boat and Techno</p>
        </div>
        <div className="client-feedback text-lg leading-tight opacity-50 mt-8">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <p className="quote-mark right-quote text-5xl text-blue-600 absolute bottom-0 transform -translate-y-1/6 right-0">
          ”
        </p>
      </div>
    </div>
  );
};

export default Clientsay;
