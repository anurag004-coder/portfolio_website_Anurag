import { portfolioData } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">CASE STUDIES</div>
          <h2 className="section-title">Engineered Projects &amp; Measured Results</h2>
          <p className="section-subtitle">
            Detailed breakdowns of end-to-end systems: the problem, architectural methodology, measured benchmarks, and production deployments.
          </p>
        </div>

        <div className="case-studies-list">
          {projects.map((project, index) => (
            <article key={project.id} className="case-study-card" id={project.id}>
              {/* Header: Project Index, Category, Verified Badge */}
              <div className="case-study-header">
                <div className="case-study-meta">
                  <span className="case-study-index">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="case-study-category">{project.category}</span>
                </div>

                <div className="case-study-badge">
                  <CheckCircle2 size={13} className="badge-check-icon" aria-hidden="true" />
                  <span>{project.verifiedStatus}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="case-study-title">{project.title}</h3>

              {/* Grid: Problem & Approach */}
              <div className="case-study-body-grid">
                <div className="body-section problem-section">
                  <h4 className="section-mini-heading">The Problem</h4>
                  <p className="problem-text">{project.problem}</p>
                </div>

                <div className="body-section approach-section">
                  <h4 className="section-mini-heading">Engineering Approach</h4>
                  <p className="approach-text">{project.approach}</p>
                </div>
              </div>

              {/* Architecture Implementation Details */}
              <div className="architecture-box">
                <h4 className="section-mini-heading">Architecture Highlights</h4>
                <ul className="arch-details-list">
                  {project.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="arch-detail-item">
                      <span className="arch-bullet" aria-hidden="true">
                        ›
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantitative Metrics Grid */}
              <div className="metrics-grid">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="metric-box">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-desc">{metric.description}</div>
                  </div>
                ))}
              </div>

              {/* Footer: Tech Stack and Links */}
              <div className="case-study-footer">
                <div className="tech-pills">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="case-study-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      title={`Launch live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    title={`View GitHub source for ${project.title}`}
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
