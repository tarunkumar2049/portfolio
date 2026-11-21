"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  const url = usePathname();
  console.log(url);
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
