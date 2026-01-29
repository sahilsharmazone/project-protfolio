"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300",
                scrolled
                    ? "bg-[#121212]/50 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <Link
                href="/"
                className="text-2xl font-bold tracking-tighter text-white"
                onClick={(e) => scrollToSection(e as any, "#home")}
            >
                Sahil Sharma
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Icon Placeholder (Optional for now) */}
            <div className="md:hidden">
                {/* Simplified mobile menu trigger if needed later */}
            </div>
        </motion.nav>
    );
}
