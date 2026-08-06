import { Link } from 'react-router-dom'
import { DATA } from '../data/portfolioData.js'

export default function Home() {
  const parts = DATA.name.trim().split(' ')
  const first = parts.slice(0, -1).join(' ') || parts[0]
  const last = parts.length > 1 ? parts[parts.length - 1] : ''

  return (
    <>
      <section className="hero">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="wrap">
          <p className="eyebrow">{DATA.eyebrow}</p>
          <h1 className="name">
            {last ? (
              <>
                {first} <span className="accent">{last}</span>
              </>
            ) : (
              <span className="accent">{first}</span>
            )}
          </h1>
          <p className="role">{DATA.role}</p>
          <p className="bio">{DATA.bio}</p>

          <div className="cta-row">
            {DATA.ctas.map((c) =>
              c.href.startsWith('/') ? (
                <Link key={c.label} to={c.href} className={`btn ${c.type === 'primary' ? 'primary' : 'ghost'}`}>
                  {c.label}
                </Link>
              ) : (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${c.type === 'primary' ? 'primary' : 'ghost'}`}
                >
                  {c.label}
                </a>
              )
            )}
          </div>

          <div className="profile-stats home-stats">
            {DATA.stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="num">{s.num}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="wrap">
          <p className="stack-label">// the stack I build with, layer by layer</p>
          <div className="stack">
            {DATA.stackLayers.map((l, i) => (
              <div className={`layer ${l.layer}`} key={l.title}>
                <span className="l-title">
                  <span className="l-num">0{i + 1}</span>
                  {l.title}
                </span>
                <span className="l-tech">{l.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
