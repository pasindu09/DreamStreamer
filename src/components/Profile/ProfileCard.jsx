import React from 'react';
import UserInfo from './UserInfo';
import ImageWithAlt from './ImageWithAlt';

function ProfileCard() {
  return (
    <article className="fixed top-0 right-0 h-[88%] flex flex-col w-[22%] bg-black shadow-lg">
      <header className="flex flex-col items-start px-5 pt-8 pb-4 w-full h-full">
        <div className="flex items-center gap-2 py-1 pr-5 pl-1.5 text-xl tracking-wide whitespace-nowrap bg-white bg-opacity-30 rounded-full text-stone-300">
          <ImageWithAlt
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0d6a8d0b7b9f916ea83dc9c1784238f53819d1d43e342e108173d2cef6fe32?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e"
            alt="User profile picture"
            className="object-contain shrink-0 rounded-full w-[51px]"
          />
          <span className="my-auto">PinidiyaRox</span>
          <ImageWithAlt
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/531f55ae66275b1eb630acdcadf6f1f0b2cf193b04b576835f1b6bc8e36bf6f7?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e"
            alt="Verification icon"
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
        </div>
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1fc89581749da51f287d4ec71c86a78c1ef2bd4a640b0b8dca98c49c15057e0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e"
          alt="Profile banner image"
          className="object-cover mt-8 w-full rounded-2xl h-[150px]"
        />
        <h1 className="mt-3 text-xl text-white text-opacity-90 tracking-[3px]">
          ilmahe kurullo
        </h1>
        <p className="text-sm text-zinc-300 text-opacity-70 tracking-[1.8px]">
          Yuki navarathna, Ravi jay
        </p>
        <div className="mt-4 w-full">
          <UserInfo />
        </div>
      </header>
    </article>
  );
}

export default ProfileCard;
