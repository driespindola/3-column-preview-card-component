import React from "react";

const ThirdCard = () => {
  return(
    <div className="py-[48px] pl-[48px] bg-[#00403F]" >
      <img src="icon-luxury.svg"
       alt="luxury-icon" 
      />
      <h1 className="mt-[35px] font-shoulders text-[40px] text-[#F2F2F2] uppercase">Luxury</h1>
      <p className="mt-[27px] mr-[45px] md:mt-[25px] md:mr-[60px] font-lexend text-[15px] text-white opacity-70 leading-[25px]">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
      <button className="mt-[24px] md:mt-[83px] py-[12px] px-[32px] bg-[#F2F2F2] hover:bg-[#00403F] font-lexend text-[15px] text-[#00403F] hover:text-[#F2F2F2] border-2 border-[#F2F2F2] rounded-full">Learn More</button>
    </div>
  )
}

export default ThirdCard