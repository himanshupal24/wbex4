"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do you build custom designs or use templates?",
        answer: "We never use pre-made templates. Every project starts with a blank canvas in Figma. We design unique interfaces tailored specifically to your brand identity and business goals, ensuring you stand out from competitors."
    },
    {
        question: "How long does a typical project take?",
        answer: "A standard corporate website typically takes 4-6 weeks from kick-off to launch. Complex E-Commerce stores or custom web applications can take 8-12 weeks depending on key feature requirements."
    },
    {
        question: "How do you handle SEO?",
        answer: "SEO is baked into our code, not an afterthought. We use semantic HTML5, optimize Core Web Vitals, generate dynamic sitemaps, and ensure proper metadata structure. All our sites score 95+ on Google Lighthouse."
    },
    {
        question: "Do you provide hosting and maintenance?",
        answer: "Yes. We deploy primarily on Vercel's edge network for global speed. We offer ongoing maintenance packages that include security updates, content changes, and 24/7 monitoring."
    },
    {
        question: "What is your typical budget range?",
        answer: "Our engagements typically start at 5000 for smaller sites and range up to $50k+ for enterprise platforms. We provide transparent, fixed-price quotes after our initial discovery call."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-32 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Common Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === i ? <Minus className="text-violet-500" /> : <Plus className="text-gray-400" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
