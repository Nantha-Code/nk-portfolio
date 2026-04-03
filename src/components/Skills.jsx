import "./Skills.css"

import htmlIcon from "../assets/icons/html.png"
import cssIcon from "../assets/icons/css.png"
import jsIcon from "../assets/icons/javascript.png"
import reactIcon from "../assets/icons/react.png"
import pythonIcon from "../assets/icons/python.png"
import flaskIcon from "../assets/icons/flask.png"
import sqlIcon from "../assets/icons/sql.png"
import postgresIcon from "../assets/icons/postgres.png"

const SKILL_CARDS = [
  { icon: htmlIcon, name: "HTML5" },
  { icon: cssIcon, name: "CSS3" },
  { icon: jsIcon, name: "JavaScript" },
  { icon: reactIcon, name: "React.js" },
  { icon: pythonIcon, name: "Python" },
  { icon: flaskIcon, name: "Flask" },
  { icon: sqlIcon, name: "SQL" },
  { icon: postgresIcon, name: "PostgreSQL" },
]

const MARQUEE_ITEMS = [
  "React.js","Python","Flask","PostgreSQL","HTML5","CSS3",
  "JavaScript","REST API","SQL","Git","Vite","Fullstack",
]

export function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills__inner">

        <div className="skills__header">
          <div className="gold-tag">Technical Stack</div>

          <h2 className="section-title">
            My <em>Skills</em>
          </h2>
        </div>

        {/* Skill Cards Only */}
        <div className="skills__grid">

          {SKILL_CARDS.map((s, i) => (
            <div className="skill-card" key={s.name}>

              <img
                src={s.icon}
                alt={s.name}
                className="skill-card__icon"
              />

              <p className="skill-card__name">{s.name}</p>

            </div>
          ))}

        </div>

        {/* Marquee */}
        <div className="skills__marquee-wrap">
          <div className="skills__marquee">
            {MARQUEE_ITEMS.map((item, i) => (
              <div className="skills__marquee-item" key={i}>
                <span>✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
