"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Animation Maps
    // 0% - 20%: Section 1 Visible
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    // 25% - 50%: Section 2 Visible
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

    // 50% - 75%: Section 3 Visible
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 h-screen w-full pointer-events-none text-white selection:bg-white/20">

            {/* Section 1: Center */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                    Sahil Sharma
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/80 mb-8">
                    AIML Engineer & Agentic Developer
                </p>
                <motion.a
                    href="/sahi sharma resume 2026.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-purple-500/50"
                >
                    <HiDownload className="text-xl" />
                    Download Resume
                </motion.a>
            </motion.div>

            {/* Section 2: Left Aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:pl-24"
            >
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Expertise in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Automation & AI.
                        </span>
                    </h2>
                    <p className="text-xl font-light text-white/70">
                        Python, n8n, LangChain, Pinecone, Lovable & Supabase.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Right Aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:pr-24"
            >
                <div className="max-w-2xl text-right">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Building intelligent <br />
                        Workflows.
                    </h2>
                    <p className="text-xl font-light text-white/70">
                        From strict logic to adaptive agents.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
