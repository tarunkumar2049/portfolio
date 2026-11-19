import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="px-45 flex justify-between py-4 fixed bg-transparent z-20 backdrop-blur-xl text-white">
      <div className="flex font-semibold text-xl ">
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
      </div>
      <div className="flex font-semibold text-lg  gap-7 mx-65 ">
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={""}
        >
          About
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={""}
        >
          Skills
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={""}
        >
          Experience
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={""}
        >
          Projects
        </Link>
        <Link
          className="hover:text-[#8245ec] duration-300 transition-all hover:scale-110"
          href={""}
        >
          Education
        </Link>
      </div>
      <div className="flex gap-4">
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
