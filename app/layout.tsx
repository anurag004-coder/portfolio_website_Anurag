import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anurag Ashu | BTech CSE • AI/ML & Agentic Systems Developer",
  description:
    "Portfolio of Anurag Ashu — BTech CSE developer specializing in Agentic AI architectures, autonomous LLM systems, Transformer fine-tuning, and high-performance intelligent software.",
  keywords: [
    "Anurag Ashu",
    "Agentic AI",
    "Autonomous LLMs",
    "AI/ML Developer",
    "LangGraph",
    "Machine Learning Engineer",
    "BTech CSE Portfolio",
    "Hugging Face",
    "PyTorch",
    "Transformers",
    "Streamlit",
    "Financial Sentiment Analyzer",
    "Deep Learning"
  ],
  authors: [{ name: "Anurag Ashu", url: "https://github.com/anurag004-coder" }],
  openGraph: {
    title: "Anurag Ashu | BTech CSE • AI/ML & Agentic Systems Developer",
    description:
      "Explore Agentic AI systems, fine-tuned NLP transformers, and real-time machine learning dashboards engineered by Anurag Ashu.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
