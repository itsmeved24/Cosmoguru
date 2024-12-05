import React from "react";
import Block from "./Block";

const AboutBlock = () => (
  <Block className="w-1/2 h-70 col-span-12 text-3xl leading-snug mt-2">
    <h1 className="mb-12 text-2xl font-medium leading-tight">
      My passion is building <span className="text-zinc-400">cool stuff (⌐■_■)</span>.{" "}

      I am a <span className="text-zinc-400"> Creative Graphic Web Developer </span>with taste in <span className="text-zinc-400">art 🖼️, visual appearance 🔮, and an eye for user interactivity 📲</span>!
    </h1>
  </Block>
);

export default AboutBlock;
