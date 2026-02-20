import Footer from "@/components/footer";
import AboutSection from "@/sections/about-section";
import Main from "@/sections/main";
import SkillsSection from "@/sections/skills-section";

export default function Page() {
    return (
        <main className="max-md:px-4">
            <Main />
            <AboutSection />
            <SkillsSection />
            <Footer />
        </main>
    );
}