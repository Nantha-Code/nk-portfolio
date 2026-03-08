import { Cursor }     from './components/Cursor'
import { Navbar }     from './components/Navbar'
import { Hero }       from './components/Hero'
import { About }      from './components/About'
import { Projects }   from './components/Projects'
import { Skills }     from './components/Skills'
import { Experience } from './components/Experience'
import { Education }  from './components/Education'
import { Contact }    from './components/Contact'
import { Footer }     from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  // Activates scroll reveal for all .reveal elements
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
