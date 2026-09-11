"use client";

import { portfolioData } from "../data/portfolioData";
import { Brain, Cpu, Database, Sparkles, Bot, Network, Layers } from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const features = [
    {
      icon: <Bot size={20} />,
      title: "Agentic AI & Multi-Agent Orchestration",
      desc: "Architecting autonomous agents with ReAct planning graphs, function calling, and dynamic tool execution."
    },
    {
      icon: <Brain size={20} />,
      title: "Deep Learning & Transformer Fine-Tuning",
      desc: "Specializing in sequence classification, tokenization, and custom model weights hosted on Hugging Face Hub."
    },
    {
      icon: <Database size={20} />,
      title: "Advanced RAG & Knowledge Retrieval",
      desc: "Engineering high-accuracy dense vector indexing, semantic search, and context compression for LLMs."
    },
    {
      icon: <Cpu size={20} />,
      title: "Applied Machine Learning & Vision",
      desc: "Training predictive regressors (XGBoost) and multi-layer CNNs for real-time computer vision detection."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">01 // Architecture</span>
          <h2 className="section-title">About &amp; Core Focus</h2>
          <p className="section-subtitle">
            Bridging core computer science foundations with frontier research in Agentic AI and Large Language Models.
          </p>
        </div>

        {/* Dedicated Agentic AI & LLMs Feature Banner */}
        <div className="agentic-banner">
          <div className="agentic-banner-header">
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#ffffff",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid var(--border-medium)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "4px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase"
                }}
              >
                CURRENT R&amp;D
              </span>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#ffffff", marginTop: "0.65rem" }}>
                {personal.currentFocus.title}
              </h3>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              [AUTONOMOUS_SYSTEMS // ACTIVE]
            </div>
          </div>

          <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", maxWidth: "800px" }}>
            {personal.currentFocus.summary}
          </p>

          <div className="agentic-pillars-grid">
            {personal.currentFocus.pillars.map((pillar) => (
              <div key={pillar.name} className="agentic-pillar-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <Network size={16} color="#ffffff" />
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#ffffff" }}>{pillar.name}</h4>
                </div>
                <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Grid Profile Narrative */}
        <div className="about-grid">
          <div className="about-narrative">
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "0.5rem" }}>
              <div
                style={{
                  position: "relative",
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  padding: "2.5px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.08))",
                  flexShrink: 0,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                }}
              >
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #040406",
                    display: "block"
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>
                  {personal.name}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                  {personal.subtitle}
                </div>
              </div>
            </div>

            {personal.bioLong.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  flex: "1 1 200px"
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem", fontFamily: "var(--font-mono)" }}>
                  ACADEMIC DEGREE
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff" }}>
                  B.Tech in CSE
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Computer Science &amp; Engineering
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  flex: "1 1 200px"
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem", fontFamily: "var(--font-mono)" }}>
                  SPECIALIZATION
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff" }}>
                  Agentic AI &amp; LLMs
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Transformers &amp; Multi-Agent Systems
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Box */}
          <div className="about-highlight-box">
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
              Architectural Pillars
            </h3>
            {features.map((feature) => (
              <div key={feature.title} className="about-feature">
                <div className="about-feature-icon">{feature.icon}</div>
                <div>
                  <h4 className="about-feature-title">{feature.title}</h4>
                  <p className="about-feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
