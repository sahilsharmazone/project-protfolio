"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import Image from "next/image";

export default function Feedback() {
    return (
        <section id="feedback" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Content & Form */}
                    <div className="order-2 md:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
                        >
                            Have some feedback?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
                        >
                            <form className="flex flex-col gap-4 text-left">
                                <div>
                                    <label className="block text-xs uppercase text-white/40 mb-2 font-medium tracking-widest">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-white/40 mb-2 font-medium tracking-widest">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-white/40 mb-2 font-medium tracking-widest">Message</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors resize-none" placeholder="Your thoughts..." />
                                </div>

                                <div className="mt-4 flex justify-start">
                                    <Magnetic>
                                        <button type="button" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-50 transition-colors">
                                            Send Feedback
                                        </button>
                                    </Magnetic>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="order-1 md:order-2 relative w-full rounded-2xl overflow-hidden border border-white/10"
                    >
                        <Image
                            src="/feedback-side.png"
                            alt="Feedback Visual"
                            width={800}
                            height={800}
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-40" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
