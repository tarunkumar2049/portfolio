import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mx-45 flex py-16 gap-35 mt-20">
      <div className="flex flex-col font-bold gap-8">
        <div className="text-3xl flex flex-col gap-4">
          <h1>Hi,I am</h1>
          <div className="text-5xl">
            <h1>Tarun Kumar</h1>
          </div>
          <h1>
            I am a <span className="text-[#8245ec]">Web Developer</span>
          </h1>
        </div>
        <p className="text-lg w-135">
          I am a full-stack developer with over 5 Months of experience in
          building scalable web applications. Skilled in both front-end and
          back-end development, I specialize in the MERN stack and other modern
          technologies to create seamless user experiences and efficient
          solutions.
        </p>
        <Link href={"/abcd.pdf"} target="_blank" className="bg-[#8245ec] text-white text-lg text-center font-bold rounded-4xl px-4 py-3 my-8 w-50 hover:scale-110 duration-300 delay-150">
          DOWNLOAD CV
        </Link>
      </div>

      <div className="bg-contain size-120 bg-amber-600 rounded-full overflow-hidden">
        <img src="/myImage.png" className="scale-140 " />
      </div>
    </div>
  );
}
