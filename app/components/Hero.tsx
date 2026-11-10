import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import { FileText, ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          {/* Left Column */}
          <div className="hero-text-col">
            <h1 className="hero-title">{personal.name}</h1>
            <p className="hero-degree">{personal.degree}</p>

            <p className="hero-bio">{personal.bio}</p>

            {/* Proof Line & Specific Availability */}
            <div className="hero-meta-panel">
              <div className="meta-row">
                <span className="meta-bullet" aria-hidden="true">•</span>
                <span className="meta-bold">{personal.proofLine}</span>
              </div>
              <div className="meta-row">
                <span className="meta-bullet" aria-hidden="true">•</span>
                <span className="meta-sub">{personal.availability}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-vermilion">
                <span>View Projects</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>

              <a
                href="/resume.pdf"
                download="Anurag_Ashu_Resume.pdf"
                className="btn btn-secondary"
                title="Download Resume PDF"
              >
                <FileText size={15} aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={15} aria-hidden="true" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Photo Only (No repeated captions) */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-frame">
              <Image
                src="/profile.jpg"
                alt="Portrait of Anurag Ashu"
                width={250}
                height={250}
                priority
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
