"use client";

import { ArrowDownIcon } from "lucide-react";
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
  placeholder="blur"
  blurDataURL="/assets/default.png"
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
          src="/assets/angry.png"
          alt="Phoenix Frame"
          width={340}
          height={340}
          quality={100}
          priority
          unoptimized
          className="absolute scale-110 pointer-events-none select-none"
        />
      </div>

      <h2 className="mt-8 text-4xl md:text-6xl font-semibold leading-[1.15] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Lê Quốc Việt
      </h2>

      <p className="mt-6 text-2xl md:text-3xl font-mono text-gray-400">
        Software Engineer
      </p>

      <div className="mt-8 flex items-center">

      <a
  href="#about"
  className="group inline-flex items-center px-7 py-2.5 rounded-xl 
  border border-dashed border-white/40 
  text-white/80 
  transition-all duration-300 
  hover:border-white hover:text-white 
  hover:bg-white/5 
  hover:scale-105"
>
  Resume
  <ArrowDownIcon className="ml-2 size-5" />
</a>
        <a
          href="https://t.me/WZiet"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 flex items-center gap-3 px-6 py-2.5 rounded-xl
                     bg-gradient-to-r from-sky-500 to-blue-600
                     hover:from-sky-400 hover:to-blue-500
                     text-white font-medium
                     shadow-lg shadow-blue-500/20
                     transition-all duration-300
                     hover:scale-105"
        >
          <Image
            src="/assets/telegram.png"
            alt="Telegram"
            width={20}
            height={20}
          />
          Connect me
        </a>

      </div>
    </div>
  );
}