"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Database, LayoutTemplate } from "lucide-react";
import Link from "next/link";

export default function WordpressDevPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Headless <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">WordPress.</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Combine the ease of WordPress content management with the blazing speed of Next.js.
                    </p>
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
                        <h3 className="text-2xl font-bold text-gray-400 mb-6">Traditional WordPress</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li className="flex gap-3"><span className="text-red-500">✕</span> Slow PHP page loads</li>
                            <li className="flex gap-3"><span className="text-red-500">✕</span> Vulnerable to plugin hacks</li>
                            <li className="flex gap-3"><span className="text-red-500">✕</span> Bloated themes</li>
                            <li className="flex gap-3"><span className="text-red-500">✕</span> Poor Core Web Vitals</li>
                        </ul>
                    </div>

                    <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Database size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Headless Architecture</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3"><Check className="text-orange-500" /> Instant static page loads</li>
                            <li className="flex gap-3"><Check className="text-orange-500" /> Bank-grade security</li>
                            <li className="flex gap-3"><Check className="text-orange-500" /> Custom React frontend</li>
                            <li className="flex gap-3"><Check className="text-orange-500" /> Perfect 100/100 SEO</li>
                        </ul>
                    </div>
                </div>

                {/* Services Grid */}
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Our WordPress Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {[
                        { title: "Custom Themes", desc: "Pixel-perfect implementation of your Figma designs.", icon: LayoutTemplate },
                        { title: "API Integration", desc: "Connect your WordPress data to any third-party service.", icon: Database },
                        { title: "Security Hardening", desc: "Advanced firewalls and removal of vulnerabilities.", icon: ShieldCheck }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                            <item.icon className="text-orange-400 mb-6 w-10 h-10" />
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/contact">
                        <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
                            Discuss Your Project
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
