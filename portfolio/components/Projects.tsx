"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function Projects() {
    return (
        <section className="relative z-20 w-full bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tighter"
                >
                    Selected Works
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {projects.map((project) => (
                        <motion.div
                            variants={itemVariants}
                            key={project.id}
                            className="group relative flex flex-col gap-6"
                        >
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10">
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
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-white/70 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
