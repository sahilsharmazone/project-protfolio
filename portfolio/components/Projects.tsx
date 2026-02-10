"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
    {
        id: 1,
        title: "Clyzo Outreach AI Agent",
        category: "AI automation",
        description: "Increased client engagement efficiency by 40%. A high-tech digital dashboard showing a network of nodes connecting to user profiles.",
        image: "/images/clyzo.png",
    },
    {
        id: 2,
        title: "Multi-Agent Support System",
        category: "Multi-Agent Systems",
        description: "Dynamic routing for HelpBot, MeetBot, and HiringBot in English/Hindi/Hinglish. A futuristic control room with holographic robot assistants.",
        image: "/images/multi_agent_support.png",
    },
    {
        id: 3,
        title: "Social Media AI Agent",
        category: "Marketing Automation",
        description: "Integrated Flux + NLP to reduce manual marketing effort by 60%. A robotic hand holding a glowing smartphone with digital sparks.",
        image: "/images/social_media_agent.png",
    },
    {
        id: 4,
        title: "HTML-to-PDF Converter API",
        category: "Backend API",
        description: "High-performance FastAPI service reducing document prep time by 70%. A minimalist, abstract visualization of code scrolling into a document stack.",
        image: "/images/html_pdf_converter.png",
    },
    {
        id: 5,
        title: "AI Powered Contract Management System",
        category: "AI/ML",
        description: "Intelligent contract analysis and automated approval workflows. Streamlines legal document processing with AI-driven insights and smart analysis.",
        image: "/images/contract_management.png",
    },
    {
        id: 6,
        title: "Proposal Generator",
        category: "AI Automation",
        description: "Automated business proposal creation with intelligent text generation. Transforms templates into polished, professional proposals using advanced AI.",
        image: "/images/proposal_generator.png",
    },
    {
        id: 7,
        title: "Robocall Agent",
        category: "Voice AI",
        description: "Intelligent voice assistant for automated calling with natural conversation flow. Advanced speech synthesis and recognition for seamless interactions.",
        image: "/images/robocall_agent.png",
    },
    {
        id: 8,
        title: "Automotive Inventory System",
        category: "Python & ML",
        description: "Automated scraping system for car inventory with price prediction logic and database synchronization.",
        image: "/images/automotive_inventory.png",
        github: "https://github.com/sahilsharmazone/automotive-inventory",
    },
    {
        id: 9,
        title: "RAG Policy Assistant",
        category: "Generative AI",
        description: "Retrieval-Augmented Generation system for querying company policy documents using local LLMs and LangChain.",
        image: "/images/rag_system.png",
        github: "https://github.com/sahilsharmazone/rag-policy-assistant",
    },
    {
        id: 10,
        title: "Firecrawl Server Integration",
        category: "Automation",
        description: "Custom Firecrawl server setup for advanced web scraping integrated with n8n workflows.",
        image: "/images/firecrawl_server.png",
        github: "https://github.com/sahilsharmazone/firecrawl-server",
    },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="group relative flex flex-col gap-6 rounded-2xl bg-white/5 p-4 border border-white/10 overflow-hidden"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/50 border border-white/5">
                {project.image && (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 saturate-0 group-hover:saturate-100"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                )}

                {/* Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/70 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/20"
                            title="View Code"
                        >
                            <SiGithub className="text-lg" />
                        </a>
                    )}
                    <div className="p-2 bg-black/70 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/20 cursor-pointer">
                        <FiArrowUpRight className="text-lg" />
                    </div>
                </div>
            </div>

            <div className="space-y-3 px-2 pb-2 relative z-20">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <p className="text-white/60 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="work" className="relative z-20 w-full bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tighter"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
