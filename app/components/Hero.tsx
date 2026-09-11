"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute dynamic scale and parallax values on scroll
  const bgScale = 1 + Math.min(scrollY * 0.00035, 0.25);
  const bgTranslateY = scrollY * 0.15;
  const bgOpacity = Math.max(0.35, 1 - scrollY * 0.0008);

  return (
    <section id="home" className="hero-section">
      {/* Scroll-scaling cinematic background layer */}
      <div
        className="hero-bg-layer"
        style={{
          transform: `scale(${bgScale}) translateY(${bgTranslateY}px)`,
          opacity: bgOpacity
        }}
      />

      {/* Cinematic dark vignettes and subtle top beam */}
      <div className="hero-overlay-dark" />
      <div className="hero-overlay-gradient" />
      <div className="hero-overlay-radial" />
      <div className="hero-light-beam" />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-content">
          {/* Status badge with pulsing dot */}
          <div className="status-pill">
            <span className="pulse-dot" />
            <span>{personal.status}</span>
          </div>

          {/* Name Row with User's Photo next to the Name */}
          <div className="hero-name-row">
            <div className="hero-avatar-frame" title={`${personal.name} • AI/ML & Agentic Systems Developer`}>
              <Image
                src="/profile.jpg"
                alt={personal.name}
                width={92}
                height={92}
                priority
                className="hero-avatar-img"
              />
              <span className="hero-avatar-status" title="Active & Available" />
            </div>

            <h1 className="hero-title" style={{ margin: 0 }}>
              Hi, I&apos;m {personal.shortName}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle">
            <span>{personal.subtitle}</span>
          </div>

          {/* Short Description */}
          <p className="hero-description">
            Specializing in Agentic AI architectures, autonomous multi-agent reasoning, fine-tuning
            Transformer neural networks, and developing high-performance intelligent software with uncompromising
            architectural precision.
          </p>

          {/* CTAs with Reveal Hover Effects */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={17} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Subtle Stats Row */}
          <div className="hero-stats">
            {personal.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
