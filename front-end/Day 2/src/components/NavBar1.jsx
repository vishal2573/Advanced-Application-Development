// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import { FaBed, FaBirthdayCake, FaSprayCan, FaTshirt } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdOutdoorGrill } from "react-icons/md";

const Navbar1 = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [defaultCategory, setDefaultCategory] = useState("Bedroom");
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#" },
    { label: "Contact us", href: "#" },
  ];
  const categories = [
    {
      category: "Delicacies",
      icon: <FaBirthdayCake />,
      menu: [
        {
          title: "Cakes",
          items: [
            {
              label: "Wedding ",
              href: "",
            },
            { label: "Birthday ", href: "" },
            {
              label: "Anniversary ",
              href: "",
            },
            { label: "Professional Use ", href: "" },
          ],
        },
        {
          title: "Treats",
          items: [
            { label: "Cookies", href: "" },
            { label: "Toffees", href: "" },
            { label: "Waffles", href: "" },
            { label: "Chocolates", href: "" },
          ],
        },
      ],
    },
    {
      category: "Cosmetics",
      icon: <FaSprayCan />,

      menu: [
        {
          title: "Perfumes",
          items: [
            {
              label: "Dior",
              href: "",
            },
            { label: "Axe", href: "" },
            {
              label: "Yves Saint-Laurent",
              href: "",
            },
            {
              label: "Louis Vuitton",
              href: "new-",
            },
          ],
        },
      ],
    },
    {
      category: "Clothing",
      icon: <FaTshirt />,
      menu: [
        {
          title: "Men",
          items: [
            { label: "Shirts", href: "" },
            { label: "T-Shirts", href: "" },
            {
              label: "Hoodies",
              href: "",
            },
            { label: "Jeans", href: "" },
          ],
        },
        {
          title: "Women",
          items: [
            { label: "Shirts", href: "" },
            { label: "T-Shirts", href: "" },
            { label: "Hoodies", href: "" },
            { label: "Jeans", href: "" },
          ],
        },
      ],
    },
  ];

  const closeSubMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedCategory(null);
  };
  const openDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev);
    setSelectedCategory(defaultCategory);
  };
  return (
    <>
      <nav className="md:block hidden relative bg-customBlue">
        <div className="mx-auto  h-12 w-full max-w-[1200px] items-center md:flex">
          <button
            onClick={openDesktopMenu}
            className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400"
          >
            <div className="flex justify-around" href="#">
              <RxHamburgerMenu className="mx-1 w-6 h-6" />
              All categories
            </div>
          </button>
          <div className="mx-7 flex gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                className="font-light text-black duration-100 hover:text-yellow-400 hover:underline"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="ml-auto flex gap-4 px-5">
            <a
              className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
              href="login.html"
            ></a>
            <span className="text-white"></span>
            <a
              className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
              href="sign-up.html"
            ></a>
          </div>
        </div>
      </nav>
      {desktopMenuOpen && (
        <section
          x-show="desktopMenuOpen"
          className={`absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white ${
            desktopMenuOpen ? "none" : "block"
          } `}
        >
          <div className="hidden mx-auto md:flex max-w-[1200px] py-10">
            <div className="w-[300px] border-r">
              <ul className="px-5">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`${
                      selectedCategory === category.category
                        ? "active:blue-900 bg-amber-400"
                        : ""
                    } flex items-center gap-2 py-2 px-3 hover:bg-neutral- `}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.category
                          ? null
                          : category.category
                      )
                    }
                  >
                    {category.icon}
                    {category.category}
                    <span className="ml-auto">
                      <IoMdArrowDropright className="h-4 w-4" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full justify-between">
              {selectedCategory && (
                <div className="flex gap-6">
                  {categories
                    .find((category) => category.category === selectedCategory)
                    ?.menu.map((submenu, index) => (
                      <div key={index} className="mx-5">
                        <p className="font-medium text-gray-500">
                          {submenu.title}
                        </p>
                        <ul className="leading-8 text-sm">
                          {submenu.items.map((item, itemIndex) => (
                            <li key={itemIndex} href={item.href}>
                              <a href="">{item.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <button onClick={closeSubMenu} className="absolute top-5 right-5">
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar1;
