"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
    SiPython, SiPostgresql, SiTensorflow, SiLangchain,
    SiN8N, SiGooglecloud, SiFastapi, SiSupabase, SiOpenai, SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb
} from "react-icons/si";
import { LuBrainCircuit, LuWorkflow, LuDatabase, LuHeart } from "react-icons/lu";
import { useRef, useEffect, useState } from "react";
import { frames2 } from "@/lib/frames2";

// Map concepts to specific icons
const skills = {
    "Core": [
        { name: "Python", icon: SiPython },
        { name: "TypeScript", icon: SiTypescript },
        { name: "SQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "TensorFlow", icon: SiTensorflow }
    ],
    "Frontend": [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    "AI/ML": [
        { name: "RAG", icon: LuBrainCircuit },
        { name: "LLMs", icon: SiOpenai },
        { name: "LangChain", icon: SiLangchain },
        { name: "LangGraph", icon: LuWorkflow },
        { name: "Multi-Agent Workflows", icon: LuWorkflow }
    ],
    "Tools & Backend": [
        { name: "n8n", icon: SiN8N },
        { name: "GCP", icon: SiGooglecloud },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Pinecone", icon: LuDatabase },
        { name: "Supabase", icon: SiSupabase },
        { name: "Lovable", icon: LuHeart },
        { name: "Antigravity", icon: LuBrainCircuit },
    ]
};

export default function Skills() {
    const containerRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frames2.length - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        frames2.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frames2.length) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        });
        setImages(imgs);
    }, []);

    // Render loop
    useMotionValueEvent(currentIndex, "change", (latest) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const index = Math.floor(latest);
        const img = images[index];

        if (img) {
            // Calculate cover dimensions
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section ref={containerRef} id="expertise" className="relative w-full min-h-screen bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Scrolling Background Canvas */}
            <div className="absolute inset-0 z-0 opacity-100">
                <canvas ref={canvasRef} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                        Technical Toolkit
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white/80 bg-white/5 rounded-full border border-white/10 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white transition-all cursor-default"
                                    >
                                        <skill.icon className="text-lg opacity-70" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
