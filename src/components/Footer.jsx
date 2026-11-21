import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center pt-25 bg-[#050414] text-white">
      <h1 className="font-bold text-xl text-purple-600">Tarun Kumar</h1>
      <div className="flex gap-6 my-4 font-semibold">
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
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
      </div>
      <div className="flex gap-4">
        <Link
          href={"https://github.com/tarunkumar2049"}
          target="_blank"
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href={"https://in.linkedin.com/"}
          target="_blank"
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
        >
          <FaLinkedin size={20} />
        </Link>
      </div>
      <div className="flex items-center my-6 text-gray-400">
        <FaRegCopyright />
        2026 Tarun kumar. All rights reserved
      </div>
    </div>
  );
}
