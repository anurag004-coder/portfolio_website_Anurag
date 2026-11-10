import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = "https://portfolio-website-anurag.vercel.app";
const siteTitle = "Anurag Ashu | AI & ML Engineer — Portfolio & Case Studies";
const siteDescription =
  "Case studies in spatial computer vision (YOLOv11x, ByteTrack), grounded RAG study assistants, and fine-tuned Transformer NLP models by Anurag Ashu, final-year B.Tech in AI & ML.";
const ogImageUrl = `${siteUrl}/og-image-v1.png`;

export const viewport: Viewport = {
  themeColor: "#0B0F17",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Anurag Ashu"
  },
  description: siteDescription,
  applicationName: "Anurag Ashu Portfolio",
  authors: [{ name: "Anurag Ashu", url: "https://github.com/anurag004-coder" }],
  generator: "Next.js",
  keywords: [
    "Anurag Ashu",
    "AI & ML Engineer",
    "Computer Vision",
    "YOLOv11",
    "ByteTrack",
    "Grounded RAG",
    "StudyMind",
    "Transformers Fine-Tuning",
    "DistilBERT",
    "DistilRoBERTa",
    "Machine Learning Portfolio",
    "B.Tech AI ML",
    "FastAPI",
    "PyTorch",
    "Streamlit"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Anurag Ashu Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Anurag Ashu - AI & ML Engineer Portfolio & Case Studies",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/profile.jpg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anurag Ashu",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "AI & ML Engineer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Undergraduate Engineering Institution"
    },
    sameAs: [
      "https://github.com/anurag004-coder",
      "https://www.linkedin.com/in/anurag-ashu-834837263",
      "https://huggingface.co/Anurag4848"
    ],
    knowsAbout: [
      "Computer Vision",
      "Object Tracking",
      "Retrieval-Augmented Generation",
      "Transformer Fine-Tuning",
      "PyTorch",
      "Deep Learning",
      "Machine Learning"
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
