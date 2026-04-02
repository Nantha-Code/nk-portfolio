import { useState } from "react"
import "./Hero.css"
import profilePhoto from "../assets/profile.jpg"
import resumeFile from "../assets/resume.pdf"

export function Hero() {
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <section id="hero" className="hero">
        {/* Background */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
        <div className="hero__scanline" />

        <div className="hero__inner">
          {/* LEFT */}
          <div className="hero__content">
            <div className="hero__status">
              <span className="hero__status-dot" />
              Available for opportunities
            </div>

            <h1 className="hero__name">Nantha</h1>
            <h1 className="hero__name-line2">Kumar</h1>

            <div className="hero__role">
              <span className="hero__role-line" />
              <span className="hero__role-text">Fullstack Developer</span>
            </div>

            <p className="hero__desc">
              I craft end-to-end web applications — from React interfaces to
              robust <strong>Flask APIs</strong> and{" "}
              <strong>PostgreSQL</strong>.
            </p>

            {/* ACTIONS */}
            <div className="hero__actions">
              <a href="#projects" className="btn-gold">
                <span>View Projects</span>
              </a>

              <a href="#contact" className="btn-outline">
                Let's Talk →
              </a>

              {/* VIEW RESUME BUTTON */}
              <button
                className="btn-outline"
                onClick={() => setShowResume(true)}
              >
                View Resume
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero__visual">
            <div className="hero__card">
              <div className="hero__ring" />

              <div className="hero__card-frame">
                <img
                  src={profilePhoto}
                  alt="Nantha Kumar"
                  className="hero__photo"
                />
                <div className="hero__photo-overlay" />
              </div>

              <div className="hero__code-badge">
                React · Flask <br />
                PostgreSQL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 RESUME MODAL */}
      {showResume && (
        <div className="resume-modal">
          <div className="resume-content">
            
            {/* CLOSE */}
            <button
              className="resume-close"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            {/* PDF VIEW */}
            <iframe
              src={resumeFile}
              title="Resume"
              className="resume-frame"
            />

            {/* DOWNLOAD BUTTON */}
            <a
              href={resumeFile}
              download="Nantha_Kumar_Resume.pdf"
              className="btn-gold resume-download"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  )
}







































// import { useState } from 'react'
// import resumeFile from '../assets/resume.pdf'
// import './Hero.css'

// // ─────────────────────────────────────────────────────────────
// //  HOW TO CHANGE YOUR PHOTO:
// //  1. Copy your image into:  src/assets/profile.jpg
// //  2. That's it — done! The import below handles the rest.
// //
// //  Supported formats: .jpg  .jpeg  .png  .webp
// //  Just rename your file to "profile.jpg" (or update the import path)
// // ─────────────────────────────────────────────────────────────
// import profilePhoto from '../assets/profile.jpg'

// export function Hero() {

// const [showResume, setShowResume] = useState(false)

//   return (
//     <section id="hero" className="hero">
//       {/* Background effects */}
//       <div className="hero__orb hero__orb--1" />
//       <div className="hero__orb hero__orb--2" />
//       <div className="hero__orb hero__orb--3" />
//       <div className="hero__grid" aria-hidden="true" />
//       <div className="hero__scanline" aria-hidden="true" />

//       <div className="hero__inner">
//         {/* ── LEFT: Text ── */}
//         <div className="hero__content">
//           <div className="hero__status">
//             <span className="hero__status-dot" />
//             Available for opportunities
//           </div>

//           <h1 className="hero__name">Nantha</h1>
//           <h1 className="hero__name-line2">Kumar</h1>

//           <div className="hero__role">
//             <span className="hero__role-line" />
//             <span className="hero__role-text">Fullstack Developer</span>
//           </div>

//           <p className="hero__desc">
//             I craft end-to-end web applications — from pixel-perfect React
//             interfaces to robust <strong>Python & Flask</strong> APIs and
//             <strong> PostgreSQL</strong> databases. Trained intensively at{' '}
//             <strong>Business Core Solution</strong> to ship production-ready
//             software.
//           </p>

//           <div className="hero__actions">
//           <a href="#projects" className="btn-gold"><span>View Projects</span></a>
//           <a href="#contact" className="btn-outline">Let's Talk →</a>

//           {/* NEW BUTTON */}
//           <button 
//             className="btn-outline"
//             onClick={() => setShowResume(true)}
//           >
//             View Resume
//           </button>
//         </div>
          
//           {/* <div className="hero__actions">
//             <a href="#projects" className="btn-gold"><span>View Projects</span></a>
//             <a href="#contact"  className="btn-outline">Let's Talk →</a>
//           </div> */}

//           <div className="hero__stats">
//             <div className="hero__stat">
//               <div className="hero__stat-num">8<sup>+</sup></div>
//               <div className="hero__stat-label">Technologies</div>
//             </div>
//             <div className="hero__stat">
//               <div className="hero__stat-num">3</div>
//               <div className="hero__stat-label">Months Training</div>
//             </div>
//             <div className="hero__stat">
//               <div className="hero__stat-num">FS</div>
//               <div className="hero__stat-label">Fullstack</div>
//             </div>
//           </div>
//         </div>

//         {/* ── RIGHT: Visual card with real photo ── */}
//         <div className="hero__visual">
//           <div className="hero__card">
//             <div className="hero__ring" />

//             <div className="hero__card-frame">
//               {/* ── Your real profile photo ── */}
//               <img
//                 src={profilePhoto}
//                 alt="Nantha Kumar — Fullstack Developer"
//                 className="hero__photo"
//               />

//               {/* Gold gradient overlay at bottom */}
//               <div className="hero__photo-overlay" aria-hidden="true" />
//             </div>

//             {/* Floating code badge */}
//             <div className="hero__code-badge">
//               <span>{'Tech stack'}</span><br />
//               React · Flask<br />
//               PostgreSQL
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="hero__scroll">
//         <span className="hero__scroll-text">Scroll</span>
//         <div className="hero__scroll-line" />
//       </div>
//     </section>
//   )
// }
