import React from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const Card = () => {
  return(
    <div className="flex flex-col md:flex-row mt-[90px] mb-[64px] md:mt-[172px] md:mb-[90px] w-[327px] h-[1324px] md:w-[919px] md:h-[498px] rounded" >
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  )
}

export default Card