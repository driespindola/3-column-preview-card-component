import Link from "next/link";
import React from "react";

const BottomNav = () => {
    return(
        <p className="text-center text-[#00403F]">
            Challenge by 
            <Link href="https://www.frontendmentor.io/" target="_blank" className="text-[#E28525]"> Frontend Mentor</Link>. 
            Coded by
            <Link href="https://github.com/driespindola" target="_blank" className="text-[#016972]"> Dri Espindola</Link>.
        </p>
    )
}

export default BottomNav