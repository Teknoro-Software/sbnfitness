"use client";

import { motion } from "framer-motion";

const programs = [
    {
        title: "Body Recomposition",
        img: "body.jpg",
    },
    {
        title: "Weight Loss",
        img: "weight.jpg",
    },
    {
        title: "Muscle Gain",
        img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a",
    },
    {
        title: "PCOD / Thyroid",
        img: "Fat.jpg",
    },
];

export default function Programs() {
    return (
        <section className="py-20 px-6 text-center">
            <h2 className="text-3xl gold font-bold mb-10">
                Programs
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {programs.map((p, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="relative rounded-xl overflow-hidden"
                    >
                        <img src={p.img} className="h-72 w-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <h3 className="text-xl font-bold">{p.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}