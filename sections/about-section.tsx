"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <Reveal>
      <div id="about"></div><br></br>
      <section
        className="relative mt-5 px-6 flex justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl"
        >

          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-40" />
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-10 md:p-14 overflow-hidden shadow-2xl shadow-black/40"
          >
            <div className="relative space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
              My name is Le Quoc Viet, also known as Lee Wuoc Ziet. 
              I’m a developer who enjoys learning, experimenting, and turning ideas into real
              I’m currently exploring both front-end and back-end development, focusing on building clean, smooth, and user-friendly web applications.
              </p>

              <p>
              My goal is to create digital experiences that are simple, reliable, and thoughtfully crafted.
              </p>

            </div>
          </motion.div>
        </motion.div>
      </section>
    </Reveal>
  );
}