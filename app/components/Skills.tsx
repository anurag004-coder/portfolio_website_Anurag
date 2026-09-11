"use client";

import { portfolioData } from "../data/portfolioData";
import { Bot, Brain, Code2, Database } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Bot size={22} className="skill-category-icon" />;
      case 1:
        return <Brain size={22} className="skill-category-icon" />;
      case 2:
        return <Code2 size={22} className="skill-category-icon" />;
      default:
        return <Database size={22} className="skill-category-icon" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: "rgba(6, 6, 9, 0.55)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">02 // Stack</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Specialized competencies across Agentic AI architectures, Deep Learning models, and modern software engineering.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((cat, index) => (
            <div key={cat.category} className="skill-category-card">
              <span className="card-hud-code">{cat.code}</span>

              <div className="skill-category-header">
                {getCategoryIcon(index)}
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>
              <p className="skill-category-desc">{cat.description}</p>

              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
