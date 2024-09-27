import React from "react";
import Header from "./Header";
import MusicSection from "./MusicSection";

function MusicBody() {
  const topMixes = [
    {
      title: "Chill Mix",
      artists: "Julia Wolf, Khalid, ayokay and more",
      image: "/image/img1.png",
    },
    {
      title: "Pop Mix",
      artists: "Hey Violet, VÉRITÉ, Timeflies and more",
      image: "/image/img2.jpg",
    },
    {
      title: "Pheelz Mix",
      artists: "WizKid, Asake, Tiwa Savage and more",
      image: "/image/img3.jpg",
    },
    {
      title: "Indie Mix",
      artists: "Joywave, The xx, The Neighbourhood and...",
      image: "/image/img4.jpg",
    },
  ];

  const madeForYou = [
    {
      title: "Folk & Acoustic...",
      artists: "Canyon City, Crooked Still, Gregory Alan...",
      image: "/image/img5.jpg",
    },
    {
      title: "Daily Mix 1",
      artists: "Ayra Starr, Lil Kesh, Ed Sheeran and more",
      image: "/image/img4.jpg",
    },
    {
      title: "Daily Mix 5",
      artists: "FRENSHIP, Brooke Sierra, Julia Wolf an...",
      image: "/image/img3.jpg",
    },
    {
      title: "Pop Mix",
      artists: "Hey Violet, VÉRITÉ, Timeflies and more",
      image: "/image/img1.png",
    },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-black bg-opacity-95">
      <Header />
      
      <div className="flex-grow overflow-y-auto px-6 pt-8 pb-24 hide-scrollbar">
        {/* Fixed height section */}
        <section className="relative flex-shrink-0 flex items-center justify-between px-8 py-6 mt-6 bg-red-700 rounded-xl h-[300px] w-full max-w-full overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white">
              Classic Band Sale!
            </h1>
            <h2 className="mt-2 text-lg text-white">
              Discount on{" "}
              <span className="font-semibold text-zinc-200">
                Legendary Albums!
              </span>
            </h2>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e0771bd0476afdea69f02a614fb41125f26c7c5adb3c8a6e927bdf66228468d?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e"
            alt="Classic Band Sale"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        </section>

        {/* Music sections with controlled overflow */}
        <MusicSection title="Your top mixes" mixes={topMixes} darkBackground />
        <MusicSection title="Made for you" mixes={madeForYou} darkBackground />
      </div>
    </div>
  );
}

export default MusicBody;
