"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "100+", label: "Clients Transformed" },
    { value: "5+", label: "Years Experience" },
    { value: "95%", label: "Success Rate" },
];

export default function Stats() {
    return (
        <section className="py-20 text-center bg-[#0b0b0b]">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <h2 className="text-4xl font-bold gold">
                            {s.value}
                        </h2>
                        <p className="text-gray-400 mt-2">{s.label}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}