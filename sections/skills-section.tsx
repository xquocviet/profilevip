"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";

type Skill = {
  name: string;
  logo: string;
};

export default function SkillsSection() {
  const skills: Skill[] = [
    // Frontend
    { name: "HTML", logo: "/logos/html.svg" },
    { name: "CSS", logo: "/logos/css3.svg" },
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "React", logo: "/logos/react.webp" },
    { name: "Next.js", logo: "/logos/nextjs.webp" },
    { name: "Tailwind", logo: "/logos/tailwind.png" },
  
    // Backend
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "Java", logo: "/logos/java.svg" },
    { name: "C++", logo: "/logos/c.svg" },
  
    // Database
    { name: "MySQL", logo: "/logos/mysql.svg" },
   // { name: "PhpMyAdmin", logo: "/logos/phpmyadmin.svg" },
  
    // Tools
    { name: "Git", logo: "/logos/git.png" },
  ];

  const midpoint = Math.ceil(skills.length / 2);
  const skillsTop = skills.slice(0, midpoint);
  const skillsBottom = skills.slice(midpoint);

  return (
    <Reveal>
      <section className="relative py-20 px-6 flex justify-center">
        <div className="relative w-full max-w-6xl space-y-14">
          
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee-left gap-24">
              {[...skillsTop, ...skillsTop].map((skill, index) => (
                <LogoItem key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee-right gap-24">
              {[...skillsBottom, ...skillsBottom].map((skill, index) => (
                <LogoItem key={index} skill={skill} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}

function LogoItem({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center justify-center w-32 h-32 opacity-70 hover:opacity-100 transition duration-500">
      <Image
        src={skill.logo}
        alt={skill.name}
        width={80}
        height={80}
        className="object-contain grayscale hover:grayscale-0 transition duration-500"
      />
    </div>
  );
}