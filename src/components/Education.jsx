export default function Education() {
  const edu = [
    {
      id: 1,
      image: "/ignou-f_Qvcrgy.png",
      title: "Bachelor of Computer Application - BCA",
      loc: "MERIT, Delhi",
      year: "Persuing",
      grade: "Grade : *",
      desc: "I completed my Bachelor's degree in Bachelor Of Computer Application (BCA) from IGNOU, Delhi. Diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    },
    {
      id: 2,
      image: "/school-DZtMkLMK.png",
      title: "CBSE (XII) - Physics, Chemistry, Math",
      loc: "Govt Senior Secondary School, Badarpur",
      year: "2021-2023",
      grade: "Grade : 71%",
      desc: "I completed my class 12 education from Govt Senior Secondary School, Badarpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    },
    {
      id: 3,
      image: "/10-SBmE_AXo.png",
      title: "CBSE (X) - Science with Maths",
      loc: "Govt Senior Secondary School, Badarpur",
      year: "2020-2021",
      grade: "Grade : 75%",
      desc: "I completed my class 10 education from Govt Senior Secondary School, Badarpur, under the CBSE board, where I studied Science with Math.",
    },
  ];
  return (
    <div id="education" className="relative pt-60 px-8 md:px-45 bg-linear-to-b from-[#050414] to-[#1f032a] text-white">
      <div className="text-center flex flex-col gap-6">
        <h1>
          <span className="border-b-4 text-4xl font-bold border-[#8245ec]">
            EDUCATION
          </span>
        </h1>
        <h1 className="text-xl font-bold text-gray-700 mb-16">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </h1>
        <div className="absolute top-122 md:top-100 md:right-[50%] h-280 md:h-235 w-1 bg-white"></div>
      </div>

      <div>
        {edu.map((data) => {
          return (
            <div
              key={data.id}
              className={`flex flex-col pb-6 md:pb-0 pl-4 ${data.id == 2 ? "items-end" : "items-start"} `}
            >
              <div className="border rounded-2xl flex flex-col gap-2 md:gap-4 p-6 md:w-96 hover:scale-105 duration-300 bg-[#0d081f]">
                <div className="flex gap-4 items-center ">
                  <img
                    src={data.image}
                    alt="school image"
                    className="size-10"
                  />
                  <span>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <h1 className="text-sm font-semibold">{data.loc}</h1>
                    <h1 className="text-sm">{data.year}</h1>
                  </span>
                </div>
                <h1 className="font-bold">{data.grade}</h1>
                <p className="font-semibold"> {data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
