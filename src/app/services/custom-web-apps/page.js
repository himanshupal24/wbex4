"use client";
import { motion } from "framer-motion";
import { Server, Database, Lock, Globe } from "lucide-react";
import Link from "next/link";

export default function CustomAppsPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">
                        Limitless <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            Software.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        SaaS platforms, internal tools, and complex web applications built to scale.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">The Engineering Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Architect", desc: "Database schema & system design." },
                            { step: "02", title: "Develop", desc: "Clean, documented, test-driven code." },
                            { step: "03", title: "Deploy", desc: "CI/CD pipelines on edge networks." },
                            { step: "04", title: "Scale", desc: "Monitor & optimize for millions of users." },
                        ].map((s, i) => (
                            <div key={i} className="relative p-8 border-l border-white/10 hover:border-violet-500 transition-colors">
                                <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-4">{s.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{s.title}</h3>
                                <p className="text-gray-400 relative z-10">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="bg-white/5 p-8 rounded-2xl flex flex-col justify-between min-h-[300px] hover:bg-white/10 transition-colors group">
                        <Server className="w-12 h-12 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Backend & API</h3>
                            <p className="text-gray-400">Node.js, Python, or Go microservices communicating via GraphQL or REST. Built for high concurrency.</p>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl flex flex-col justify-between min-h-[300px] hover:bg-white/10 transition-colors group">
                        <Database className="w-12 h-12 text-fuchsia-500 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Data Architecture</h3>
                            <p className="text-gray-400">PostgreSQL, MongoDB, or Redis. We structure your data for integrity and speed.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 rounded-3xl p-12 text-center border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-6">Build your MVP in weeks, not months.</h2>
                    <Link href="/contact">
                        <button className="px-10 py-4 bg-white text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow">
                            Get Technical Consultation
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
