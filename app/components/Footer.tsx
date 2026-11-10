import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personal, education } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <div className="footer-name">{personal.name}</div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
            {education.degree} · {education.university} ({education.graduation})
          </div>
        </div>

        <div className="footer-links">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title="GitHub Profile"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title="LinkedIn Profile"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>

          <a href="#home" className="footer-link" title="Back to top">
            <span>Back to top</span>
            <ArrowUp size={13} style={{ display: "inline", marginLeft: "4px" }} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
