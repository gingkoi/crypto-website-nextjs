"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiCoinsLine } from "react-icons/ri";
import {
  BsCreditCard2Back,
  BsDatabase,
  BsCoin,
  BsGear,
  BsTwitter,
  BsXLg,
} from "react-icons/bs";
import { BiHistory, BiMessageRoundedDots } from "react-icons/bi";
import { FaTiktok, FaFacebookF, FaSnapchatGhost } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons//rx";

const Header = () => {
  const menuItem = [
    [
      { path: "/", name: "Cryptocurrency", icon: <RiCoinsLine size={20} /> },
      { path: "/", name: "Services", icon: <BsDatabase size={20} /> },
      { path: "/", name: "Card", icon: <BsCreditCard2Back size={20} /> },
      { path: "/", name: "Investment", icon: <BsCoin size={20} /> },
    ],
    [
      { path: "/", name: "History", icon: <BiHistory size={20} /> },
      { path: "/", name: "Messages", icon: <BiMessageRoundedDots size={20} /> },
      { path: "/", name: "Setting", icon: <BsGear size={20} /> },
    ],
  ];

  const socialIcons = [
    {
      tikok: <FaTiktok className="text-special_green" size={30} />,
      twitter: <BsTwitter className="text-special_green" size={30} />,
      facebook: <FaFacebookF className="text-special_green" size={30} />,
      snapchat: <FaSnapchatGhost className="text-special_green" size={30} />,
    },
  ];
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  let menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="font-poppin">
      <div className="hidden lg:w-full h-full bg-primary text-white lg:flex flex-col p-10 left-0 top-0">
        <div className="max-w-[300px] mx-auto">
          <div className="text-4xl font-bold italic uppercase">
            Carbon-Trade
          </div>
          <div className="bg-white h-[1px] my-7" />
          <div>
            <p className="font-medium text-[#454545] my-7">GENERAL</p>
            <div className="space-y-5">
              {menuItem[0].map((item, index) => (
                <div
                  className="flex space-x-3 text-secondary items-center"
                  key={index}
                >
                  {item.icon}
                  <p className="hover:text-special_green cursor-pointer duration-300">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <p className="font-medium text-[#454545] my-7">PROFILE</p>
            <div className="space-y-5">
              {menuItem[1].map((item, index) => (
                <div
                  className="flex space-x-3 text-secondary items-center"
                  key={index}
                >
                  {item.icon}
                  <p className="hover:text-special_green cursor-pointer duration-100">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white h-[1px] my-7" />
          <div className="">
            <p className="font-medium text-[#454545] my-4">HELP AND SUPPORT</p>
            <div className="space-y-5">
              <p>
                Need Help?{"  "}
                <a href="/" className="font-bold text-special_green underline">
                  Contact Us
                </a>
              </p>
              {socialIcons.map((item, index) => (
                <div className="flex justify-between" key={index}>
                  {item.tikok}
                  {item.twitter}
                  {item.facebook}
                  {item.snapchat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden left-0 top-0 w-[50px] h-full bg-black flex justify-center py-8 border-r border-r-special_green">
        <RxHamburgerMenu
          size={30}
          className="text-white"
          onClick={handleClick}
        />
      </div>
      {nav && (
        <div
          className={`${
            nav
              ? "bg-black/80 h-full w-[100%] z-0 top-0 left-0 ease-in-out duration-300 fixed lg:hidden"
              : "fixed left-[-100%]"
          }`}
        ></div>
      )}
      <div
        className={
          nav
            ? "lg:hidden fixed left-0 top-0 w-[80%] h-full bg-primary border-r border-r-special_green flex flex-col p-5 py-8 z-30 ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
        ref={menuRef}
      >
        <div className="flex items-center justify-between">
          <BsXLg size={30} className="text-white" onClick={handleClick} />
          <p className="text-white font-bold italic uppercase text-lg underline underline-offset-8">
            Carbon-Trade
          </p>
        </div>

        <div>
          <p className="font-medium text-[#454545] my-7">GENERAL</p>
          <div className="space-y-5">
            {menuItem[0].map((item, index) => (
              <div
                className="flex space-x-3 text-secondary items-center"
                key={index}
              >
                {item.icon}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-32">
            <p className="font-medium text-[#454545] my-7">PROFILE</p>
            <div className="space-y-5">
              {menuItem[1].map((item, index) => (
                <div
                  className="flex space-x-3 text-secondary items-center"
                  key={index}
                >
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white h-[1px] my-7" />
          <div className="">
            <p className="font-medium text-[#454545] my-4">HELP AND SUPPORT</p>
            <div className="space-y-5">
              <p className="text-secondary">
                Need Help?{"  "}
                <a href="/" className="font-bold text-special_green underline">
                  Contact Us
                </a>
              </p>
              {socialIcons.map((item, index) => (
                <div className="flex justify-between" key={index}>
                  {item.tikok}
                  {item.twitter}
                  {item.facebook}
                  {item.snapchat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
