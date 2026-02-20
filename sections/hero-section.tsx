"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

<div className="absolute inset-0 -z-10 pointer-events-none">
  <div
    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"
    style={{
      WebkitMaskImage:
        "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 75%)",
      maskImage:
        "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 75%)",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
    }}
  />
</div>

      <div className="relative flex items-center justify-center">
        <div className="relative w-[170px] h-[170px]">
          <Image
            src="/assets/wuocziet.jpg"
            alt="Profile Image"
            fill
            className="object-cover rounded-full"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <Image
          src="/assets/sakura_ink.png"
          alt="Phoenix Frame"
          width={340}
          height={340}
          quality={100}
          priority
          unoptimized
          className="absolute scale-110 pointer-events-none select-none"
        />
      </div>

      <h2 className="mt-8 text-4xl md:text-6xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Lê Quốc Việt
      </h2>

      <p className="mt-6 text-2xl md:text-3xl font-mono text-gray-400">
        Software Engineer
      </p>

      <div className="mt-8 flex items-center">
        <button className="group bg-white text-black px-7 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10">
          Resume
          <ArrowRightIcon className="ml-2 size-5 inline-flex transition-transform group-hover:translate-x-1" />
        </button>

        <button className="ml-4 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-gray-200 px-6 py-2.5 rounded-xl transition-all duration-300">
          Connect me
        </button>
      </div>

      <div className="mt-12 flex items-center space-x-6">
        <a
          href="https://facebook.com/xlequocviet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src="/assets/facebook.png"
            alt="Facebook"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>

        <a
          href="https://instagram.com/xlequocviet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src="/assets/instagram.webp"
            alt="Instagram"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>

        <a
          href="https://t.me/WZiet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src="/assets/telegram.png"
            alt="Telegram"
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
      </div>

    </div>
  );
}