export default function Experience() {
  return (
    <div id="experience" className="pt-60 px-8 bg-linear-to-t from-[#050414] to-[#1f032a] text-white ">
      <div className="text-center flex flex-col gap-6">
        <h1>
          <span className="border-b-4 text-4xl font-bold border-[#8245ec]">
            EXPERIENCE
          </span>
        </h1>
        <h1 className="text-xl font-bold text-gray-700 mb-16">
          A collection of my work experience and the roles I have taken in
          various organizations
        </h1>
      </div>

      <div className="relative lg:px-45 flex flex-col gap-16">
        <div className="hover:scale-105 duration-300 bg-[#111827] p-8 flex flex-col gap-4 rounded-2xl">
          <div className="flex items-center gap-4">
            <img
              src="/ashatech-Cndb2v-A.png"
              alt="asha tech image"
              className="size-16 bg-white rounded-md"
            ></img>
            <span className="text-white">
              <h1 className="text-2xl font-bold">
                Full Stack Developer Course
              </h1>
              <h1>Asha Tech</h1>
              <h1 className="text-gray-500">May 2026 - Present</h1>
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-500">
              Currently pursuing a Full Stack Web Development course, learning
              to build responsive and dynamic web applications using modern
              frontend and backend technologies. Gaining hands-on experience in
              web development, database management, API integration, and
              full-stack project development.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-white">Skills Learning:</h1>
            <div className="flex flex-wrap gap-2 text-xs md:text-md text-white">
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                HTML
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                CSS
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Tailwind CSS
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                JavaScript
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                React.js
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Next.js
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Redux
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Framer Motion
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Git
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Github
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                REST APIs
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Postman
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-70 right-[50%] h-80 w-1 bg-red-500 -z-5 hidden"></div>
        <div className="hover:scale-105 duration-300 bg-[#111827] p-8 flex-col gap-4 rounded-2xl scale-95 hidden">
          <div className="flex gap-4">
            <img
              src="/zidioLogo-_je3nGMI.png"
              alt="asha tech image"
              className="size-16 bg-white rounded-md "
            ></img>
            <span className="text-white">
              <h1 className="text-2xl font-bold">
                Fullstack Developer Intern Remote
              </h1>
              <h1>Zidio</h1>
              <h1 className="text-gray-500">3 Months</h1>
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-500">
              Developed dynamic and scalable web applications using the MERN
              stack, handling both frontend and backend development.
              Collaborated with cross-functional teams to build responsive UI,
              implement RESTful APIs, and optimize application performance in an
              agile environment.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-white">Skills:</h1>
            <div className="flex flex-wrap gap-2 text-white">
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                HTML
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                CSS
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                JavaScript
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                React JS
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Next JS
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Tailwind CSS
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                MongoDb
              </span>
              <span className="bg-[#8245ec] px-4 py-1 rounded-md border border-gray-400">
                Redux
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
