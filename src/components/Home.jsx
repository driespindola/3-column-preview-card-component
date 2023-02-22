import React from "react";
import BottomNav from "./BottomNav";
import Card from "./Card";

const Home = () => {
  return(
    <div className="flex flex-col justify-center items-center m-auto max-w-[375px] max-h-[1502px] md:max-w-[1502px] md:max-h-[800px]">
      <Card />
      <BottomNav />
    </div>
  )
}

export default Home