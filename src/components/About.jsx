import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <span className="about__bg-num" aria-hidden="true">01</span>

      <div className="about__inner">
        {/* ── Left ── */}
        <div className="about__left">

          <div className="gold-tag">About Me</div>
          <h2 className="section-title">
            Who I <em>Am</em>
          </h2>
        </div>

        {/* ── Right ── */}
        <div className="about__right reveal delay-2">
          <p className="about__intro">
            A <em>Fullstack Developer</em> who builds things that live on both
            sides of the wire — beautiful interfaces and the APIs that power them.
          </p>

          <div className="about__body">
            <p>
              I completed an <strong>intensive 3-month fullstack program</strong>{' '}
              at <strong>Business Core Solution</strong>, where I went from
              fundamentals to shipping real production applications. Every week
              pushed me deeper into the full development lifecycle.
            </p>
            <p>
              On the frontend I work with <strong>React.js</strong>, bringing
              designs to life with clean component architecture, state management,
              and responsive CSS. On the backend I build{' '}
              <strong>RESTful APIs with Python & Flask</strong>, connect them to{' '}
              <strong>PostgreSQL databases</strong>, and handle everything from
              authentication to data modeling.
            </p>
            <p>
              I'm obsessed with clean code, readable logic, and interfaces that
              feel as good as they look. I love the moment a feature just
              <em> clicks</em> into place.
            </p>
          </div>

          <div className="about__card">
            <span>{'Currently'}</span><br />
            Role &nbsp;&nbsp;&nbsp;: Fullstack Developer<br />
            Stack &nbsp;&nbsp;: React · Flask · PostgreSQL<br />
            Training: Business Core Solution (3 months)
          </div>

          <div className="about__attrs">
            {[
              { icon: '⚡', text: 'Fast Learner'      },
              { icon: '🔧', text: 'Problem Solver'    },
              { icon: '🤝', text: 'Team Player'       },
              { icon: '📐', text: 'Detail-Oriented'   },
            ].map((a) => (
              <div className="about__attr" key={a.text}>
                <span className="about__attr-icon">{a.icon}</span>
                {a.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
