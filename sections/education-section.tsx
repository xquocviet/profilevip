"use client";

import Section from "@/components/section";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function EducationSection() {
  return (
    <Reveal>
    <Section title="Education">
      <div className="group relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10 w-full rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-xl p-8 transition-all duration-500 group-hover:border-white/20">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-black/5 bg-gray-100">
                <Image
                  src="/assets/logopct.png"
                  alt="Phan Chu Trinh Logo"
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Phan Chu Trinh No. 1 High School
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  A10 - K19
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-400 whitespace-nowrap">
              Sep 2024 — May 2027
            </div>
          </div>

          <p className="mt-8 text-gray-400 leading-relaxed text-sm md:text-base">
            I am currently studying at Phan Chu Trinh No. 1 High School. This is the
            stage where I am building my foundation in architecture and gradually
            pursuing my passion for programming. I spend my free time studying web
            development and working on my own small projects.
          </p>
        </div>
      </div>
    </Section>
    </Reveal>
  );
}