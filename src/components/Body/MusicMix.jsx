import React from "react";

function MusicMix({ title, artists, image, darkBackground }) {
  const backgroundClass = darkBackground ? "bg-neutral-800" : "bg-white";
  const textColor = darkBackground ? "text-white" : "text-black";

  return (
    <article className="flex flex-col items-center w-full">
      <div
        className={`flex flex-col items-center p-4 ${backgroundClass} rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105`}
      >
        <div className="flex items-center justify-center overflow-hidden rounded-lg bg-neutral-400 h-[150px] w-[150px]">
          <img
            loading="lazy"
            src={image}
            alt={`${title} album cover`}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className={`text-lg font-medium ${textColor}`}>{title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{artists}</p>
        </div>
      </div>
    </article>
  );
}

export default MusicMix;
