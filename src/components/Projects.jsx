"use client";

import Link from "next/link";
import { useState } from "react";
import { BiX } from "react-icons/bi";

export default function Projects() {
  const project = [
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
      code: "https://github.com/tarunkumar2049/asha-tech",
      live: "https://asha-tech-chi.vercel.app/",
    },
    {
      id: 2,
      image: "/medidose.png",
      title: "MediDose",
      desc: "MediDose is a healthcare management web application designed to help users manage their medications, track dosage schedules, and maintain better medication routines.",
      tags: ["React Js", "Tailwind Css", "JavaScript", "Node.js"],
      code: "https://github.com/tarunkumar2049/medidose",
      live: "https://medidose-orpin.vercel.app/",
    },
  ];

  const [popup, setPopup] = useState(false);
  const [id, setId] = useState(" ");
  console.log("popup", popup);

  function popupClick(id) {
    setPopup(true);
    setId(id);
  }
  return (
    <div className="pt-60 pb-6   bg-[#050414] text-white">
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
        {project.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col gap-4  bg-[#251f38] px-4 py-12 rounded-2xl border border-gray-400 hover:-translate-y-2 
              duration-300 hover:shadow-2xl shadow-purple-600 group "
              onClick={() => {
                popupClick(item.id);
              }}
            >
              <div className="h-52 object-contain overflow-hidden ">
                <img
                  src={item.image}
                  alt="WaveVisas"
                  className="group-hover:scale-105 duration-900"
                />
              </div>
              <h1 className="text-2xl font-bold text-white">{item.title}</h1>
              <p className="line-clamp-3 w-80 text-lg text-gray-500">
                {item.desc}
              </p>
              <div className="text-purple-500/80 flex flex-wrap w-70 gap-2">
                {item.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="bg-purple-900/30 px-2 font-semibold text-sm rounded-xl"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {popup && (
        <div className="top-20 fixed flex flex-col ">
          {project
            .filter((data) => data.id == id)
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col gap-6 bg-[#0d081f] mx-90 p-8 pb-40 rounded-2xl"
                >
                  <div
                    className="absolute right-8 text-3xl font-bold hover:scale-125 hover:text-red-600 duration-300"
                    onClick={() => {
                      setPopup(true);
                      setId(" ");
                    }}
                  >
                    <BiX />
                  </div>
                  <div className="flex mt-10 justify-center">
                    <img
                      src={item.image}
                      alt="website image"
                      className="h-40"
                    />
                  </div>
                  <h1 className="text-3xl">{item.title}</h1>
                  <p className=" text-lg text-gray-500">{item.desc}</p>
                  <div className="text-purple-500/80 flex flex-wrap gap-2">
                    {item.tags.map((tag) => {
                      return (
                        <div
                          key={tag}
                          className="bg-purple-900/30 px-2 font-semibold text-sm rounded-xl"
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between gap-10">
                    <Link
                      href={item.code}
                      className="bg-[#1a253c] hover:bg-[#6b21a8] px-27 py-1 rounded-md text-2xl font-semibold"
                      target="_blank"
                    >
                      View Code
                    </Link>
                    <Link
                      href={item.live}
                      className="bg-[#8040b6] hover:bg-[#6b21a8] px-27 py-1 rounded-md text-2xl font-semibold"
                      target="_blank"
                    >
                      View Live
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
