import React from 'react';
import ImageWithAlt from './ImageWithAlt';

function UserInfo() {
  return (
    <section className="flex flex-col px-5 py-6 w-full bg-neutral-900 rounded-lg shadow-md mt-8 hover:shadow-xl hover:bg-neutral-800 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-3">
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ae8eedabe9a91a466e71ffec36cb6d6e445fc4983267b8346bb913ecc9e79f8?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e"
          alt="Yuki navarathna's profile picture"
          className="object-cover shrink-0 rounded-full w-[80px] h-[80px]"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-white text-opacity-90">
            Yuki navarathna
          </h2>
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-400">
        Sri Lanka offers a strategic advantage for Western companies looking to offshore. The country provides a highly skilled, English-speaking workforce at competitive costs.
      </p>
    </section>
  );
}

export default UserInfo;
