import React from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import AboutBlock from "./AboutBlock";

const Bento = () => {
  return (
    <div className="bg-[#18181b] h-screen w-screen">
      <Logo />
      <div className="flex flex-row justify-center items-center">
        <LeftBlock />
        <RightBlock />
      </div>
      <div className="flex justify-center items-center">
        <AboutBlock />
      </div>
      <Footer />
    </div>
  );
};

export default Bento;
