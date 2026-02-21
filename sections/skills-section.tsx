"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

type Skill = {
  name: string;
  logo: string;
  description: string;
  power: string;
};

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: "HTML", logo: "/logos/html.svg", description: "Structure & Semantic Web", power: "Markup Mastery" },
    { name: "CSS", logo: "/logos/css3.svg", description: "Layout & Visual System", power: "UI Architect" },
    { name: "JavaScript", logo: "/logos/javascript.svg", description: "Dynamic Logic Engine", power: "Core Language" },
    { name: "React", logo: "/logos/react.webp", description: "Component-Based UI", power: "Virtual DOM Control" },
    { name: "Next.js", logo: "/logos/nextjs.webp", description: "Fullstack React Framework", power: "SSR / App Router" },
    { name: "Tailwind", logo: "/logos/tailwind.png", description: "Utility-First Styling", power: "Rapid UI Build" },
    { name: "Node.js", logo: "/logos/nodejs.svg", description: "Server Runtime", power: "Backend Engine" },
    { name: "Python", logo: "/logos/python.svg", description: "Automation & AI", power: "Scripting Core" },
    { name: "Java", logo: "/logos/java.svg", description: "Enterprise Backend", power: "OOP Architecture" },
    { name: "C++", logo: "/logos/c.svg", description: "High Performance", power: "Low-Level Control" },
    { name: "MySQL", logo: "/logos/mysql.svg", description: "Relational Database", power: "Structured Data" },
    { name: "Git", logo: "/logos/git.png", description: "Version Control", power: "Code Management" },
  ];

  const midpoint = Math.ceil(skills.length / 2);
  const skillsTop = skills.slice(0, midpoint);
  const skillsBottom = skills.slice(midpoint);

  return (
    <Reveal>
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 flex justify-center">
        <div className="relative w-full max-w-6xl space-y-10 sm:space-y-14">
          <MarqueeRow skills={skillsTop} direction="left" />
          <MarqueeRow skills={skillsBottom} direction="right" />
        </div>
      </section>
    </Reveal>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: Skill[];
  direction: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-8 sm:gap-14 lg:gap-24 will-change-transform ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {[...skills, ...skills].map((skill, index) => (
          <LogoItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function LogoItem({ skill }: { skill: Skill }) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 6;
    const rotateY = ((x / rect.width) - 0.5) * -6;

    ref.current!.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;

    setPos({ x: e.clientX, y: e.clientY });
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    setActive(false);
  };

  return (
    <>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={reset}
        onClick={() => setActive(!active)}
        className="
          flex items-center justify-center
          w-20 h-20
          sm:w-20 sm:h-20
          md:w-24 md:h-24
          lg:w-28 lg:h-28
          transition-transform duration-200
          cursor-pointer
        "
      >
        <Image
          src={skill.logo}
          alt={skill.name}
          width={120}
          height={120}
          className="object-contain w-full h-full p-1"
        />
      </div>

      {active &&
        createPortal(
          <SkillCard skill={skill} x={pos.x} y={pos.y} />,
          document.body
        )}
    </>
  );
}

function SkillCard({
  skill,
  x,
  y,
}: {
  skill: Skill;
  x: number;
  y: number;
}) {
  const width = window.innerWidth < 640 ? 220 : 260;

  const left =
    x + width > window.innerWidth
      ? window.innerWidth - width - 12
      : x + 16;

  const top =
    y + 180 > window.innerHeight
      ? window.innerHeight - 200
      : y + 16;

  return (
    <div
      style={{ top, left, width }}
      className="
        fixed z-[9999]
        p-4
        rounded-xl
        bg-zinc-900/95
        border border-indigo-500/20
        shadow-[0_0_25px_rgba(99,102,241,0.25)]
        backdrop-blur-xl
        text-white
        animate-fadeIn
      "
    >
      <h3 className="text-base font-semibold text-indigo-400">
        {skill.name}
      </h3>

      <p className="text-xs text-gray-300 mt-2 leading-relaxed">
        {skill.description}
      </p>

      <div className="mt-3 text-[10px] uppercase tracking-widest text-purple-400">
        {skill.power}
      </div>
    </div>
  );
}