import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import { ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const { flagshipProjects, compactProjects, moreProjects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">PROJECTS</div>
          <h2 className="section-title">Case Studies &amp; Implementations</h2>
          <p className="section-subtitle">
            Measured machine learning systems, computer vision tracking, and grounded RAG pipelines with verified code and live deployments.
          </p>
        </div>

        {/* 3 Flagship Projects (Expanded) */}
        <div className="flagship-list">
          {flagshipProjects.map((project, idx) => (
            <article key={project.id} className="flagship-case-study" id={project.id}>
              <div className="case-study-top">
                <span className="case-category">{project.category}</span>
                <span className="case-num">0{idx + 1}</span>
              </div>

              <h3 className="case-title">{project.title}</h3>

              <div className="case-body-grid">
                <div>
                  <h4 className="body-heading">Problem</h4>
                  <p className="body-paragraph">{project.problem}</p>
                </div>
                <div>
                  <h4 className="body-heading">Approach</h4>
                  <p className="body-paragraph">{project.approach}</p>
                </div>
              </div>

              {/* Screenshots and Architecture Diagrams */}
              {project.imageSrc && (
                <div className="case-media-box">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    width={800}
                    height={400}
                    className="case-image"
                  />
                  {project.imageAlt && <div className="case-caption">{project.imageAlt}</div>}
                </div>
              )}

              {project.diagramSrc && (
                <div className="case-media-box">
                  <Image
                    src={project.diagramSrc}
                    alt={project.diagramAlt || `${project.title} architecture`}
                    width={880}
                    height={200}
                    className="case-image"
                  />
                  {project.diagramAlt && <div className="case-caption">{project.diagramAlt}</div>}
                </div>
              )}

              {/* Real Measured Result Tile */}
              <div className="measured-result-box">
                <div className="result-header">
                  <span className="result-val">{project.measuredResult.value}</span>
                  <span className="result-lbl">— {project.measuredResult.label}</span>
                </div>
                <div className="result-method">{project.measuredResult.method}</div>
              </div>

              {/* Design Notes */}
              <div className="design-notes">
                <strong>Design notes:</strong> {project.designNotes}
              </div>

              {/* Footer: Tech Stack & Plain Links */}
              <div className="case-footer">
                <div className="case-stack">
                  {project.stack.map((t) => (
                    <span key={t} className="stack-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="case-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-vermilion btn-sm"
                    >
                      <span>Live demo</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Code size={14} aria-hidden="true" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Compact Projects (Other Shipped Systems) */}
        <div style={{ marginTop: "3.5rem" }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Other Shipped Projects
          </h3>
          <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Domain-specific sequence models and batch NLP interfaces deployed to the cloud.
          </p>

          <div className="compact-projects-list">
            {compactProjects.map((project) => (
              <div key={project.id} className="compact-card" id={project.id}>
                <div className="compact-header">
                  <h4 className="compact-title">{project.title}</h4>
                  <span className="compact-category">{project.category}</span>
                </div>

                <div className="case-body-grid" style={{ marginBottom: "1rem" }}>
                  <div>
                    <h5 className="body-heading">Problem</h5>
                    <p className="body-paragraph" style={{ fontSize: "0.88rem" }}>{project.problem}</p>
                  </div>
                  <div>
                    <h5 className="body-heading">Approach</h5>
                    <p className="body-paragraph" style={{ fontSize: "0.88rem" }}>{project.approach}</p>
                  </div>
                </div>

                {project.imageSrc && (
                  <div className="case-media-box" style={{ maxWidth: "600px", marginBottom: "1rem" }}>
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt || project.title}
                      width={600}
                      height={320}
                      className="case-image"
                    />
                  </div>
                )}

                {/* Real Measured Result Tile */}
                <div className="measured-result-box" style={{ marginBottom: "1rem" }}>
                  <div className="result-header">
                    <span className="result-val">{project.measuredResult.value}</span>
                    <span className="result-lbl">— {project.measuredResult.label}</span>
                  </div>
                  <div className="result-method">{project.measuredResult.method}</div>
                </div>

                <div className="design-notes" style={{ marginBottom: "1rem" }}>
                  <strong>Design notes:</strong> {project.designNotes}
                </div>

                <div className="case-footer">
                  <div className="case-stack">
                    {project.stack.map((t) => (
                      <span key={t} className="stack-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="case-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-vermilion btn-sm"
                      >
                        <span>Live demo</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Code size={14} aria-hidden="true" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact "More Projects" Row (Calorie Regressor) */}
        <div style={{ marginTop: "3.5rem" }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.4rem" }}>
            More Projects
          </h3>

          <div className="compact-projects-list" style={{ marginTop: "1rem" }}>
            {moreProjects.map((project) => (
              <div key={project.id} className="compact-card" id={project.id}>
                <div className="compact-header">
                  <h4 className="compact-title">{project.title}</h4>
                  <span className="compact-category">{project.category}</span>
                </div>

                <div className="case-body-grid" style={{ marginBottom: "1rem" }}>
                  <div>
                    <h5 className="body-heading">Problem</h5>
                    <p className="body-paragraph" style={{ fontSize: "0.88rem" }}>{project.problem}</p>
                  </div>
                  <div>
                    <h5 className="body-heading">Approach</h5>
                    <p className="body-paragraph" style={{ fontSize: "0.88rem" }}>{project.approach}</p>
                  </div>
                </div>

                {/* Real Measured Result Tile */}
                <div className="measured-result-box" style={{ marginBottom: "1rem" }}>
                  <div className="result-header">
                    <span className="result-val">{project.measuredResult.value}</span>
                    <span className="result-lbl">— {project.measuredResult.label}</span>
                  </div>
                  <div className="result-method">{project.measuredResult.method}</div>
                </div>

                <div className="design-notes" style={{ marginBottom: "1rem" }}>
                  <strong>Design notes:</strong> {project.designNotes}
                </div>

                <div className="case-footer">
                  <div className="case-stack">
                    {project.stack.map((t) => (
                      <span key={t} className="stack-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="case-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Code size={14} aria-hidden="true" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
