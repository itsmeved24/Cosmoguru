import React from "react";
import Block from "./Block";
import Bot from "./Bot";

const RightBlock = () => (
  <Block className="m-2 w-1/4 h-96 col-span-12 row-span-2 md:col-span-6">
    <Bot />
  </Block>
);

export default RightBlock;
