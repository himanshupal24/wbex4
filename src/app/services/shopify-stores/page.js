"use client";
import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, CreditCard, BarChart } from "lucide-react";
import Link from "next/link";

export default function ShopifyPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">
                        E-Commerce <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Accelerated.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We build high-converting Shopify stores that combine beautiful design with data-driven optimization.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12 mb-24">
                    {[
                        { val: "$50M+", label: "Client Revenue Generated" },
                        { val: "2.5s", label: "Avg Load Time" },
                        { val: "15%", label: "Avg Conv. Rate Increase" },
                        { val: "50+", label: "Stores Launched" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.val}</div>
                            <div className="text-xs uppercase tracking-widest text-emerald-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">More than just a store.</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Most agencies just install a theme. We architect a sales machine. From custom checkout flows to automated email marketing integration, every pixel is designed to sell.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Custom Liquid Development", icon: ShoppingBag },
                                { title: "Conversion Rate Optimization", icon: TrendingUp },
                                { title: "Payment Gateway Setup", icon: CreditCard },
                            ].map((f, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-emerald-900/30 text-emerald-400">
                                        <f.icon size={20} />
                                    </div>
                                    <span className="text-white font-medium text-lg">{f.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="aspect-square bg-gradient-to-br from-emerald-900/20 to-black rounded-3xl border border-emerald-500/20 flex items-center justify-center p-12">
                        <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm p-6 relative overflow-hidden">
                            {/* Mock UI */}
                            <div className="w-1/2 h-8 bg-white/10 rounded mb-4" />
                            <div className="w-full h-32 bg-white/5 rounded mb-4" />
                            <div className="flex gap-4">
                                <div className="w-1/2 h-40 bg-white/5 rounded" />
                                <div className="w-1/2 h-40 bg-white/5 rounded" />
                            </div>
                            {/* Mock Button */}
                            <div className="absolute bottom-6 right-6 px-6 py-2 bg-emerald-500 rounded-lg text-black font-bold text-sm shadow-lg shadow-emerald-500/20">
                                Add to Cart
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/contact">
                        <button className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-emerald-50 transition-colors">
                            Build Your Store
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
