import React from 'react'
import img1 from "../assets/Group.png";
import img from "../assets/back.png";

function Hero() {
  return (
    <div className="h-96 flex justify-between px-20 ">
      <div className="flex-col  items-center justify-center flex">
        <h1 className=" font-black text-3xl animate-bounce mb-10  ">جمعية المعالي</h1>
        <img className="w-80 h-56 animate-bounce " src={img1} alt="" />
        <div className='w-60 h-1 shadow-sm shadow-black border-2 bg-sky-500 rounded-xl '></div>
      </div>
      <div className="z- 10">
        <h1>المعالي</h1>
      </div>
    </div>
  );
}

export default Hero
