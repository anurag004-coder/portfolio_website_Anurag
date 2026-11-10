import { portfolioData } from "../data/portfolioData";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">ACADEMIC BACKGROUND</div>
          <h2 className="section-title">Education &amp; Core Foundations</h2>
          <p className="section-subtitle">
            Undergraduate engineering curriculum rooted in computer science theory, algorithms, and applied machine learning.
          </p>
        </div>

        <div className="education-cards">
          {education.map((item) => (
            <div key={item.degree} className="education-card">
              <div className="edu-header">
                <div className="edu-title-group">
                  <div className="edu-icon-wrap" aria-hidden="true">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <div className="edu-institution">
                      {item.institution} • {item.location}
                    </div>
                  </div>
                </div>

                <div className="edu-period">{item.period}</div>
              </div>

              <p className="edu-focus">{item.focus}</p>

              <div className="edu-coursework-block">
                <div className="coursework-label">
                  <BookOpen size={14} aria-hidden="true" />
                  <span>Key Technical Coursework</span>
                </div>
                <div className="coursework-pills">
                  {item.coursework.map((course) => (
                    <span key={course} className="coursework-pill">
                      {course}
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

