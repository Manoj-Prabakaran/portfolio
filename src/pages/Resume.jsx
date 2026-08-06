import { DATA } from '../data/portfolioData.js'

export default function Resume() {
  const { resume } = DATA
  const hasResume = Boolean(resume?.url)

  return (
    <section className="page-section">
      <div className="wrap">
        <div className="section-head">
          <p className="tag">Resume</p>
          <h2>Current Resume</h2>
        </div>

        {hasResume ? (
          <>
            <div className="resume-card resume-summary">
              <div>
                <h3>{resume.filename}</h3>
                <p>Preview the latest version of my resume below, or download the PDF directly.</p>
              </div>
              <a className="resume-btn" href={resume.url} download target="_blank" rel="noopener noreferrer">
                Download Resume ↓
              </a>
            </div>

            <div className="resume-preview">
              <iframe
                src={resume.url}
                title="Resume preview"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </>
        ) : (
          <div className="resume-card pending">
            <div>
              <h3>Resume coming soon</h3>
              <p>
                I haven't uploaded a PDF yet — check back shortly, or reach out directly using the details on the
                Contact page.
              </p>
            </div>
            <span className="resume-btn disabled">Download Resume ↓</span>
          </div>
        )}
      </div>
    </section>
  )
}
