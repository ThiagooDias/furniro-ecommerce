import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountIcon from "../assets/icon/account-alert-outline.svg";
import HeartIcon from "../assets/icon/icons_heart.svg";
import SearchIcon from "../assets/icon/icons_search.svg";
import ShoppingCartIcon from "../assets/icon/shopping-cart-outlined.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToElement = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const topPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth", // Rolagem suave
      });
    }
  };

  const handleButtonClick = (targetId: string) => {
    const offset = 60;
    scrollToElement(targetId, offset);
  };

  return (
    <nav className="flex h-20 justify-between items-center w-full bg-white lg:px-16 md:px-10">
      <div className="flex gap-1 items-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-4xl font-bold">Furniro</h1>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className={`relative md:flex ${isOpen ? "flex" : "hidden"}`}>
        <ul className={`md:flex list-none gap-12 items-center font-semibold`}>
          <li>
            <Link to="/" className="underline-animation">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="underline-animation">
              Shop
            </Link>
          </li>

          <li>
            <button
              onClick={() => handleButtonClick("footer")}
              className="underline-animation"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("footer")}
              className="underline-animation"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex list-none gap-12 items-center">
        <li>
          <a href="/">
            <img src={AccountIcon} alt="account" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={SearchIcon} alt="search" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={HeartIcon} alt="liked" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={ShoppingCartIcon} alt="shopping cart" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
