import { DATA } from '../data/portfolioData.js'

export default function Contact() {
  const { contactDetails, socialLinks } = DATA

  const rows = [
    { label: 'Email', value: contactDetails.email },
    { label: 'Phone', value: contactDetails.phone },
    { label: 'Location', value: contactDetails.location },
  ]

  return (
    <section className="page-section contact-page">
      <div className="wrap">
        <div className="section-head">
          <p className="tag"> Get in touch</p>
          <h2>Let's build something</h2>
        </div>
        <p className="contact-intro">Open to new roles and collaborations — reach out any of these ways.</p>

        <div className="contact-details">
          {rows.map((row) => (
            <div className="contact-row" key={row.label}>
              <span className="c-label">{row.label}</span>
              {row.value ? (
                <span className="c-value">{row.value}</span>
              ) : (
                <span className="c-value empty">Add your {row.label.toLowerCase()} here</span>
              )}
            </div>
          ))}
        </div>

        <div className="contact-links">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
