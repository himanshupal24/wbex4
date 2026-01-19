"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap, Search, Smartphone } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Custom Next.js Development",
        desc: "We build tailored digital infrastructure, not generic templates. Enterprise-grade React applications designed for scale.",
        icon: Code2,
    },
    {
        title: "Core Web Vitals Optimization",
        desc: "Guaranteed 95+ PageSpeed scores. We optimize LCP, FID, and CLS to ensure you never lose a customer to loading screens.",
        icon: Zap,
    },
    {
        title: "Technical SEO Architecture",
        desc: "Semantic HTML5, dynamic sitemaps, and automated schema markup built-in from day one to dominate search rankings.",
        icon: Search,
    },
    {
        title: "Mobile-First Conversion Design",
        desc: "Responsive UIs that don't just 'fit' mobile screens but are engineered to convert mobile traffic into revenue.",
        icon: Smartphone,
    },
];

export default function WebDevPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20">

            {/* Hero */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                        Websites that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Drive Revenue.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Stop settling for slow WordPress themes. We build high-performance custom websites that rank higher on Google and convert 3x more traffic.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact">
                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:-translate-y-1">
                                Get a Technical Proposal
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Grid */}
            <section className="bg-white/5 border-y border-white/10 py-24 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((f, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="space-y-4"
                            >
                                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400">
                                    <f.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{f.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee (Static representation) */}
            <section className="py-24 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-16">Powered by the Modern Stack</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {["Next.js", "React", "Tailwind", "Vercel", "Framer Motion", "TypeScript"].map(tech => (
                        <span key={tech} className="text-2xl font-bold text-white">{tech}</span>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-4xl mx-auto px-6 text-center mt-20">
                <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade?</h2>
                    <p className="text-gray-400 mb-8">Stop losing customers to slow load times and bad design.</p>
                    <Link href="/contact">
                        <button className="w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors">
                            Get a Free Audit
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
