import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  const [lines, setLines] = useState([
    "Andrew: 11 am - 3 pm",
    "Joanne: 12 pm - 2 pm, 3:30 pm - 5 pm",
    "Hannah: 12 pm - 12:30 pm, 4 pm - 6 pm",
  ]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const onCompleteHandler = () => {
    if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Typewriter
        options={{
          strings: [lines[currentLineIndex]],
          autoStart: true,
          loop: false,
          onComplete: onCompleteHandler,
        }}
      />
    </>
  );
};
