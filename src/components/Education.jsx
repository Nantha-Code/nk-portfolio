import './Education.css'

const EDU_ITEMS = [
  {
    icon: '🎓',
    year: '2022 — 2025',
    title: 'Bsc - Microbiology',
    place: 'K.S.Rangasamy College of Arts and Science, Namakkal',
    badge: 'Completed',
    badgeClass: 'edu-badge-done',
  },
  {
    icon: '💻',
    year: 'Dec — Mar 2026',
    title: 'Fullstack Developer Training',
    place: 'Business Core Solution — Intensive 3-month program covering React, Python, Flask, SQL & PostgreSQL',
    badge: 'Certified',
    badgeClass: 'edu-badge-cert',
  },
  {
    icon: '📚',
    year: '2026 — Present',
    title: 'Continuous Learning',
    place: 'Online courses, documentation, open-source contributions & personal project builds',
    badge: 'Active',
    badgeClass: 'edu-badge-active',
  },
]

export function Education() {
  return (
    <section id="education" className="education">
      <div className="education__inner">
        <div className="education__header reveal">
          <div className="gold-tag">Academic Path</div>
          <h2 className="section-title">
            My <em>Education</em>
          </h2>
        </div>

        <div className="edu-grid">
          {EDU_ITEMS.map((edu, i) => (
            <div className={`edu-card reveal delay-${i + 1}`} key={edu.title} data-cursor>
              <div className="edu-card__inner">
                <div className="edu-card__icon">{edu.icon}</div>
                <p className="edu-card__year">{edu.year}</p>
                <h3 className="edu-card__title">{edu.title}</h3>
                <p className="edu-card__place">{edu.place}</p>
                <span className={`edu-card__badge ${edu.badgeClass}`}>
                  <span className="edu-card__badge-dot" />
                  {edu.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
