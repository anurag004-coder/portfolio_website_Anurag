"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-brand" aria-label="Anurag Ashu - Home">
            {portfolioData.personal.name}
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href="/resume.pdf"
              download="Anurag_Ashu_Resume.pdf"
              className="btn btn-secondary btn-sm"
              title="Download Resume PDF"
            >
              <FileText size={14} aria-hidden="true" />
              <span>Resume (PDF)</span>
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              title="GitHub Profile"
              aria-label="GitHub Profile"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <LinkedinIcon size={17} />
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Anurag_Ashu_Resume.pdf"
            className="btn btn-vermilion"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText size={15} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </>
  );
}
