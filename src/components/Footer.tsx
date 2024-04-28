import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="py-12 px-24">
      <hr className="bg-secondaryText mb-12"/>
      <div className="grid grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold mb-12">Furniro.</h3>
          <p className="text-secondaryText">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="text-secondaryText">FL 33134 USA</p>
        </div>

        <div className="flex flex-col gap-12">
          <h4 className="text-secondaryText">Links</h4>
          <span>
            <a href="/" className="font-medium hover:underline">
              Home
            </a>
          </span>

          <span>
            <a href="/shop" className="font-medium hover:underline">
              Shop
            </a>
          </span>

          <span>
            <a href="/" className="font-medium hover:underline">
              About
            </a>
          </span>

          <span>
            <a href="/" className="font-medium hover:underline">
              Contact
            </a>
          </span>
        </div>

        <div className="flex flex-col gap-12">
          <h4 className="text-secondaryText">Help</h4>
          <span>
            <a href="/" className="font-medium hover:underline">
              Payment Options
            </a>
          </span>

          <span>
            <a href="/shop" className="font-medium hover:underline">
              Returns
            </a>
          </span>

          <span>
            <a href="/" className="font-medium hover:underline">
              Privacy Polices
            </a>
          </span>
        </div>

        <div>
          <h4 className="text-secondaryText mb-12">Newsletter</h4>
          <form action="/">
            <input
              className="pb-[1px] mr-3 border-b-[2px] border-gray-400 focus:border-gray-600 focus:outline-none"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button
              className="underline underline-offset-8 hover:font-semibold"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <hr className="my-8" />
      <p>2023 furino. All rights reverved</p>
    </div>
  );
};

export default Footer;
