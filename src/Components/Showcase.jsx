import React from "react";
import showcase from "../Assets/showcase.png";
import Typer from "./Typer";

const Showcase = () => {
  const textArray = ["Creative", "Productive", "Time"];
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <div className="w-full sm:w-[40%] h-[20%] text-ombase font-bold text-4xl flex flex-col  items-center">
        <p className="w-full">Discover the</p>
        <p className="w-full">Ultimate Performance Experience!</p>
      </div>
      <div className="w-full h-[60%] sm:h-[60%] flex justify-center items-center">
        <img src={showcase} alt="Showcasing Image" />
      </div>
      <div className="w-full sm:w-[60%] h-[20%] flex flex-col ">
        <p className="w-full text-2xl font-bold typewriter flex items-center">
          More&nbsp; <Typer texts={textArray} speed={100} delay={1000} />
        </p>
        <p className="w-full text-2xl font-bold flex">
          for what you love... <p className="animate-bounce text-4xl">❤️</p>
        </p>
        {/* <Typer texts={textArray} speed={100} delay={1000} /> */}
      </div>
    </div>
  );
};
<style>
  {`
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    .typewriter {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      animation: typewriter 3s steps(40) 1s forwards;
      width: 0;
    }
  `}
</style>;

export default Showcase;
