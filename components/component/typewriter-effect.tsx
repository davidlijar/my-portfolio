"use client";

import Typewriter from "typewriter-effect";

interface props{
    str:string[];
}


export const WriterEffect:React.FC<props>=({str})=> {
  return (
    <Typewriter
      options={{
        strings: str,
        autoStart: true,
        loop: true,

      }}
    />
  );
}

