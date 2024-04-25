import React from "react";
import { Link } from "react-router-dom";
import shareIcon from "../assets/icon/gridicons_share.svg";
import heartIcon from "../assets/icon/Heart.svg";
import comparaeIcon from "../assets/icon/compare-svgrepo-com.svg";

interface CardProductProps {
  name: string;
  id: number;
  imageLink: string;
  category: number;
  price: number;
  discountPrice: number;
  discountPercent: number;
  isNew: boolean;
}

const CardProduct: React.FC<CardProductProps> = ({
  name,
  id,
  imageLink,
  category,
  price,
  discountPrice,
  discountPercent,
  isNew,
}: CardProductProps) => {
  return (
    <div className="group w-[285px] h-[446px] relative">
      <div className="hidden group-hover:block">
        <div className="w-full h-full absolute bg-slate-950 opacity-60 transition-opacity duration-500 z-10"></div>
        <div className="flex flex-col justify-center items-center w-full h-full absolute z-20">
          <Link
            to={"/shop/" + id}
            className="text-primary font-semibold bg-white py-3 px-12 hover:bg-slate-200"
          >
            See Details
          </Link>
          <div className="flex gap-5 mt-6 mx-4 ">
            <div className="flex gap-1 text-white font-semibold">
              <img src={shareIcon} alt="" /> Share
            </div>
            <div className="flex gap-1 text-white font-semibold">
              <img src={comparaeIcon} alt="" /> Compare
            </div>
            <div className="flex gap-1 text-white font-semibold">
              <img src={heartIcon} alt="" /> Like
            </div>
          </div>
        </div>
      </div>

      <div className="w-[285px] h-[446px] bg-gray-100 relative">
        {isNew && (
          <div className="flex justify-center items-center bg-green-400 text-white size-12 absolute top-6 right-6 rounded-full">
            <span>New</span>
          </div>
        )}

        {discountPercent && (
          <div className="flex justify-center items-center bg-red-400 text-white size-12 absolute top-6 right-6 rounded-full">
            <span>-{discountPercent}%</span>
          </div>
        )}

        <div className="w-[285px] h-[300px] ">
          <img className="object-cover w-full h-full" src={imageLink} alt="" />
        </div>

        <div className="p-4">
          <h2 className="font-semibold text-2xl mb-2">{name}</h2>
          <p className="text-secondaryText mb-2">Stylish cafe chair</p>
          <div className="flex gap-4">
            <p className="font-semibold text-xl">
              Rp {discountPrice ? discountPrice : price}
            </p>
            {discountPrice && (
              <del className="text-secondaryText">Rp {price}</del>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
