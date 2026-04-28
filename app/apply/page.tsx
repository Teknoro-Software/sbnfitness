/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ApplyPage() {
    const [form, setForm] = useState<any>({
        name: "",
        age: "",
        country: "",
        city: "",
        gender: "",
        weight: "",
        height: "",
        food: "",
        instagram: "",
        whatsapp: "",
        calling: "",
        goal: "",
        reason: "",
    });

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (key: string, value: string) => {
        setForm({ ...form, [key]: value });
    };

    const handleImage = (file: File) => {
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const submit = () => {
        const msg = `
Name: ${form.name}
Age: ${form.age}
Country: ${form.country}
City: ${form.city}
Gender: ${form.gender}

Weight: ${form.weight}
Height: ${form.height}
Favorite Food: ${form.food}

Instagram: ${form.instagram}
WhatsApp: ${form.whatsapp}
Calling: ${form.calling}

Goal: ${form.goal}

Reason:
${form.reason}
`;

        window.open(
            `https://wa.me/919846622567?text=${encodeURIComponent(msg)}`
        );
    };

    const inputStyle =
        "w-full p-4 bg-[#111] rounded-xl focus:outline-none";

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-20">

            {/* TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl text-center gold font-bold mb-10"
            >
                Start Your Transformation
            </motion.h1>

            <div className="max-w-3xl mx-auto space-y-6">

                {/* BASIC INFO */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid md:grid-cols-2 gap-4"
                >
                    <input className={inputStyle} placeholder="Name"
                        onChange={(e) => handleChange("name", e.target.value)} />

                    <input className={inputStyle} placeholder="Age"
                        onChange={(e) => handleChange("age", e.target.value)} />

                    <input className={inputStyle} placeholder="Country"
                        onChange={(e) => handleChange("country", e.target.value)} />

                    <input className={inputStyle} placeholder="City"
                        onChange={(e) => handleChange("city", e.target.value)} />

                    <input className={inputStyle} placeholder="Gender"
                        onChange={(e) => handleChange("gender", e.target.value)} />

                    <input className={inputStyle} placeholder="Weight"
                        onChange={(e) => handleChange("weight", e.target.value)} />

                    <input className={inputStyle} placeholder="Height"
                        onChange={(e) => handleChange("height", e.target.value)} />

                    <input className={inputStyle} placeholder="Favorite Food"
                        onChange={(e) => handleChange("food", e.target.value)} />
                </motion.div>

                {/* CONTACT */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid md:grid-cols-2 gap-4"
                >
                    <input className={inputStyle} placeholder="Instagram ID"
                        onChange={(e) => handleChange("instagram", e.target.value)} />

                    <input className={inputStyle} placeholder="WhatsApp Number"
                        onChange={(e) => handleChange("whatsapp", e.target.value)} />

                    <input className={inputStyle} placeholder="Calling Number"
                        onChange={(e) => handleChange("calling", e.target.value)} />
                </motion.div>

                {/* GOAL */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <h2 className="gold mb-6 font-semibold text-lg text-center">
                        Choose Your Goal
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">

                        {[
                            "Body Recomposition (6 Months)",
                            "PCOD / Thyroid Fat Loss",
                            "Weight Loss (4 Months)",
                            "Muscle Gain",
                        ].map((goal, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleChange("goal", goal)}
                                className={`
          cursor-pointer p-6 rounded-xl transition-all duration-300
          ${form.goal === goal
                                        ? "bg-yellow-500 text-black shadow-lg"
                                        : "bg-[#111] text-white hover:bg-[#1a1a1a]"
                                    }
        `}
                            >
                                <p className="font-medium text-center">
                                    {goal}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

                {/* REASON */}
                <textarea
                    className={`${inputStyle} h-32`}
                    placeholder="Why do you want to transform?"
                    onChange={(e) => handleChange("reason", e.target.value)}
                />

                {/* IMAGE UPLOAD */}
                <div className="border border-dashed border-gray-600 p-6 text-center rounded-xl">
{/* 
                    <input
                        type="file"
                        accept="image/*"
                        id="upload"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files?.[0]) {
                                handleImage(e.target.files[0]);
                            }
                        }}
                    />

                    <label htmlFor="upload" className="cursor-pointer">
                        Click to Upload Photo
                    </label>

                    {preview && (
                        <img
                            src={preview}
                            className="mt-4 w-40 mx-auto rounded-lg"
                        />
                    )} */}

                    <p className="text-gray-500 text-sm mt-3">
                        Send your photo on WhatsApp
                    </p>

                </div>

                {/* SUBMIT */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={submit}
                    className="w-full py-4 bg-green-500 text-white rounded-full font-bold text-lg"
                >
                    Submit on WhatsApp
                </motion.button>

            </div>
        </div>
    );
}