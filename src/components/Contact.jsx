import { useState } from 'react'
import './Contact.css'

const SOCIALS = [
  { icon: '📧', label: 'Email',    value: 'nnanthakumar971@gmail.com',      href: 'nnantha971@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'Linkedin.com', href: 'https://www.linkedin.com/in/nantha-kumar-1670ba293' },
  { icon: '🐙', label: 'Whats-app',   value: '7826872037',      href: '#' },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="contact__inner">
        {/* ── Left ── */}
        <div className="contact__left reveal-left">
          <div className="gold-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's <em>Build</em><br />Together
          </h2>
          <p className="contact__blurb">
            I'm open to freelance projects, full-time roles, and interesting
            collaborations. Drop me a message and I'll get back to you within
            24 hours.
          </p>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a className="contact__social" href={s.href} key={s.label} data-cursor>
                <span className="contact__social-icon">{s.icon}</span>
                <span className="contact__social-text">
                  <span className="contact__social-label">{s.label}</span>
                  <span className="contact__social-value">{s.value}</span>
                </span>
                <span className="contact__social-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        {/* <div className="contact__form-wrap reveal-right delay-2">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  className="contact__input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  className="contact__input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                className="contact__input"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                className="contact__textarea"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__submit">
              <button className="contact__btn" type="submit" disabled={loading}>
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <span>{loading ? '⏳' : '→'}</span>
              </button>
            </div>

            {sent && (
              <div className="contact__success">
                ✓ Message sent! I'll be in touch very soon.
              </div>
            )}
          </form>
        </div> */}
      </div>
    </section>
  )
}
