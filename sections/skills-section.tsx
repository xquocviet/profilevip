"use client";

import Section from "@/components/section";
import Reveal from "@/components/Reveal";

type Skill = {
  name: string;
};

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
  ];

  return (
    <Reveal>
    <Section title="Skills">
      <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
    </Reveal>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur-lg px-4 py-3 text-center transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-white/20">
        <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </p>
      </div>
    </div>
  );
}