"use client";

import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function TrainerPage() {
    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white pt-25">

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-7xl mx-auto grid md:grid-cols-3"
            >

                {/* LEFT SIDEBAR */}
                <motion.div
                    variants={fadeLeft}
                    className="bg-[#111] p-8 space-y-6"
                >

                    <motion.img
                        src="/profile.png"
                        className="rounded-xl w-full"
                        whileHover={{ scale: 1.03 }}
                    />

                    <motion.div variants={fadeUp}>
                        <h1 className="text-3xl font-bold gold">
                            Sibin Binu
                        </h1>
                        <p className="text-gray-400 text-sm mt-2">
                            Nellikkunnel H, Teekoy P.O <br />
                            Kottayam – 686580
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="gold font-semibold">Personal Details</h3>
                        <p className="text-gray-400 text-sm">
                            Sex: Male <br />
                            Weight: 80 Kg
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="gold font-semibold">Contact</h3>
                        <p className="text-gray-400 text-sm">
                            7558084893 <br />
                            sibinbinu553@gmail.com
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="gold font-semibold">Languages</h3>
                        <p className="text-gray-400 text-sm">
                            Malayalam, English, Tamil
                        </p>
                    </motion.div>

                </motion.div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-2 p-8 space-y-10">

                    {/* PERSONALITY */}
                    <motion.div variants={fadeRight}>
                        <h2 className="text-2xl font-bold gold mb-3">
                            Personality
                        </h2>
                        <p className="text-gray-400">
                            Exceptional athlete committed to maintaining peak physical fitness.
                            Dedicated to helping others achieve their fitness goals.
                        </p>
                    </motion.div>

                    {/* EDUCATION */}
                    <motion.div variants={fadeRight}>
                        <h2 className="text-2xl font-bold gold mb-3">
                            Education
                        </h2>

                        <div className="text-gray-400 text-sm space-y-3">
                            <p>
                                Extreme Fitness Academy – 2025 <br />
                                Diploma in Personal Training
                            </p>

                            <p>
                                Diploma in Fire and Safety – 2023
                            </p>

                            <p>
                                SSLC – 2016
                            </p>
                        </div>
                    </motion.div>

                    {/* SKILLS */}
                    <motion.div variants={fadeRight}>
                        <h2 className="text-2xl font-bold gold mb-3">
                            Skills
                        </h2>

                        <div className="grid grid-cols-2 gap-3 text-gray-400 text-sm">
                            <p>• Personal Training</p>
                            <p>• Weight Loss Coaching</p>
                            <p>• Strength Training</p>
                            <p>• CPR & First Aid</p>
                            <p>• Diet Planning</p>
                            <p>• Client Communication</p>
                        </div>
                    </motion.div>

                    {/* CERTIFICATIONS */}
                    <motion.div variants={fadeUp}>
                        <h2 className="text-2xl font-bold gold mb-3">
                            Certifications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.img
                                src="/cert1.jpg"
                                className="rounded-xl"
                                whileHover={{ scale: 1.05 }}
                            />
                            <motion.img
                                src="/cert2.jpg"
                                className="rounded-xl"
                                whileHover={{ scale: 1.05 }}
                            />
                        </div>
                    </motion.div>

                </div>

            </motion.div>
        </div>
    );
}