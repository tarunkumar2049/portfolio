export default function Skills() {
  const Frontend = [
    {
      id: 1,
      image: "/HTML5.png",
      title: "HTML",
    },
    {
      id: 2,
      image: "/CSS3.png",
      title: "CSS",
    },
    {
      id: 3,
      image: "/JavaScript.png",
      title: "JavaScript",
    },
    {
      id: 4,
      image: "/React.png",
      title: "React JS",
    },
    {
      id: 5,
      image: "/Redux.png",
      title: "Redux",
    },
    {
      id: 6,
      image: "/Next.js.png",
      title: "Next JS",
    },
    {
      id: 7,
      image: "/Tailwind CSS.png",
      title: "Tailwind CSS",
    },
    {
      id: 8,
      image: "/Material Ui.png",
      title: "Material Ui",
    },
    // {
    //   id: 9,
    //   image: "/Bootstrap.png",
    //   title: "Bootstrap",
    // },
  ];
  const Backend = [
    // {
    //   id: 1,
    //   image: "/Node.js.png",
    //   title: "Node JS",
    // },
    // {
    //   id: 2,
    //   image: "/Express.png",
    //   title: "Express Js",
    // },
    // {
    //   id: 3,
    //   image: "/MongoDB.png",
    //   title: "MongoDB",
    // },
    // {
    //   id: 4,
    //   image: "/Cloudinary.png",
    //   title: "Cloudinary",
    // },
    // {
    //   id: 5,
    //   image: "/JWT.png",
    //   title: "JWT",
    // },
    // {
    //   id: 6,
    //   image: "/Bcrypt.png",
    //   title: "Bcrypt",
    // },
    // {
    //   id: 7,
    //   image: "/logo.png",
    //   title: "Argon2",
    // },
    // {
    //   id: 8,
    //   image: "/Nodemailer.png",
    //   title: "Nodemailer",
    // },
  ];
  const Languages = [
    {
      id: 1,
      image: "/JavaScript.png",
      title: "JavaScript",
    },
    {
      id: 2,
      image: "/TypeScript.png",
      title: "TypeScript",
    },
  ];
  const Tools = [
    {
      id: 1,
      image: "/Git.png",
      title: "Git",
    },
    {
      id: 2,
      image: "/GitHub.png",
      title: "GitHub",
    },
    {
      id: 3,
      image: "/VS Code.png",
      title: "VS Code",
    },
    // {
    //   id: 4,
    //   image: "/Postman.png",
    //   title: "Postman",
    // },
    // {
    //   id: 5,
    //   image: "/Compass.png",
    //   title: "Compass",
    // },
    {
      id: 6,
      image: "/Vercel.png",
      title: "Vercel",
    },
  ];
  return (
    <div className="mx-45">
      <div className="text-center flex flex-col gap-6">
        <h1>
          <span className="border-b-4 text-4xl font-bold border-[#8245ec]">
            SKILLS
          </span>
        </h1>
        <h1 className="text-xl font-bold text-gray-700 mb-16">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="text-center bg-[#111827] rounded-2xl border-2 border-white text-gray-400 ">
          <h1 className="text-3xl font-bold py-4">Frontend</h1>
          <div className="grid grid-cols-3 gap-4 px-6 pb-4 hover:skew-x-4">
            {Frontend.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex border-2 border-gray-600 rounded-4xl justify-center py-3"
                >
                  <div className="flex gap-4">
                    <span className="overflow-hidden ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-7"
                      />
                    </span>
                    <h1 className="font-semibold">{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-[#111827] rounded-2xl border-2 border-white text-gray-400">
          <h1 className="text-3xl font-bold py-4">Backend</h1>
          <div className="grid grid-cols-3 gap-4 px-6 pb-4 hover:skew-x-4">
            {Backend.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex border-2 border-gray-600 rounded-4xl justify-center py-3"
                >
                  <div className="flex gap-4">
                    <span className="overflow-hidden ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-7"
                      />
                    </span>
                    <h1 className="font-semibold">{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-[#111827] rounded-2xl border-2 border-white text-gray-400">
          <h1 className="text-3xl font-bold py-4">Languages</h1>
          <div className="grid grid-cols-3 gap-4 px-6 pb-4 hover:skew-x-4">
            {Languages.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex border-2 border-gray-600 rounded-4xl justify-center py-3"
                >
                  <div className="flex gap-4">
                    <span className="overflow-hidden ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-7"
                      />
                    </span>
                    <h1 className="font-semibold">{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center bg-[#111827] rounded-2xl border-2 border-white text-gray-400">
          <h1 className="text-3xl font-bold py-4">Tools</h1>
          <div className="grid grid-cols-3 gap-4 px-6 pb-4 hover:skew-x-4">
            {Tools.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex border-2 border-gray-600 rounded-4xl justify-center py-3"
                >
                  <div className="flex gap-4">
                    <span className="overflow-hidden ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-7"
                      />
                    </span>
                    <h1 className="font-semibold">{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
