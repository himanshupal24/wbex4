import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                        webx4
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Building the digital future with next-generation web technologies.
                    </p>
                    <div className="text-sm text-gray-500 space-y-1">
                        {/* <p>hello@webx4.com</p> */}
                        {/* <p>+1 (555) 012-3456</p> */}
                        <p>Faridabad, Haryana, India</p>
                    </div>
                    <div className="flex gap-4">
                        {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links sections */}
                {[
                    { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
                    { title: "Services", links: ["Web Development", "Shopify", "Custom Apps", "SEO"] },
                    { title: "Legal", links: ["Privacy", "Terms", "Security"] }
                ].map((col) => (
                    <div key={col.title}>
                        <h4 className="font-semibold text-white mb-6">{col.title}</h4>
                        <ul className="space-y-3">
                            {col.links.map(l => (
                                <li key={l}>
                                    <Link href="#" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} Webx4 Agency. All rights reserved.
            </div>
        </footer>
    );
}
