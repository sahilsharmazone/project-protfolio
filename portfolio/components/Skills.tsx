"use client";

import { motion } from "framer-motion";
import {
    SiPython, SiPostgresql, SiTensorflow, SiLangchain,
    SiN8N, SiGooglecloud, SiFastapi, SiSupabase, SiOpenai, SiReact
} from "react-icons/si";
import { LuBrainCircuit, LuWorkflow, LuDatabase, LuHeart } from "react-icons/lu";

// Map concepts to specific icons
const skills = {
    "Core": [
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: SiPostgresql },
        { name: "TensorFlow", icon: SiTensorflow }
    ],
    "AI/ML": [
        { name: "RAG", icon: LuBrainCircuit },
        { name: "LLMs", icon: SiOpenai }, // Using OpenAI as proxy for LLMs
        { name: "LangChain", icon: SiLangchain },
        { name: "Multi-Agent Workflows", icon: LuWorkflow }
    ],
    "Tools": [
        { name: "n8n", icon: SiN8N },
        { name: "GCP", icon: SiGooglecloud },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Pinecone", icon: LuDatabase }, // Generic DB for Pinecone
        { name: "Supabase", icon: SiSupabase },
        { name: "Lovable", icon: LuHeart },
        { name: "Antigravity", icon: LuBrainCircuit },
        { name: "React", icon: SiReact },
        { name: "RESTful API", icon: LuWorkflow }
    ]
};

export default function Skills() {
    return (
        <section id="expertise" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter"
                >
                    Technical Toolkit
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-purple-400 mb-6">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-1 text-sm text-white/80 bg-white/5 rounded-full border border-white/5 hover:border-purple-400/30 transition-colors"
                                    >
                                        <skill.icon className="text-lg opacity-70" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
