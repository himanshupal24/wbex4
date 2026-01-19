"use client";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ThreeServicesObject from "@/components/ThreeServicesObject";

// ... existing imports

export default function ServicesPage() {
    return (
        <div className="pt-32 min-h-screen bg-black overflow-hidden relative">
            <ThreeServicesObject />

            <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Services</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    We engineer digital infrastructure that scales with your business. From high-speed marketing sites to complex enterprise platforms, we deliver security, performance, and reliability.
                </p>
            </div>

            <ServicesSection />

            {/* Process Section */}
            <section className="py-24 bg-white/5 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-16 text-center">How We Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We analyze your business goals and audience." },
                            { step: "02", title: "Strategy", desc: "Planning the architecture and user experience." },
                            { step: "03", title: "Development", desc: "Coding with the latest standards." },
                            { step: "04", title: "Launch", desc: "Deployment, testing, and handover." }
                        ].map((s) => (
                            <div key={s.step} className="p-6 rounded-2xl bg-black border border-white/10">
                                <div className="text-sm font-bold text-violet-500 mb-4">STEP {s.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-gray-400 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Unsure what you need?</h2>
                <Link href="/contact" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium text-lg">
                    Schedule a Free Consultation <ArrowRight size={20} />
                </Link>
            </section>
        </div>
    );
}
