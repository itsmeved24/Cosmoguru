import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";
import vedankLogo from "../assets/vedank.png";

const LeftBlock = () => (
  <Block className="m-2 w-1/4 h-96 col-span-12 row-span-2 md:col-span-6">
    <img className="top-0 left-0 h-24 mb-4" src={vedankLogo} alt="" />
    <h1 className="mb-12 text-2xl font-medium leading-tight">
      Hello, I'm <span className="text-zinc-400">Vedank</span> with a{" "}
      <span className="text-zinc-400">unique</span> name all over the social media platforms, nice to meet you.
      <br />
      <br />
      <span className="text-zinc-400 block">I code in spare time :P.</span>
    </h1>
  </Block>
);

export default LeftBlock;
