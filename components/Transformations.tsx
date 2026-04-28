"use client";

import { motion } from "framer-motion";

export default function Transformations() {
    return (
        <section className="py-20 bg-[#111] text-center px-6">

            <h2 className="text-3xl gold font-bold mb-10">
                Transformations
            </h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid md:grid-cols-2 gap-8"
            >
                <img
                    src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
                    className="rounded-xl"
                />
                <img
                    src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
                    className="rounded-xl"
                />
            </motion.div>

        </section>
    );
}