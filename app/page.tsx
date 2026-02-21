import Main from "@/sections/main";
import AboutSection from "@/sections/about-section";
import Pictures from "@/sections/pictures";
import SkillsSection from "@/sections/skills-section";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <main className="max-md:px-4">
            <Main />
            <AboutSection />
            <Pictures />
            <SkillsSection />
            <Footer />
        </main>
    );
}