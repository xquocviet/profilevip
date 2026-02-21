"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "MESSI IS GOAT",
      description: "Messi officially becomes GOAT",
      image: "/assets/hinh-nen-messi.png",
      link: "https://bongdaplus.vn/bong-da-the-gioi/messi-chinh-thuc-tro-thanh-goat-4462502410.html",
    },
    {
      title: "MESSI VS SON",
      description: "Son Heung-min and Messi: A clash that will shape new power dynamics in MLS.",
      image: "/assets/messivsson.webp",
      link: "https://vnexpress.net/son-heung-min-va-messi-cuoc-doi-dau-dinh-hinh-quyen-luc-moi-tai-mls-5042451.html",
    },
    {
      title: "MESSI - INTER MIAMI",
      description: "Messi will help Inter Miami become the richest team in MLS in 2026.",
      image: "/assets/messi.webp",
      link: "https://vnexpress.net/messi-giup-inter-miami-giau-nhat-mls-2026-5041339.html",
    },
  ];

  return (
    <Reveal>
      <section className="mt-20 px-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/20 w-full"
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 min-h-[160px] flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center justify-between">
            {project.title}
            <ArrowUpRight className="size-5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <span className="mt-6 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
          Watch News →
        </span>
      </div>
    </Link>
  );
}