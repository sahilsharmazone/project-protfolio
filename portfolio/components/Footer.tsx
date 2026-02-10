"use client";

import Magnetic from "@/components/ui/Magnetic";
import { motion } from "framer-motion";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#121212] py-20 px-8 md:px-12 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="flex flex-col gap-6 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
                    >
                        Let&apos;s build something <span className="text-purple-400">extraordinary.</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                        Based in India, working globally. Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-start md:items-end">
                    <Magnetic>
                        <a
                            href="mailto:sahil200129@gmail.com"
                            className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                        >
                            <SiGmail className="text-xl text-white/70 group-hover:text-white transition-colors" />
                            <span className="text-white font-medium">sahil200129@gmail.com</span>
                        </a>
                    </Magnetic>

                    <div className="flex gap-4">
                        <Magnetic>
                            <a
                                href="https://linkedin.com/in/ssharmaai23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all group"
                            >
                                <SiLinkedin className="text-xl text-white/70 group-hover:text-white transition-colors" />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="tel:+917982335100"
                                className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-green-600 hover:border-green-600 transition-all group"
                            >
                                <FiPhone className="text-xl text-white/70 group-hover:text-white transition-colors" />
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white/30">
                    &copy; {new Date().getFullYear()} Sahil Sharma. All rights reserved.
                </p>
                <p className="text-xs text-white/20 uppercase tracking-widest hidden md:block">
                    Crafted with Next.js & Framer Motion
                </p>
            </div>
        </footer>
    );
}
