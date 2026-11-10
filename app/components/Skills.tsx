import { portfolioData } from "../data/portfolioData";


export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">COMPETENCIES</div>
          <h2 className="section-title">Technical Stack &amp; Tooling</h2>
          <p className="section-subtitle">
            Languages, frameworks, vector databases, and machine learning libraries used across deployed systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, idx) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-card-top">
                <span className="skill-group-idx">
                  SYS.{(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>

              <div className="skill-tags-cloud">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
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
