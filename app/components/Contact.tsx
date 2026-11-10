"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Copy, Check, Send, Loader2, AlertCircle } from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp_website: ""
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: ""
  });

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
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">CONTACT</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to machine learning internships, engineering roles, and technical discussions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct channels */}
          <div className="contact-panel">
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Direct Channels
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Reach out directly or send a message using the form.
            </p>

            <div className="contact-method-card">
              <div>
                <div className="method-label">Email</div>
                <div className="method-val">{emailUser}@{emailDomain}</div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                title="Copy email address"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card"
            >
              <div>
                <div className="method-label">LinkedIn</div>
                <div className="method-val">in/anurag-ashu-834837263</div>
              </div>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-vermilion)" }}>Connect ↗</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card"
            >
              <div>
                <div className="method-label">GitHub</div>
                <div className="method-val">github.com/anurag004-coder</div>
              </div>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-vermilion)" }}>View ↗</span>
            </a>
          </div>

          {/* Form with Fully Hidden Honeypot */}
          <div className="contact-panel">
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              {/* Fully Hidden Honeypot Field */}
              <div
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                  opacity: 0,
                  pointerEvents: "none",
                  display: "none"
                }}
                aria-hidden="true"
              >
                <label htmlFor="hp_website">Do not fill this field</label>
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

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
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
                  Your Email
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
                  placeholder="e.g. ML Internship / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={3000}
                  className="form-textarea"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {status.message && (
                <div
                  className={`status-alert ${status.type === "success" ? "alert-success" : "alert-error"}`}
                  role="alert"
                >
                  {status.type === "error" && <AlertCircle size={15} style={{ display: "inline", marginRight: "6px" }} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-vermilion"
                style={{ width: "100%" }}
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="btn-spinner" aria-hidden="true" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} aria-hidden="true" />
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
