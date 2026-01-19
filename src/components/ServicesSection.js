"use client";
import React from "react";
import { Globe, ShoppingCart, Code, Layers } from "lucide-react";

const services = [
    {
        title: "Website Development",
        description: "Lightning fast, SEO-optimized websites built with Next.js and Tailwind.",
        icon: Globe,
        color: "from-blue-500 to-cyan-500",
        href: "/services/web-development",
        shape: "box",
        hex: "#06b6d4"
    },
    {
        title: "Shopify Stores",
        description: "High-converting e-commerce experiences that drive sales globally.",
        icon: ShoppingCart,
        color: "from-green-400 to-emerald-600",
        href: "/services/shopify-stores",
        shape: "sphere",
        hex: "#10b981"
    },
    {
        title: "Custom Web Apps",
        description: "Scalable SaaS platforms and internal tools with complex logic.",
        icon: Code,
        color: "from-violet-500 to-purple-600",
        href: "/services/custom-web-apps",
        shape: "octahedron",
        hex: "#8b5cf6"
    },
    {
        title: "WordPress Dev",
        description: "Premium WordPress solutions with custom themes and headless setups.",
        icon: Layers,
        color: "from-orange-400 to-red-500",
        href: "/services/wordpress-development",
        shape: "torus",
        hex: "#f97316"
    },
];

import Link from "next/link";
import ThreeCardIcon from "./ThreeCardIcon";

export default function ServicesSection() {
    return (
        <section className="py-32 relative bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        Our Expertise.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        We don't just build websites. We engineer digital assets that generate revenue.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <Link key={i} href={s.href} className="flex">
                            <div className="group w-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <ThreeCardIcon type={s.shape} color={s.hex} />

                                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                                    <s.icon className="text-white w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
