"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-20 text-center bg-black">

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl font-bold"
            >
                Ready to Transform?
            </motion.h2>

            <Link href="/apply">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full font-bold"
                >
                    Apply Now
                </motion.button>
            </Link>

        </section>
    );
}