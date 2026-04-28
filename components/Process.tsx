"use client";

import { motion } from "framer-motion";

const steps = [
    "Fill the Form",
    "Get Custom Plan",
    "Start Training",
    "See Results",
];

export default function Process() {
    return (
        <section className="py-20 text-center">

            <h2 className="text-3xl gold font-bold mb-10">
                How It Works
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-6 bg-[#111] rounded-xl"
                    >
                        {s}
                    </motion.div>
                ))}
            </div>

        </section>
    );
}