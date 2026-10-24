import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <span className="about__bg-num" aria-hidden="true">01</span>

      <div className="about__inner">
        {/* Left */}
        <div className="about__left">
          <div className="gold-tag">About Me</div>
          <h2 className="section-title">
            Who I <em>Am</em>
          </h2>
        </div>

        {/* Right */}
        <div className="about__right reveal delay-2">
          <p className="about__intro">
            A <em>Full Stack Web Developer</em> with skills in <em>Python</em>-based
            web development and the <em>MERN</em> stack. I work with frontend
            technologies, backend APIs, and relational and NoSQL databases
            to build responsive, data-driven web applications.
          </p>

          <div className="about__body">
            <p>
              I completed an <strong>intensive 3-month Python Full Stack
              Development program</strong> at <strong>Business Core Solutions</strong>,
              developing skills in frontend development, backend programming,
              database integration, and REST API development. My Python stack
              includes <strong>Python, Flask, PostgreSQL, React.js, JavaScript,
              HTML, and CSS</strong>.
            </p>

            <p>
              My MERN stack skills include <strong>MongoDB, Express.js,
              React.js, and Node.js</strong> for building JavaScript-based
              full-stack applications. These technologies support component-based
              UI development, server-side API handling, and document database
              integration.
            </p>

            <p>
              Across both stacks, my technical skills include <strong>REST API
              development and integration, CRUD operations, SQL queries,
              database modelling, authentication, responsive UI development,
              debugging, and application testing</strong>. I use
              <strong> Git, GitHub, and Postman</strong> for version control,
              source code management, and API testing.
            </p>

            <p>
              I focus on writing maintainable code, understanding client-server
              communication, and connecting frontend interfaces with backend
              services and databases. I continue to strengthen my full-stack
              development skills through hands-on projects and practical
              implementation.
            </p>
          </div>

          <div className="about__card">
            <span>Technical Profile</span><br />
            Role &nbsp;&nbsp;&nbsp;: Full Stack Web Developer<br />
            Stack 1 : Python, Flask, React.js, PostgreSQL<br />
            Stack 2 : MongoDB, Express.js, React.js, Node.js<br />
            Tools &nbsp;&nbsp;: Git, GitHub, Postman
          </div>

          <div className="about__attrs">
            {[
              { icon: '⚡', text: 'Fast Learner' },
              { icon: '🔧', text: 'Problem Solver' },
              { icon: '🤝', text: 'Team Player' },
              { icon: '📐', text: 'Detail-Oriented' },
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





// import './About.css'

// export function About() {
//   return (
//     <section id="about" className="about">
//       <span className="about__bg-num" aria-hidden="true">01</span>

//       <div className="about__inner">
//         {/* ── Left ── */}
//         <div className="about__left">

//           <div className="gold-tag">About Me</div>
//           <h2 className="section-title">
//             Who I <em>Am</em>
//           </h2>
//         </div>

//         {/* ── Right ── */}

                
//             <div className="about__right reveal delay-2">
//             <p className="about__intro">
//             A <em>Python Full Stack Developer</em> with skills in React.js,
//             Python, Flask, REST API development, and PostgreSQL, with an
//             interest in developing applications using the MERN stack.
//             </p>

//             <div className="about__body">
//             <p>
//               I completed an <strong>intensive 3-month full-stack development
//               program</strong> at <strong>Business Core Solutions</strong>,
//               where I learned frontend development, backend development,
//               database integration, and REST API development.
//             </p>

//             <p>
//               For frontend development, I use <strong>HTML, CSS, JavaScript,
//               and React.js</strong>. For backend development, I use
//               <strong> Python and Flask</strong> to build REST APIs and
//               integrate them with <strong>PostgreSQL</strong>. I also have
//               an interest in the <strong>MERN stack — MongoDB, Express.js,
//               React.js, and Node.js</strong>.
//             </p>

//             <p>
//               My technical skills include <strong>CRUD operations, REST API
//               integration, SQL queries, database design, responsive UI
//               development, debugging, Git, GitHub, and Postman</strong>.
//               I apply these skills while developing and testing web applications.
//             </p>
//             </div>
//             </div>





//         {/* <div className="about__right reveal delay-2">
//           <p className="about__intro">
//             A <em>Fullstack Developer</em> who builds things that live on both
//             sides of the wire — beautiful interfaces and the APIs that power them.
//           </p>

//           <div className="about__body">
//             <p>
//               I completed an <strong>intensive 3-month fullstack program</strong>{' '}
//               at <strong>Business Core Solution</strong>, where I went from
//               fundamentals to shipping real production applications. Every week
//               pushed me deeper into the full development lifecycle.
//             </p>
//             <p>
//               On the frontend I work with <strong>React.js</strong>, bringing
//               designs to life with clean component architecture, state management,
//               and responsive CSS. On the backend I build{' '}
//               <strong>RESTful APIs with Python & Flask</strong>, connect them to{' '}
//               <strong>PostgreSQL databases</strong>, and handle everything from
//               authentication to data modeling.
//             </p>
//             <p>
//               I'm obsessed with clean code, readable logic, and interfaces that
//               feel as good as they look. I love the moment a feature just
//               <em> clicks</em> into place.
//             </p>
//           </div> */}

//           <div className="about__card">
//             <span>{'Currently'}</span><br />
//             Role &nbsp;&nbsp;&nbsp;: Fullstack Developer<br />
//             Stack &nbsp;&nbsp;: Python & MERN Stack Developer<br />
//             Training: Business Core Solution (Dec 2025 - Mar 2026)
//           </div>

//           <div className="about__attrs">
//             {[
//               { icon: '⚡', text: 'Fast Learner'      },
//               { icon: '🔧', text: 'Problem Solver'    },
//               { icon: '🤝', text: 'Team Player'       },
//               { icon: '📐', text: 'Detail-Oriented'   },
//             ].map((a) => (
//               <div className="about__attr" key={a.text}>
//                 <span className="about__attr-icon">{a.icon}</span>
//                 {a.text}
//               </div>
//             ))}
//           </div>
//         </div>
  
//     </section>
//   )
// }
