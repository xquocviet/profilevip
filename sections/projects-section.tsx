"use client";

import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  external?: boolean;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Diễn Đàn PCT",
      description:
        "Our mission is to create a positive space for sharing, discussing, and connecting.",
      image: "/assets/project1.jpg",
      link: "#",
    },
  ];

  return (
    <Reveal>
    <Section title="Projects">
      <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.external;

  return (
    <Link
      href={project.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/20">

      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white flex items-center justify-between">
          {project.title}

          <ArrowUpRight className="size-5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>

        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6">
          <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
            View Project →
          </span>
        </div>
      </div>
    </Link>
  );
}