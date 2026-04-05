import "./Certificates.css"


export function Certificates() {

const CERTIFICATES = [
  {
    title: "Full Stack Development",
    platform: "Business Core Solutions",
    date: "2026",
    link: "https://www.linkedin.com/posts/nantha-kumar-1670ba293_learning-itskills-professionalgrowth-share-7446605707753209856-0xLt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEcHL18BLKg9DDgk3dPWwZCO11AeD3rhu-c",
  }
]

  return (
    <section id="certificates" className="certificates">

      <div className="certificates__inner">

        <div className="certificates__header">
          <div className="gold-tag">Achievements</div>
          <h2 className="section-title">
            My<em>Certificates</em>
          </h2>
        </div>

        <div className="certificates__grid">

          {CERTIFICATES.map((cert, i) => (
            
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
            >

              <h3 className="certificate-title">
                {cert.title}
              </h3>

              <p className="certificate-platform">
                {cert.platform}
              </p>

              <p className="certificate-date">
                {cert.date}
              </p>

              <span className="certificate-link">
                View on LinkedIn →
              </span>

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}