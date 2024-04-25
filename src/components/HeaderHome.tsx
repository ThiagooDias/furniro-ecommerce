import React from "react";
import BackgroundImg from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png";

const HeaderHome = () => {
  return (
    <div className="relative">
      <img src={BackgroundImg} alt="living room" className="w-full" />
      <div
        style={{ width: "543px", height: "343px" }}
        className="absolute bottom-0 left-1/2 bg-secondary-200 rounded-t-lg p-4"
      >
        <p className="pt-16 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          ratione rem sunt quibusdam tenetur tempora eius.
        </p>
      </div>
    </div>
  );
};

export default HeaderHome;
