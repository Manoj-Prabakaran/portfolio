import { DATA } from '../data/portfolioData.js'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'

export default function Skills() {
  return (
    <section className="page-section">
      <div className="wrap">
        <div className="section-head">
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h3>Know who I'm</h3>
            <p className="bio">{DATA.bio}</p>
          </div>

          <div className="about-skills">
            <h3>Skills</h3>
            <div className="skill-chip-list">
              {DATA.skills.map((s) => {
                const ICON_MAP = {
                  html: SiHtml5,
                  css: SiCss3,
                  javascript: SiJavascript,
                  typescript: SiTypescript,
                  react: SiReact,
                  redux: SiRedux,
                  node: SiNodedotjs,
                  express: SiExpress,
                  mongodb: SiMongodb,
                }
                const IconComp = ICON_MAP[s.id]

                return (
                  <div className="skill-chip" key={s.id} title={s.name}>
                    {s.image ? (
                      <img src={s.image} alt={s.name} className="skill-img" />
                    ) : IconComp ? (
                      <span className="skill-icon"><IconComp aria-hidden="true" /></span>
                    ) : (
                      <span className="skill-icon">{s.icon}</span>
                    )}
                    <span className="skill-label">{s.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
