import Footer from "@/components/footer";
import AboutSection from "@/sections/about-section";
import EducationSection from "@/sections/education-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

export default function Page() {
    return (
        <main className="max-md:px-4">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EducationSection />
            <SkillsSection />
            <Footer />
        </main>
    );
}