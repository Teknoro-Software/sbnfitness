"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-screen relative flex items-center justify-center text-center">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1599058917212-d750089bc07e')",
                }}
            />

            <div className="absolute inset-0 bg-black/70" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 px-6"
            >
                <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Build Your Dream Body
                </motion.h1>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-gray-300"
                >
                    Fat Loss • Muscle Gain • Confidence
                </motion.p>

                <Link href="/apply">
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full font-bold"
                    >
                        Start Transformation
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
}