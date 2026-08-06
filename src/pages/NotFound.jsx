import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <div className="wrap">
        <p className="tag">404</p>
        <h2>That page doesn't exist</h2>
        <p style={{ opacity: 0.7, margin: '12px 0 24px' }}>Let's get you back somewhere useful.</p>
        <Link to="/" className="btn primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
