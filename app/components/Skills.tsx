import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">TOOLING</div>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Languages, machine learning libraries, databases, and deployment platforms used across shipped projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-category-card">
              <h3 className="skill-category-name">{group.category}</h3>
              <div className="skill-items-list">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-item-tag">
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
