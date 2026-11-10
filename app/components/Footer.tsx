import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-name">{personal.name}</span>
            <span className="brand-role">AI &amp; ML Engineer</span>
          </div>
          <p className="footer-note">
            Final-Year B.Tech in Artificial Intelligence &amp; Machine Learning.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="GitHub Profile"
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
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="#home" className="footer-link back-to-top" title="Scroll back to top">
              <span>Back to Top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} {personal.name}. All technical specifications verified against repository source code.
          </div>
        </div>
      </div>
    </footer>
  );
}
