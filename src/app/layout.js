import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Webx4 | Future-Ready Web Development Agency",
  description: "We build high-performance, world-class websites that scale globally. Expert Next.js, 3D Design, and AI solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased selection:bg-violet-500/30 selection:text-violet-200">
        <Navbar />
        <main className="min-h-screen flex flex-col pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
