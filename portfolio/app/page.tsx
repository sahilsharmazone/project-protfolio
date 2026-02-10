import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Feedback from "@/components/Feedback";

export default function Home() {
    return (
        <main id="home" className="bg-[#121212] min-h-screen">
            {/* Scroll Container: 500vh gives us plenty of scroll room for the animation */}
            <div className="relative h-[500vh]">
                {/* Sticky viewport */}
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <ScrollyCanvas />
                    <Overlay />
                </div>
            </div>

            {/* Content continues after scroll */}
            <div id="work">
                <Projects />
            </div>

            <Skills />
            <Experience />
            <Feedback />

            <Footer />
        </main>
    );
}
