"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "Trainer", href: "/trainer" },
        { name: "Apply", href: "/apply" },
    ];

    return (
        <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
      ${scrolled ? "bg-black shadow-lg" : "bg-black/40 backdrop-blur"}`}
        >
            {/* LOGO */}
            <h1 className="font-bold text-xl gold">SBN Fitness</h1>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-8">
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            className={`cursor-pointer ${pathname === link.href ? "text-yellow-500" : "text-white"
                                }`}
                        >
                            {link.name}
                        </motion.span>
                    </Link>
                ))}
            </div>

            {/* CTA BUTTON */}
            <Link href="/apply">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-yellow-500 px-5 py-2 rounded-full text-black font-semibold"
                >
                    Join Now
                </motion.button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-6 space-y-4 md:hidden"
                >
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <span onClick={() => setMenuOpen(false)}>
                                {link.name}
                            </span>
                        </Link>
                    ))}

                    <Link href="/apply">
                        <button className="bg-yellow-500 px-6 py-2 rounded-full text-black">
                            Join Now
                        </button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
}