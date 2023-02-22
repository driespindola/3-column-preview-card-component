import React from "react";

const FirstCard = () => {
  return(
    <div className="py-[48px] pl-[48px] bg-[#E28525]" >
      <img src="icon-sedans.svg"
       alt="sedans-icon" 
      />
      <h1 className="mt-[35px] font-shoulders text-[40px] text-[#F2F2F2] uppercase">Sedans</h1>
      <p className="mt-[27px] mr-[45px] md:mt-[25px] md:mr-[60px] font-lexend text-[15px] text-white opacity-70 leading-[25px]">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
      <button className="mt-[24px] md:mt-[83px] py-[12px] px-[32px] bg-[#F2F2F2] hover:bg-[#E28525] font-lexend text-[15px] text-[#E28525] hover:text-[#F2F2F2] border-2 border-[#F2F2F2] rounded-full">Learn More</button>
    </div>
  )
}

export default FirstCard