import './Experience.css'

const EXPERIENCES = [
  {
    id: 1,
    dates: 'Dec 2025— Mar 2026',
    status: 'Completed',
    icon: '🏢',
    role: 'Fullstack Developer Trainee',
    company: 'Business Core Solution',
    desc: 'Completed an intensive 3-month fullstack development training program. Designed and built complete web applications from scratch — React frontends, Flask REST APIs, and PostgreSQL databases. Worked in teams using Git workflows, code reviews, and agile sprints to deliver production-ready features.',
    highlights: [
      'React SPA Development',
      'Flask REST APIs',
      'PostgreSQL Databases',
      'Git & Agile Workflow',
      'Team Collaboration',
      'Code Reviews',
    ],
  },
  {
    id: 2,
    dates: 'Jan 2026 — Present',
    status: 'Active',
    icon: '💻',
    role: 'Freelance Fullstack Developer',
    company: 'Independent / Personal Projects',
    desc: 'Building and shipping personal and freelance projects that apply all fullstack skills acquired. Crafting responsive React interfaces, RESTful Flask services with SQLAlchemy ORM, and deploying to cloud platforms. Continuously learning new patterns, libraries, and best practices.',
    highlights: [
      'Client Projects',
      'API Design',
      'Database Design',
      'Cloud Deployment',
      'Performance Tuning',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <div className="experience__header reveal">
          {/* <span className="experience__number">04 /</span> */}
          <div className="gold-tag">Work History</div>
          <h2 className="section-title">
            My <em>Experience</em>
          </h2>
        </div>

        <div className="exp-timeline">
          {EXPERIENCES.map((exp, i) => (
            <div className={`exp-item reveal delay-${i + 1}`} key={exp.id}>
              <div className="exp-item__dot" />

              {/* Period row */}
              <div className="exp-item__period">
                <span className="exp-item__dates">{exp.dates}</span>
                <span className="exp-item__divider" />
                <span className="exp-item__status">{exp.status}</span>
              </div>

              {/* Card */}
              <div className="exp-item__card">
                <div className="exp-item__top">
                  <div className="exp-item__icon">{exp.icon}</div>
                  <div className="exp-item__meta">
                    <h3 className="exp-item__role">{exp.role}</h3>
                    <p className="exp-item__company">{exp.company}</p>
                  </div>
                </div>

                <p className="exp-item__desc">{exp.desc}</p>

                <div className="exp-item__highlights">
                  {exp.highlights.map((h) => (
                    <span className="exp-item__highlight" key={h}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
