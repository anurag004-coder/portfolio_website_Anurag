import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education, internships, certifications } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">BACKGROUND</div>
          <h2 className="section-title">Education &amp; Experience</h2>
          <p className="section-subtitle">
            Academic degree, verified machine learning internships, and industry certifications.
          </p>
        </div>

        <div className="edu-grid">
          {/* Left Column: Academic & Internships */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Academic Card */}
            <div className="academic-panel">
              <h3 className="sub-panel-title">Degree</h3>
              <div>
                <div className="item-role">{education.degree}</div>
                <div className="item-company">{education.university} • {education.location}</div>
                <div className="item-meta">Graduation: {education.graduation}  |  CGPA: {education.cgpa}</div>
                <div style={{ marginTop: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Relevant Coursework
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {education.coursework.map((course) => (
                      <span key={course} className="skill-item-tag" style={{ fontSize: "0.8rem" }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Internships Card */}
            <div className="experience-panel">
              <h3 className="sub-panel-title">Internships</h3>
              {internships.map((intern) => (
                <div key={intern.company} className="timeline-item">
                  <div className="item-role">{intern.role}</div>
                  <div className="item-company">{intern.company}</div>
                  <div className="item-meta">{intern.period}  |  {intern.location}</div>
                  <ul className="item-bullets">
                    {intern.bullets.map((b, idx) => (
                      <li key={idx} className="item-bullet">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="academic-panel">
            <h3 className="sub-panel-title">Verified Certifications</h3>
            <div className="cert-list">
              {certifications.map((cert) => (
                <div key={cert.title} className="cert-row">
                  <div className="cert-name">{cert.title}</div>
                  <div className="cert-meta">
                    {cert.issuer} • {cert.date}
                    {cert.credentialId && <span> • ID: {cert.credentialId}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
