"use client";

import AnimatedSection from "./AnimatedSection";

export default function TrainerProfile() {
    return (
        <AnimatedSection>
            <section className="py-20 px-6 bg-[#0b0b0b]">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT - IMAGE */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div>

                        <h2 className="text-3xl font-bold gold mb-4">
                            Sibin Binu
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Certified Personal Trainer with a strong commitment to helping
                            individuals transform their body and lifestyle through structured
                            fitness and nutrition plans.
                        </p>

                        {/* PERSONALITY */}
                        <div className="mb-6">
                            <h3 className="gold font-semibold mb-2">Personality</h3>
                            <p className="text-gray-400 text-sm">
                                Highly disciplined and passionate about fitness. Dedicated to
                                guiding clients toward sustainable transformations and long-term
                                health.
                            </p>
                        </div>

                        {/* EDUCATION */}
                        <div className="mb-6">
                            <h3 className="gold font-semibold mb-2">Education</h3>
                            <ul className="text-gray-400 text-sm space-y-1">
                                <li>• Diploma in Personal Training – Extreme Fitness Academy</li>
                                <li>• Level 2 Gym Instructor</li>
                                <li>• Level 3 Personal Trainer (UK & UAE Certified)</li>
                            </ul>
                        </div>

                        {/* SKILLS */}
                        <div className="mb-6">
                            <h3 className="gold font-semibold mb-2">Skills</h3>
                            <ul className="text-gray-400 text-sm grid grid-cols-2 gap-2">
                                <li>• Fat Loss Coaching</li>
                                <li>• Body Recomposition</li>
                                <li>• Strength Training</li>
                                <li>• Nutrition Planning</li>
                                <li>• Client Communication</li>
                                <li>• Flexibility Training</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* CERTIFICATIONS */}
                <div className="max-w-6xl mx-auto mt-16 text-center">

                    <h3 className="text-2xl gold font-bold mb-8">
                        Certifications
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">

                        <img
                            src="/cert1.png"
                            className="rounded-xl shadow-lg hover:scale-105 transition"
                        />

                        <img
                            src="/cert2.png"
                            className="rounded-xl shadow-lg hover:scale-105 transition"
                        />

                        <img
                            src="/cert3.png"
                            className="rounded-xl shadow-lg hover:scale-105 transition"
                        />

                    </div>
                </div>

            </section>
        </AnimatedSection>
    );
}