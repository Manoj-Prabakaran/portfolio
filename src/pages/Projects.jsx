import { DATA } from '../data/portfolioData.js'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'

function ProjectCard({ p }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`proj-card ${flipped ? 'flipped' : ''}`}
      key={p.name}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      onClick={() => setFlipped((s) => !s)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((s) => !s)
        }
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="stripe" style={{ background: p.color }} />
          {p.image && <img src={p.image} alt={`${p.name} screenshot`} className="proj-thumb" />}
          <h3>{p.name}</h3>
          <p className="desc">{p.desc}</p>
        </div>

        <div className="card-back">
          <h4>Built With</h4>
          <div className="proj-tags">
            {p.tags.map((t) => {
              const match = DATA.skills.find((s) => s.name.toLowerCase() === t.toLowerCase())
              return match ? (
                <div className="proj-tech" key={t} title={match.name}>
                  
                  
                  <span className="tech-label">{match.name}</span>
                </div>
              ) : (
                <span className="proj-tag-text" key={t}>{t}</span>
              )
            })}
          </div>

          <div className="proj-links">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link-button live-link" style={{ borderColor: p.color }}>
                Visit
              </a>
            )}

            {p.code && (
              <a href={p.code} target="_blank" rel="noopener noreferrer" className="proj-link-button code-link" style={{ borderColor: p.color }}>
                <FaGithub aria-hidden="true" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="page-section">
      <div className="wrap">
        <div className="section-head">
          <p className="tag"> Selected work</p>
          <h2>Projects</h2>
        </div>
        <div className="projects">
          {DATA.projects.map((p) => (
            <ProjectCard p={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
