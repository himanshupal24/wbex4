"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Websites", "Web Apps", "E-Commerce"];

const projects = [
    {
        id: 1,
        title: "Nexus Finance",
        category: "Web Apps",
        desc: "Crypto dashboard processing $2M+ daily volume with sub-millisecond latency.",
        gradient: "from-blue-900 to-slate-900",
        tech: ["Next.js", "D3.js", "WebSockets"],
        size: "large" // spans 2 cols
    },
    {
        id: 2,
        title: "Lumina Fashion",
        category: "E-Commerce",
        desc: "Headless storefront that increased conversion rates by 140% post-launch.",
        gradient: "from-purple-900 via-fuchsia-900 to-black",
        tech: ["Shopify Hydrogen", "React", "Sanity CMS"],
        size: "small"
    },
    {
        id: 3,
        title: "Orbit AI",
        category: "Websites",
        desc: "Interactive 3D experience that secured $5M in Series A funding.",
        gradient: "from-emerald-900 to-black",
        tech: ["Three.js", "R3F", "Tailwind"],
        size: "small"
    },
    {
        id: 4,
        title: "Vantage Realty",
        category: "Web Apps",
        desc: "Real estate platform handling 50k+ daily active users with zero downtime.",
        gradient: "from-orange-900 to-amber-900",
        tech: ["Mapbox", "Supabase", "React Query"],
        size: "large"
    },
    {
        id: 5,
        title: "Echo Audio",
        category: "E-Commerce",
        desc: "Minimalist audio brand site that improved session duration by 3x.",
        gradient: "from-zinc-800 to-black",
        tech: ["Next.js", "Stripe", "Framer Motion"],
        size: "small"
    },
    {
        id: 6,
        title: "Zenith Health",
        category: "Websites",
        desc: "B2B patient portal reducing administrative overhead by 40%.",
        gradient: "from-teal-900 to-cyan-900",
        tech: ["Postgres", "tRPC", "TypeScript"],
        size: "small"
    }
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-bold text-white mb-6"
                        >
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                                Work.
                            </span>
                        </motion.h1>
                        <p className="text-gray-400 max-w-xl text-lg">
                            A collection of projects that push the boundaries of design and technology.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry-ish Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 ${project.size === 'large' ? 'md:col-span-2' : ''}`}
                        >
                            {/* Background Gradient / Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors p-8 flex flex-col justify-between">

                                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="flex gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-bold px-2 py-1 bg-white/20 text-white rounded backdrop-blur-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform cursor-pointer">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div>
                                    <span className="text-violet-300 font-medium text-sm mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-md delay-100">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 mb-6">Want to see more?</p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        <Github size={20} />
                        View Github Profile
                    </a>
                </div>

            </div>
        </div>
    );
}
