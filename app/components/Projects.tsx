"use client";

import { portfolioData } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { ExternalLink, Sparkles, Cpu } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">03 // Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Engineered machine learning systems, fine-tuned NLP transformers, and full-stack AI applications with live deployments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <div className="project-card-header">
                  <span className="project-badge">
                    <Sparkles size={12} style={{ display: "inline", marginRight: "4px" }} />
                    {project.badge}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                {/* Hover Reveal Architecture Specification Pill */}
                {project.architectureNote && (
                  <div className="project-arch-reveal">
                    <Cpu size={14} color="#e2e8f0" />
                    <span>{project.architectureNote}</span>
                  </div>
                )}

                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="project-highlight-item">
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      title="Launch Live Web App"
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#050507",
                          display: "inline-block"
                        }}
                      />
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={14} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
