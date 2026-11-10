import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Bio & Core Positioning */}
          <div className="hero-text-col">
            <div className="hero-meta-badge">
              <span className="badge-tag">ENGINEERING PORTFOLIO</span>
              <span className="badge-sep">•</span>
              <span>{personal.role}</span>
            </div>

            <h1 className="hero-title">{personal.name}</h1>

            <p className="hero-headline">{personal.headline}</p>

            <p className="hero-description">{personal.summary}</p>

            {/* Quick Technical Focus Pills */}
            <div className="hero-specs-row">
              <div className="spec-item">
                <span className="spec-label">Core Focus</span>
                <span className="spec-val">Spatial CV &amp; RAG Agents</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Primary Stack</span>
                <span className="spec-val">Python • PyTorch • YOLOv11</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Deployment</span>
                <span className="spec-val">Vercel • Streamlit • Docker</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Case Studies</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={16} aria-hidden="true" />
                <span>Contact Anurag</span>
              </a>

              <div className="hero-social-links">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Photo & Profile Card */}
          <div className="hero-photo-col">
            <div className="hero-card-frame">
              <div className="photo-wrapper">
                <Image
                  src="/profile.jpg"
                  alt="Anurag Ashu"
                  width={240}
                  height={240}
                  priority
                  className="hero-photo"
                />
              </div>

              <div className="hero-card-caption">
                <div className="caption-name">{personal.name}</div>
                <div className="caption-sub">B.Tech in Artificial Intelligence &amp; Machine Learning</div>
                <div className="caption-loc">India • Open to Engineering &amp; ML Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
