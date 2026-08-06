import { DATA } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section className="page-section">
      <div className="wrap">
        <div className="section-head">
          <p className="tag">Timeline</p>
          <h2>Professional Journey</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {DATA.timeline.map((t, i) => (
            <div className="tl-row" key={`${t.title}-${i}`}>
              <div className="tl-marker">
                <div className="tl-icon">{t.icon || '●'}</div>
              </div>

              <article className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <h3>{t.title}</h3>
                    {t.company && <div className="muted">{t.company}</div>}
                  </div>
                  {t.range && <div className="tl-range">{t.range}</div>}
                </div>

                <div className="tl-card-body">
                  <p>{t.detail}</p>
                  {t.tags && (
                    <div className="tl-tags">
                      {t.tags.map((tag) => (
                        <span className="chip" key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
