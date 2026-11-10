"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail, Send, Copy, Check, ExternalLink, Loader2, AlertCircle } from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp_website: "" // Honeypot field for bot filtering
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: ""
  });

  // Obfuscated email representation
  const emailUser = "anuragjha724";
  const emailDomain = "gmail.com";
  const fullEmail = `${emailUser}@${emailDomain}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(fullEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleMailto = () => {
    window.location.href = `mailto:${fullEmail}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and message."
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Message delivered successfully. I will get back to you shortly."
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          hp_website: ""
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Unable to transmit message. Please contact via email or LinkedIn directly."
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network transmission error. Please reach out via email or LinkedIn directly."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">CONTACT</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to AI/ML engineering roles, research internships, and technical collaboration.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct verified channels */}
          <div className="contact-info-panel">
            <h3 className="contact-panel-title">Direct Communication</h3>
            <p className="contact-panel-desc">
              Feel free to send a message via the form or reach out directly on LinkedIn or email.
            </p>

            <div className="contact-methods">
              {/* Email Box with Obfuscation & Copy */}
              <div className="contact-method-card">
                <div className="method-icon-wrap" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className="method-content">
                  <div className="method-label">Email Address</div>
                  <div className="method-value">
                    <span>{emailUser}</span>
                    <span className="at-symbol">@</span>
                    <span>{emailDomain}</span>
                  </div>
                </div>
                <div className="method-actions">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-xs"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleMailto}
                    className="btn btn-primary btn-xs"
                    title="Open mail application"
                    aria-label="Send email"
                  >
                    <span>Send</span>
                  </button>
                </div>
              </div>

              {/* LinkedIn Box */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
                title="Open Anurag Ashu's LinkedIn profile"
              >
                <div className="method-icon-wrap" aria-hidden="true">
                  <LinkedinIcon size={18} />
                </div>
                <div className="method-content">
                  <div className="method-label">LinkedIn Profile</div>
                  <div className="method-value">in/anurag-ashu-834837263</div>
                </div>
                <ExternalLink size={15} className="method-arrow" aria-hidden="true" />
              </a>

              {/* GitHub Box */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
                title="Open Anurag Ashu's GitHub profile"
              >
                <div className="method-icon-wrap" aria-hidden="true">
                  <GithubIcon size={18} />
                </div>
                <div className="method-content">
                  <div className="method-label">GitHub Repositories</div>
                  <div className="method-value">github.com/anurag004-coder</div>
                </div>
                <ExternalLink size={15} className="method-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Hardened Form */}
          <div className="contact-form-panel">
            <h3 className="contact-panel-title">Send a Direct Message</h3>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Honeypot field (hidden from humans, traps automated scrapers) */}
              <div
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                  opacity: 0,
                  pointerEvents: "none"
                }}
                aria-hidden="true"
              >
                <label htmlFor="hp_website">Leave this field blank</label>
                <input
                  type="text"
                  id="hp_website"
                  name="hp_website"
                  value={formData.hp_website}
                  onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="form-input"
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    className="form-input"
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  maxLength={150}
                  className="form-input"
                  placeholder="e.g. AI/ML Engineering Role / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={3000}
                  className="form-textarea"
                  placeholder="Your message, project details, or role requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <div className="char-count">{formData.message.length} / 3000</div>
              </div>

              {status.message && (
                <div
                  className={`status-alert ${status.type === "success" ? "alert-success" : "alert-error"}`}
                  role="alert"
                >
                  {status.type === "error" && <AlertCircle size={16} aria-hidden="true" />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-block"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="btn-spinner" aria-hidden="true" />
                    <span>Transmitting message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
