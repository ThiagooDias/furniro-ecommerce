import React from "react";
import { Link } from "react-router-dom";
import AccountIcon from "../assets/icon/account-alert-outline.svg";
import HeartIcon from "../assets/icon/icons_heart.svg";
import SearchIcon from "../assets/icon/icons_search.svg";
import ShoppingCartIcon from "../assets/icon/shopping-cart-outlined.svg";

const Navbar = () => {
  return (
    <nav className="flex h-20 justify-between items-center w-full bg-white lg:px-16 md:px-10">
      <div className="flex gap-1 items-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-4xl font-bold">Furniro</h1>
      </div>

      <ul className="hidden md:flex list-none gap-12 items-center font-semibold">
        <li>
          <Link
            to="/"
            className="underline-animation"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="underline-animation"
          >
            Shop
          </Link>
        </li>
        <li>
          <a
            href=""
            className="underline-animation"
          >
            About
          </a>
        </li>
        <li>
          <a
            href=""
            className="underline-animation"
          >
            Contact
          </a>
        </li>
      </ul>

      <ul className="flex list-none gap-12 items-center">
        <li>
          <a href="#">
            <img src={AccountIcon} alt="account" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={SearchIcon} alt="search" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={HeartIcon} alt="liked" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={ShoppingCartIcon} alt="shopping cart" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
