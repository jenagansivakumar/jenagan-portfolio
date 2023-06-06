import React from "react";
import sparkle from "../assets/sparkle.mp4";

import React from "react";

import React from "react";

const Movie = () => {
  return (
    <div>
      <video
        src={sparkle}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

export default Movie;
