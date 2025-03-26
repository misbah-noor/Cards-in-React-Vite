import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900 md:w-full w-60 h-115 md:h-full">
      <img className="w-full md:h-100 h-75 transform transition-transform duration-300 ease-in-out hover:scale-105  object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white text-gray-800">{title}</h2>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <button className="mt-4 px-4 py-2 hover:border hover:border-red-500 text-white rounded-3xl bg-red-600 cursor-pointer hover:bg-transparent border border-red-500" >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Card;
