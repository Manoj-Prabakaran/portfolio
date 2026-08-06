import { DATA } from '../data/portfolioData.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Icon({ name }) {
  if (name === 'GitHub') return <FaGithub aria-hidden="true" />
  if (name === 'LinkedIn') return <FaLinkedin aria-hidden="true" />
  return null
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="fine">Built &amp; maintained by {DATA.name}.</p>
        <div className="footer-links">
          {DATA.socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <span className="icon"><Icon name={s.label} /></span>
              <span className="sr-only">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
