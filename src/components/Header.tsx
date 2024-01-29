"use client";

import Link from "next/link";
import logo from "@/assets/clearlink-logo.svg";
import Image from "next/image";
import { headerLinks } from "@/constants/header-links";
import Button from "./shared/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={`py-3 px-8 ${
        openMenu ? "rounded" : "rounded-[100px]"
      } border-gray-300 border bg-gray-100 mx-auto mb-24`}
    >
      <nav className="flex flex-row items-center justify-between">
        <Link href={"/"}>
          <Image
            src={logo}
            width={100}
            height={100}
            quality={100}
            alt="ClearLink Logo"
            className="object-contain"
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? (
            <AiOutlineClose size={25} color="black" />
          ) : (
            <AiOutlineMenu size={25} color="black" />
          )}
        </button>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center gap-10">
          {headerLinks.map((link) => (
            <Link
              className="flex items-center gap-1"
              key={link.name}
              href={link.url}
            >
              <span className="text-gray-500 font-semibold text-sm">
                {link.name}
              </span>
              {link.icon && (
                <Image
                  src={link.icon}
                  alt={`${link.name} chevron down`}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              )}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Button
            name="Talk to sales"
            classNames="border-gray-400 text-gray-900 bg-white border"
          />

          <Button name="Sign up for free" classNames="bg-blue-700 text-white" />
        </div>
      </nav>

      {/* Mobile Navbar  */}
      <nav
        className={`flex flex-col items-start gap-5 md:hidden ${
          openMenu ? "flex pt-5" : "hidden"
        }`}
      >
        {headerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            onClick={() => setOpenMenu((prev) => !prev)}
            className="flex items-center gap-2"
          >
            <span className="text-gray-500 font-semibold text-sm">
              {link.name}
            </span>

            {link.icon && (
              <Image
                src={link.icon}
                alt={`${link.name} chevron down`}
                width={16}
                height={16}
                className="object-contain"
              />
            )}
          </Link>
        ))}

        <div className="flex flex-col gap-5 w-full">
          <Button
            name="Talk to sales"
            classNames="border-gray-400 text-gray-900 bg-white border w-full"
          />

          <Button
            name="Sign up for free"
            classNames="bg-blue-700 text-white w-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
