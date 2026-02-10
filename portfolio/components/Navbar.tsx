"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Expertise", href: "#expertise" },
        { name: "Work", href: "#work" },
        // { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300",
                scrolled
                    ? "glass border-b border-white/5"
                    : "bg-transparent"
            )}
        >
            <Magnetic>
                <Link
                    href="/"
                    className="group relative block"
                    onClick={(e) => scrollToSection(e as any, "#home")}
                >
                    <span className="text-2xl font-bold tracking-tighter text-white relative z-10 transition-colors group-hover:text-white/90">
                        Sahil Sharma
                    </span>
                    <span className="absolute -inset-2 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -z-0" />
                </Link>
            </Magnetic>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, i) => (
                    <Magnetic key={link.name}>
                        <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="relative text-sm font-medium text-white/70 hover:text-white transition-colors px-2 py-1"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full" />
                        </a>
                    </Magnetic>
                ))}
            </div>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/20 rounded-full" />
                </div>
            </div>
        </motion.nav>
    );
}

