"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const url = usePathname();
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div className="md:px-45 w-full px-8 flex justify-between py-4 fixed bg-transparent z-20 backdrop-blur-xl text-white transition-all duration-200">
      <Link href={"/"} className="flex font-semibold text-xl ">
        <span>
          <h1></h1>
        </span>
        <span>
          <h1>Tarun</h1>
        </span>
        <span className="text-[#8245ec] scale-140">
          <h1>/</h1>
        </span>
        <span>
          <h1>Kumar</h1>
        </span>
        <span>
          <h1></h1>
        </span>
      </Link>
      <div className="flex items-center md:hidden ">
        <div
          onClick={() => {
            menu ? setMenu(false) : setMenu(true);
          }}
        >
          <GiHamburgerMenu />
        </div>
        <div
          className={`${menu ? "flex" : "hidden"} flex-col gap-4 fixed px-12 py-8 bg-black/50 items-center left-8 right-8 top-15 rounded-2xl `}
        >
          <Link
            className={`hover:text-[#8245ec] duration-300 transition-all hover:scale-110 ${url == "/about" ? "text-red-500" : "text-white"}`}
            href={"#about"}
            onClick={() => {
              setMenu(false);
            }}
          >
            About
          </Link>
          <Link
            className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
            href={"#skills"}
            onClick={() => {
              setMenu(false);
            }}
          >
            Skills
          </Link>
          <Link
            className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
            href={"#experience"}
            onClick={() => {
              setMenu(false);
            }}
          >
            Experience
          </Link>
          <Link
            className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
            href={"#projects"}
            onClick={() => {
              setMenu(false);
            }}
          >
            Projects
          </Link>
          <Link
            className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
            href={"#education"}
            onClick={() => {
              setMenu(false);
            }}
          >
            Education
          </Link>
          <div className="flex gap-2">
            <Link
              href={"https://github.com/tarunkumar2049"}
              target="_blank"
              className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
            >
              <FaGithub size={25} />
            </Link>
            <Link
              href={"https://in.linkedin.com/"}
              target="_blank"
              className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
            >
              <FaLinkedin size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex font-semibold text-lg  gap-7 mx-65 ">
        <Link
          className={`hover:text-[#8245ec] duration-300 transition-all hover:scale-110 ${url == "/about" ? "text-red-500" : "text-white"}`}
          href={"#about"}
        >
          About
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={"#skills"}
        >
          Skills
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={"#experience"}
        >
          Experience
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={"#projects"}
        >
          Projects
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={"#education"}
        >
          Education
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link
          href={"https://github.com/tarunkumar2049"}
          target="_blank"
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
        >
          <FaGithub size={25} />
        </Link>
        <Link
          href={"https://in.linkedin.com/"}
          target="_blank"
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
        >
          <FaLinkedin size={25} />
        </Link>
      </div>
    </div>
  );
}
