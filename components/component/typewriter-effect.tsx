'use client'

import Typewriter from "typewriter-effect";



export default function WriterEffect(){


    return(
        <Typewriter
          options={{
            strings: ["Web Developer", "Software Engineer"],
            autoStart: true,
            loop: true,
          }}
        />
    )
}