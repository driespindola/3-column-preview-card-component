import React from "react";

const SecondCard = () => {
  return(
    <div className="py-[48px] pl-[48px] bg-[#016972]" >
      <img src="icon-suvs.svg"
       alt="suvs-icon" 
      />
      <h1 className="mt-[35px] font-shoulders text-[40px] text-[#F2F2F2] uppercase">SUVs</h1>
      <p className="mt-[25px] mr-[55px] font-lexend text-[15px] text-white opacity-70 leading-[25px]">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
      <button className="mt-[83px] py-[12px] px-[32px] bg-[#F2F2F2] hover:bg-[#016972] font-lexend text-[15px] text-[#016972] hover:text-[#F2F2F2] border-2 border-[#F2F2F2] rounded-full">Learn More</button>
    </div>
  )
}

export default SecondCard