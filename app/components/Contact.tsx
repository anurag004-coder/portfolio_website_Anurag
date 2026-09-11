"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail, Send, Copy, Check, MapPin, Loader2, AlertCircle, ExternalLink, Info } from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
    details?: string;
  }>({
    type: "",
    message: "",
    details: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent(
    formData.subject || "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    formData.message
      ? `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      : ""
  )}`;

  const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus({ type: "", message: "", details: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || (data.message && data.message.includes("submitted")))) {
        setStatus({
          type: "success",
          message: `Message transmitted to ${personal.email}!`,
          details:
            "If this is your first time receiving a website form message, Gmail often routes automated notifications to your Spam or Updates tab. Please check your Gmail Spam/Junk folder for 'FormSubmit' and click 'Report not spam' to ensure immediate delivery to your primary inbox."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (data.message && data.message.includes("Activation")) {
        setStatus({
          type: "success",
          message: "Form activation required by FormSubmit.",
          details:
            `FormSubmit has dispatched a one-time activation email to ${personal.email}. Please check your Gmail (including Spam/Updates) for the email titled 'Confirm your email to activate form submissions' and click 'Activate Form'. All future messages will then land in your inbox automatically.`
        });
      } else {
        throw new Error(data.message || "Failed to transmit message.");
      }
    } catch (err: any) {
      setStatus({
        type: "error",
        message: "Automated routing encountered an issue.",
        details:
          "You can send your message directly using your Gmail or desktop mail app below:"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">05 // Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open for AI/ML engineering roles, Agentic AI research, open-source collaborations, and tech opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct channels & Quick compose */}
          <div className="contact-info">
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                Let&apos;s build something intelligent.
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                Feel free to reach out directly via email, connect on LinkedIn, or inspect my open-source code repositories on GitHub.
              </p>

              <div className="contact-channels">
                <a
                  href={`mailto:${personal.email}`}
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>EMAIL</div>
                    <div style={{ color: "#ffffff", fontWeight: 500 }}>{personal.email}</div>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>LINKEDIN</div>
                    <div style={{ color: "#ffffff", fontWeight: 500 }}>anurag-ashu</div>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>GITHUB</div>
                    <div style={{ color: "#ffffff", fontWeight: 500 }}>@anurag004-coder</div>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>LOCATION</div>
                    <div style={{ color: "#ffffff", fontWeight: 500 }}>{personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div className="copy-email-box">
                <span className="copy-email-text">{personal.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "0.45rem 0.85rem" }}
                  title="Copy Email to Clipboard"
                >
                  {copied ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: "center" }}
              >
                <Mail size={14} />
                <span>Open in Gmail Compose</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Live Form with Dual Send Options */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              {status.type === "success" && (
                <div
                  style={{
                    background: "rgba(34, 197, 94, 0.12)",
                    border: "1px solid rgba(34, 197, 94, 0.35)",
                    color: "#4ade80",
                    padding: "1.1rem",
                    borderRadius: "12px",
                    fontSize: "0.92rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontWeight: 600 }}>
                    <Check size={18} style={{ flexShrink: 0 }} />
                    <span>{status.message}</span>
                  </div>
                  {status.details && (
                    <div style={{ fontSize: "0.85rem", color: "#bbf7d0", lineHeight: "1.6" }}>
                      {status.details}
                    </div>
                  )}
                </div>
              )}

              {status.type === "error" && (
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#f87171",
                    padding: "1rem",
                    borderRadius: "12px",
                    fontSize: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                    <AlertCircle size={17} style={{ flexShrink: 0 }} />
                    <span>{status.message}</span>
                  </div>
                  {status.details && (
                    <div style={{ fontSize: "0.85rem", color: "#fca5a5" }}>{status.details}</div>
                  )}
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Mail size={14} />
                      <span>Send via Gmail Web</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href={mailtoUrl}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Default Mail App</span>
                    </a>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Wayne"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="AI/ML Project Opportunity / Collaboration"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Describe your project, team opportunity, or inquiry..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={loading}
                />
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: "1 1 200px" }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: "1 1 200px" }}
                  title="Direct compose in Gmail web app"
                >
                  <Mail size={16} />
                  <span>Send via Gmail</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                <Info size={13} style={{ flexShrink: 0 }} />
                <span>Form submissions are delivered to anuragjha724@gmail.com (check Gmail Spam if first time).</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
