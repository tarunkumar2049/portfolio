export default function Projects() {
  const data = [
    {
      id: 1,
      image: "/asha-tech.png",
      title: "Asha Tech",
      desc: "AshaTech is a professional IT solutions company website offering services such as web development, mobile app development, software development, digital marketing, SEO, and IT consulting.",
      tags: [
        "Next Js",
        "Node Js",
        "Tailwind Css",
        "Node.js",
        "JavaScript",
        "Framer Motion",
      ],
    },
    {
      id: 2,
      image: "/medidose.png",
      title: "MediDose",
      desc: "MediDose is a healthcare management web application designed to help users manage their medications, track dosage schedules, and maintain better medication routines.",
      tags: [
        "React Js",
        "Tailwind Css",
        "JavaScript",
        "Node.js",
      ],
    },
  ];

  return (
    <div className="mt-60">
      <div className="text-center flex flex-col gap-6">
        <h1>
          <span className="border-b-4 text-4xl font-bold border-[#8245ec]">
            PROJECTS
          </span>
        </h1>
        <h1 className="text-xl font-bold text-gray-700 mb-16">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </h1>
      </div>

      <div className="px-45 grid grid-cols-3 gap-12">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col gap-4  bg-[#251f38] px-4 py-12 rounded-2xl border border-gray-400 hover:-translate-y-2 duration-300 hover:shadow-2xl shadow-purple-600"
            >
              <div className="h-52 object-contain overflow-hidden">
                <img src={item.image} alt="WaveVisas" />
              </div>
              <h1 className="text-2xl font-bold text-white">{item.title}</h1>
              <p className="line-clamp-3 w-80 text-lg text-gray-500">
                {item.desc}
              </p>
              <div className="text-purple-500/80 flex flex-wrap w-70 gap-2">
                {item.tags.map((tag) => {
                  return (
                    <div className="bg-purple-900/30 px-2 font-semibold text-sm rounded-xl">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
