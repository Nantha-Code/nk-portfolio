import './Projects.css'

const PROJECTS = [
  {
    num: '01',
    title: 'EquipNet India',
    badge: 'Live',
    badgeClass: 'badge-live',
    desc: 'Solution: Built a centralized equipment management platform using a Flask API and PostgreSQL backend to manage 500+ daily CRUD operations. Impact: Optimized React state management, resulting in a 20% boost in UI rendering speed and a significant reduction in database latency through indexed SQL queries',
    tags: ['React', 'Flask', 'PostgreSQL', 'JWT', 'API'],
  },
  // {
  //   num: '02',
  //   title: 'Inventory Dashboard',
  //   badge: 'Building',
  //   badgeClass: 'badge-build',
  //   desc: 'Smart inventory management for small businesses. Real-time stock tracking, automated low-stock alerts, purchase orders, and analytics charts built on a Python backend.',
  //   tags: ['Python', 'Flask', 'SQLAlchemy', 'React', 'Chart.js'],
  // },
  {
    num: '03',
    title: 'Weather-Report',
    badge: 'Done',
    badgeClass: 'badge-done',
    desc: 'Solution: Developed a responsive dashboard using React and Flask to securely manage API keys and handle asynchronous data streams from OpenWeatherMap.Impact: Achieved a 100% Mobile Responsiveness score using CSS3 Media Queries and implemented error boundaries for a seamless user experience',
    tags: ['Javascript', 'HTML', 'CSS3'],
  },
  // {
  //   num: '04',
  //   title: 'Portfolio Website',
  //   badge: 'Live',
  //   badgeClass: 'badge-live',
  //   desc: "This very site — designed from scratch with obsessive attention to motion, typography, and detail. Vite + React, zero external UI libraries.",
  //   tags: ['React', 'Vite', 'CSS3', 'HTML5'],
  // },
]

export function Projects() {
  return (
    <section id="projects" className="projects">
      <span className="projects__bg-num" aria-hidden="true">02</span>

      <div className="projects__header">
        <div className="reveal">
          <div className="gold-tag">Selected Work</div>
          <h2 className="section-title">
            My <em>Projects</em>
          </h2>
        </div>
        <a href="https://github.com/Nantha-Code?tab=overview&from=2026-02-01&to=2026-02-28" className="btn-outline reveal delay-2">All Projects →</a>
      </div>

      <div className="projects__list">
        {PROJECTS.map((p, i) => (
          <div className={`pcard reveal delay-${i + 1}`} key={p.num} data-cursor>
            <span className="pcard__num">{p.num}</span>

            <div className="pcard__body">
              <div className="pcard__top">
                <h3 className="pcard__title">{p.title}</h3>
                <span className={`pcard__badge ${p.badgeClass}`}>{p.badge}</span>
              </div>
              <p className="pcard__desc">{p.desc}</p>
              <div className="pcard__tags">
                {p.tags.map((t) => (
                  <span className="pcard__tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="pcard__arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  )
}
