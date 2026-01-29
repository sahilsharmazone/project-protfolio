export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] py-12 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-white/40">
                        &copy; {new Date().getFullYear()} Sahil Sharma. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-sm text-white/60">
                    <a href="https://linkedin.com/in/ssharmaai23" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="mailto:sahil200129@gmail.com" className="hover:text-white transition-colors">Email</a>
                    <a href="tel:+917982335100" className="hover:text-white transition-colors">Phone</a>
                </div>

                <div className="text-right hidden md:block">
                    <p className="text-xs text-white/20 uppercase tracking-widest">
                        Built with Next.js &middot; Tailwind &middot; Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
