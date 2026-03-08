import { useEffect, useRef, useState } from "react"
import "./Skills.css"

import htmlIcon from "../assets/icons/html.png"
import cssIcon from "../assets/icons/css.png"
import jsIcon from "../assets/icons/javascript.png"
import reactIcon from "../assets/icons/react.png"
import pythonIcon from "../assets/icons/python.png"
import flaskIcon from "../assets/icons/flask.png"
import sqlIcon from "../assets/icons/sql.png"
import postgresIcon from "../assets/icons/postgres.png"


const SKILL_BARS = [
  { icon: htmlIcon, name: "HTML & CSS", pct: 90 },
  { icon: jsIcon, name: "JavaScript", pct: 82 },
  { icon: reactIcon, name: "React.js", pct: 80 },
  { icon: pythonIcon, name: "Python", pct: 78 },
  { icon: flaskIcon, name: "Flask", pct: 75 },
  { icon: postgresIcon, name: "PostgreSQL/SQL", pct: 72 },
]

const SKILL_CARDS = [
  { icon: htmlIcon, name: "HTML5"},
  { icon: cssIcon, name: "CSS3"},
  { icon: jsIcon, name: "JavaScript"},
  { icon: reactIcon, name: "React.js"},
  { icon: pythonIcon, name: "Python"},
  { icon: flaskIcon, name: "Flask"},
  { icon: sqlIcon, name: "SQL"},
  { icon: postgresIcon, name: "PostgreSQL"},
]

const MARQUEE_ITEMS = [
  "React.js","Python","Flask","PostgreSQL","HTML5","CSS3",
  "JavaScript","REST API","SQL","Git","Vite","Fullstack",
  "React.js","Python","Flask","PostgreSQL","HTML5","CSS3",
  "JavaScript","REST API","SQL","Git","Vite","Fullstack",
]

export function Skills() {

  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()

  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>

      <div className="skills__inner">

        <div className="skills__header reveal">
          {/* <span className="skills__number">03 /</span> */}
          <div className="gold-tag">Technical Stack</div>

          <h2 className="section-title">
            My <em>Skills</em>
          </h2>
        </div>


        <div className="skills__layout">

          {/* Skill Bars */}
          <div className="skills__bars reveal-left delay-1">

            {SKILL_BARS.map((s, i) => (

              <div className="skill-bar" key={s.name}>

                <div className="skill-bar__header">

                  <span className="skill-bar__name">

                    <img
                      src={s.icon}
                      alt={s.name}
                      className="skill-bar__icon"
                    />

                    {s.name}

                  </span>

                  <span className="skill-bar__pct">
                    {s.pct}%
                  </span>

                </div>

                <div className="skill-bar__track">

                  <div
                    className="skill-bar__fill"
                    style={{
                      width: animated ? `${s.pct}%` : "0%",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>


          {/* Skill Cards */}
          <div className="skills__grid reveal-right delay-2">

            {SKILL_CARDS.map((s, i) => (

              <div className="skill-card" key={s.name} data-cursor>

                <div className="skill-card__top">

                  <img
                    src={s.icon}
                    alt={s.name}
                    className="skill-card__icon"
                  />

                  <span
                    className="skill-card__dot"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  />

                </div>

                <p className="skill-card__name">{s.name}</p>
                <p className="skill-card__type">{s.type}</p>

              </div>

            ))}

          </div>

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