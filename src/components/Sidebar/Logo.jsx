import React from 'react';

function Logo() {
  return (
    <div className="flex gap-1 ml-5 text-xl tracking-wide">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aeef1c2012caf1dcc38eb49ed88712250ecf1b5d59f92695e19fb2473c33403?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e" 
        alt="Dream Streamer logo" 
        className="object-contain shrink-0 self-start mt-1 aspect-[1.75] w-[77px]"
      />
      <div>
        <span className="text-3xl">Dream</span>
        <br />
        <span className="text-xs tracking-[5.6px]">Streamer</span>
      </div>
    </div>
  );
}

export default Logo;