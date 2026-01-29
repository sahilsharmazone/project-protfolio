"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { frames } from "@/lib/frames";
import { cn } from "@/lib/utils";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Map scroll progress to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            for (let i = 0; i < frames.length; i++) {
                const img = new Image();
                img.src = frames[i];
                img.onload = () => {
                    count++;
                    if (count === frames.length) {
                        setImages(loadedImages);
                        setLoaded(true);
                    }
                };
                loadedImages[i] = img;
            }
        };
        loadImages();
    }, []);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Handle high pixel density
        const dpr = window.devicePixelRatio || 1;

        // Check if canvas size matches display size (times DPR)
        // We update canvas size on resize, but here we just draw

        // Object-fit: cover logic
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let renderWidth, renderHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            renderWidth = canvas.width;
            renderHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - renderHeight) / 2;
        } else {
            renderWidth = canvas.height * imgRatio;
            renderHeight = canvas.height;
            offsetX = (canvas.width - renderWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    // Initial render & Resize handler
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth * (window.devicePixelRatio || 1);
                canvas.height = parent.clientHeight * (window.devicePixelRatio || 1);
                canvas.style.width = `${parent.clientWidth}px`;
                canvas.style.height = `${parent.clientHeight}px`;

                if (loaded && images.length > 0) {
                    const currentIndex = Math.round(frameIndex.get());
                    render(currentIndex);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, images]); // Re-run when loaded to ensure first frame draws

    // Update on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (loaded && images.length > 0) {
            render(Math.round(latest));
        }
    });

    return (
        <div className="sticky top-0 h-screen w-full bg-[#121212]">
            <canvas ref={canvasRef} className="block w-full h-full" />

            {/* Loading State Overlay */}
            <div
                className={cn(
                    "absolute inset-0 z-50 flex items-center justify-center bg-[#121212] transition-opacity duration-1000",
                    loaded ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
            >
                <span className="text-white/50 text-sm uppercase tracking-widest font-light animate-pulse">
                    Loading Experience...
                </span>
            </div>
        </div>
    );
}
