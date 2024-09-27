import React from "react";
import MusicMix from "./MusicMix";

function MusicSection({ title, mixes, darkBackground }) {
  return (
    <section className="mt-12 w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {mixes.map((mix, index) => (
          <MusicMix key={index} {...mix} darkBackground={darkBackground} />
        ))}
      </div>
    </section>
  );
}

export default MusicSection;
