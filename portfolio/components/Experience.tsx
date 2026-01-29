"use client";

import { motion } from "framer-motion";

const experience = [
    {
        company: "Smartians AI Pvt Ltd",
        role: "AI/ML Engineer",
        period: "Aug 2025 – Oct 2025",
        description: "Designed enterprise-grade AI/ML systems. Developed Clyzo Outreach AI Agent (40% efficiency boost), built RAG chatbots using n8n and vector DBs, and created an HTML-to-PDF Converter API reducing doc prep time by 70%."
    },
    {
        company: "Swaran Soft Support Solutions Pvt Ltd",
        role: "AI Intern",
        period: "Feb 2025 – Aug 2025",
        description: "Built multi-agent chatbots (HelpBot, MeetBot) supporting English/Hindi/Hinglish. automated personalized agent generation, and created a Social Media AI Agent using Flux + NLP (60% effort reduction)."
    },
    {
        company: "Hitachi India Pvt Ltd",
        role: "Data Science Intern",
        period: "Jul 2024 – Aug 2024",
        description: "Processed large datasets and delivered actionable supply chain insights using Python, Pandas, LLMs, and Power BI."
    }
];

const education = [
    {
        institution: "Dr. Akhilesh Das Gupta Institute of Professional Studies, GGSIPU",
        degree: "B.Tech in Artificial Intelligence & Machine Learning",
        period: "2021 – 2025"
    },
    {
        institution: "Kendriya Vidyalaya, Keshavpuram",
        degree: "High School Diploma (Science, 80%)",
        period: "2021"
    }
];

const certifications = [
    "IFACET (IIT Kanpur) – Data Science",
    "IBM – Applied Data Science Capstone",
    "IBM – Internet of Things",
    "Simplilearn - n8n Course: No Code AI Agent Builder",
    "Simplilearn - Langchain Course for beginners",
    "Simplilearn - Hugging Face Projects",
    "Simplilearn - Prompt Engineering with ChatGPT",
    "Office Master – Excel and Power BI using AI"
];

export default function Experience() {
    return (
        <section id="experience" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Experience Column */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter"
                    >
                        Experience
                    </motion.h2>

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l border-white/10"
                            >
                                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-purple-500" />
                                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                <p className="text-purple-400 text-sm mb-2">{item.company} | {item.period}</p>
                                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications Column */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter"
                    >
                        Education
                    </motion.h2>

                    <div className="space-y-12 mb-16">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l border-white/10"
                            >
                                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-500" />
                                <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                                <p className="text-blue-400 text-sm mb-2">{item.institution}</p>
                                <p className="text-white/60 text-sm">{item.period}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                        <ul className="grid grid-cols-1 gap-3">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex items-center gap-3 text-white/70 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
