import Section from "@/components/section";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <Reveal>
    <Section title="About">
      <div className="max-w-3xl text-sm leading-relaxed text-gray-400 space-y-6">
        <p>
          My name is Le Quoc Viet, also known as Lee Wuoc Ziet. I’m a developer
          who enjoys learning, experimenting, and turning ideas into real
          products.
        </p>

        <p>
          I’m currently exploring both front-end and back-end development,
          focusing on building clean, smooth, and user-friendly web
          applications.
        </p>

        <p>
          My goal is to create digital experiences that are simple, reliable,
          and thoughtfully crafted.
        </p>
      </div>
    </Section>
    </Reveal>
  );
}