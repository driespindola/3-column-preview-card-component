import React from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const Card = () => {
  return(
    <div className="flex flex-row mt-[172px] mb-[90px] w-[919px] h-[172] rounded" >
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  )
}

export default Card