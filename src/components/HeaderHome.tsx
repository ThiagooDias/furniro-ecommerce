import React from "react";
import BackgroundImg from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png";

const HeaderHome = () => {
  return (
    <div className="relative">
      <img src={BackgroundImg} alt="living room" className="w-full lg:h-full md:h-[25rem] iphone12:h-52" />
      <div
        className="md:w-[50rem] md:h-[25rem] iphone12:w-30 iphone12:h-36 absolute bottom-0 left-1/2 bg-secondary-200 rounded-t-lg p-4"
      >
        <p className="2xl:pt-32 md:pt-8 iphone12:text-sm md:text-lg font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          ratione rem sunt quibusdam tenetur tempora eius.
        </p>
      </div>
    </div>
  );
};

export default HeaderHome;
