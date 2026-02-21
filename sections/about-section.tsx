"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <Reveal>
      <div id="about"></div><br></br>

      <section className="relative mt-5 px-5 sm:px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl"
        >
          <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-white/40 via-white/10 to-white/30 opacity-30" />

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="
              relative
              rounded-[28px]
              bg-white/[0.06]
              backdrop-blur-[40px]
              border border-white/20
              p-7 sm:p-10 md:p-14
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            "
          >
            <div className="pointer-events-none absolute inset-0 rounded-[28px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent opacity-40" />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-[0.03] mix-blend-overlay bg-[url('/assets/noise.png')]" />

            <div className="relative space-y-6 text-gray-200 text-[14px] sm:text-[15px] md:text-base leading-relaxed tracking-[0.2px]">
              <p>
                My name is <span className="text-white font-medium">Le Quoc Viet</span>, also known as Lee Wuoc Ziet.
                I’m a developer who enjoys learning, experimenting, and turning ideas into real digital products.
                I’m currently exploring both front-end and back-end development, focusing on building clean,
                smooth, and user-friendly web applications.
              </p>

              <p>
                My goal is to create digital experiences that feel simple, reliable,
                and thoughtfully crafted — where design and performance work together naturally.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Reveal>
  );
}