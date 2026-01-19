"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "CTO, FinNova",
        content: "Webx4 transformed our legacy infrastructure into a high-performance Next.js application. Our conversion rates doubled within 30 days of launch.",
        stars: 5,
    },
    {
        name: "Sarah Chen",
        role: "Founder, LuxeStreet",
        content: "The 3D product visualizations they built for our Shopify store are incredible. Customers spend 4x longer on the site now. Truly world-class work.",
        stars: 5,
    },
    {
        name: "Marcus Johnson",
        role: "VP Marketing, TechFlow",
        content: "We needed a website that looked 10 years ahead of the competition. Webx4 delivered exactly that. The animations are butter smooth on every device.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Clients Trust Us.</h2>
                    <p className="text-gray-400 text-lg">Don't just take our word for it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            key={i}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, s) => (
                                    <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-8 leading-relaxed">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{t.name}</div>
                                    <div className="text-gray-500 text-xs">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
