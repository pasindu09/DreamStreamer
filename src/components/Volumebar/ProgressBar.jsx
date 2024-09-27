import React from "react";

function ProgressBar({ currentTime, totalTime }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center mt-1.5 max-md:max-w-full">
      <time className="self-stretch my-auto text-base text-neutral-400">
        {currentTime}
      </time>
      <div className="flex flex-col self-stretch my-auto rounded min-w-[240px] w-[552px] max-md:max-w-full">
        <div className="flex flex-col items-start bg-white rounded max-md:pr-5 max-md:max-w-full">
          <div className="flex shrink-0 max-w-full bg-green-400 rounded h-[5px] w-[275px]" />
        </div>
      </div>
      <time className="self-stretch my-auto text-base text-neutral-400">
        {totalTime}
      </time>
    </div>
  );
}

export default ProgressBar;