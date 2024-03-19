// components/Header.jsx
"use client";
import React, { useState } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import giftcraft from "../assets/images/giftcraft.png";
import { useNavigate } from "react-router";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate hook

  const links = [
    { text: "Home", url: "" },
    { text: "About Us", url: "about-us.html" },
    { text: "Contact Us", url: "contact-us.html" },
  ];

  const iconLinks = [
    {
      href: "/cart", // Set the href to "/cart"
      icon: <IoBagHandleSharp className="h-6 w-6" />,
      text: "Cart",
    },
    {
      href: "",
      icon: <CiUser className="h-6 w-6" />,
      text: "Account",
    },
  ];

  return (
    <>
      <header
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5"
        style={{ marginLeft: "-0px" }}
      >
        <a href="/" className="w-24">
          <img
            className="cursor-pointer sm:h-auto sm:w-auto"
            src={giftcraft}
            alt="company logo"
            style={{ width: "64px", height: "64px" }}
          />
        </a>
        <p
          className="ml-2 text-lg font-semibold"
          style={{ marginLeft: "-230px" }}
        >
          GiftCraft
        </p>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <RxHamburgerMenu className="w-8 h-8" />
          </button>
        </div>
        <form className="hidden h-9 w-2/5 items-center border md:flex">
          <CiSearch className="mx-3 h-4 w-4" />

          <input
            className="hidden w-11/12 outline-none md:block bg-white"
            type="search"
            placeholder="Search"
          />
          <button className="ml-auto h-full bg-yellow-400 px-4 hover:bg-yellow-300">
            Search
          </button>
        </form>
        <div className="hidden gap-3 md:!flex">
          {iconLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex cursor-pointer flex-col items-center justify-center"
            >
              {link.icon}
              <p className="text-xs">{link.text}</p>
            </a>
          ))}
        </div>
      </header>
      {mobileMenuOpen && (
        <section
          className={`block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white ${
            mobileMenuOpen ? "none" : "block"
          }`}
        >
          <div className="mx-auto">
            <div className="mx-auto flex w-full justify-center gap-3 py-4">
              {iconLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  {link.icon}
                  <p className="text-xs">{link.text}</p>
                </a>
              ))}
            </div>
            <form className="my-4 mx-5 flex h-9 items-center border">
              <CiSearch className="mx-3 h-4 w-4" />

              <input
                className="hidden w-11/12 outline-none md:block"
                type="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="ml-auto h-full bg-yellow-400 px-4 hover:bg-yellow-300"
              >
                Search
              </button>
            </form>
            <ul className="text-center font-medium">
              {links.map((link, index) => (
                <li key={index} className="py-2">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
