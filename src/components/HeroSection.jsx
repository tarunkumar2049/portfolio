import Link from "next/link";

export default function HeroSection() {
  return (
    <div id="about" className="lg:px-45 px-8 text-center lg:text-left flex flex-col md:flex-row py-16 gap-35 pt-20 lg:pt-40 bg-[#050414] text-white">
      <div className="flex flex-col font-bold gap-8">
        <div className="lg:hidden mx-auto lg:mx-0 bg-contain size-60 md:size-80 lg:size-120  rounded-full overflow-hidden">
        <img src="/myImage.png" className="scale-140 " />
      </div>
        <div className="text-3xl flex flex-col gap-4">
          <h1>Hi,I am</h1>
          <div className="text-5xl">
            <h1>Tarun Kumar</h1>
          </div>
          <h1 className="text-xl md:text-3xl">
            I am a <span className="text-[#8245ec]">Web Developer</span>
          </h1>
        </div>
        <p className="md:text-lg text-md lg:w-135 text-gray-400">
          I am a full-stack developer with over 5 Months of experience in
          building scalable web applications. Skilled in both front-end and
          back-end development, I specialize in the MERN stack and other modern
          technologies to create seamless user experiences and efficient
          solutions.
        </p>
        <Link
          href={"/abcd.pdf"}
          target="_blank"
          className="bg-[#8245ec] shadow-2xl shadow-[#8245ec] text-white mx-auto lg:mx-0 text-lg text-center font-bold rounded-4xl px-4 py-3 my-8 w-50 hover:scale-110 duration-300 delay-150"
        >
          DOWNLOAD CV
        </Link>
      </div>

      <div className="hidden lg:flex items-center mx-auto md:mx-0 bg-contain size-60 lg:size-120  rounded-full overflow-hidden">
        <img src="/myImage.png" className="scale-140 " />
      </div>
    </div>
  );
}
