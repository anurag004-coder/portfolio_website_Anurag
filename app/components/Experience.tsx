"use client";

import { portfolioData } from "../data/portfolioData";
import { GraduationCap, Briefcase, Award, Bot } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Active Research":
        return <Bot size={16} />;
      case "Education":
        return <GraduationCap size={16} />;
      case "Experience":
        return <Briefcase size={16} />;
      default:
        return <Award size={16} />;
    }
  };

  return (
    <section id="experience" className="section" style={{ backgroundColor: "rgba(6, 6, 9, 0.55)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">04 // Journey</span>
          <h2 className="section-title">Experience &amp; Focus</h2>
          <p className="section-subtitle">
            Timeline of academic foundations, active Agentic AI research, and applied machine learning engineering.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-org">
                      {item.organization} • <span style={{ color: "var(--text-muted)" }}>{item.location}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-subtle)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px"
                    }}
                  >
                    {getTypeIcon(item.type)}
                    <span className="timeline-period">{item.period}</span>
                  </div>
                </div>

                <p className="timeline-summary">{item.summary}</p>

                <ul className="timeline-points">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="timeline-point">
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
