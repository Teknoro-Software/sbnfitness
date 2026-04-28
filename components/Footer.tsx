"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-12">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
            >

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold gold">SBN Fitness</h2>
                    <p className="text-gray-400 mt-3 text-sm">
                        Transform your body with proven fitness systems.
                        Fat loss, muscle gain, and lifestyle coaching.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="gold font-semibold mb-3">Quick Links</h3>

                    <div className="flex flex-col space-y-2 text-gray-400">
                        <Link href="/">Home</Link>
                        <Link href="/trainer">Trainer</Link>
                        <Link href="/apply">Apply</Link>
                    </div>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="gold font-semibold mb-3">Contact</h3>

                    <div className="text-gray-400 text-sm space-y-2">
                        <p>📞 7558084893</p>
                        <p>✉️ sibinbinu553@gmail.com</p>
                        <p>📍 Nellikkunnel H, Teekoy P.O
                            Kottayam – 686580</p>
                    </div>
                </div>

            </motion.div>

            {/* CTA STRIP */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-400">
                    Ready to transform your body?
                </p>

                <Link href="/apply">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold"
                    >
                        Start Now
                    </motion.button>
                </Link>
            </motion.div>

            {/* BOTTOM */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                © 2026 SBN Fitness. All rights reserved.
            </div>

        </footer>
    );
}