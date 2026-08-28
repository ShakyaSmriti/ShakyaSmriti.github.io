import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import QAApproach from './components/QAApproach.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import BugCaseStudies from './components/BugCaseStudies.jsx'
import TestCaseExample from './components/TestCaseExample.jsx'
import TestingWorkflow from './components/TestingWorkflow.jsx'
import AutomationJourney from './components/AutomationJourney.jsx'
import Education from './components/Education.jsx'
import ResumeCTA from './components/ResumeCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink text-ink dark:text-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <QAApproach />
        <Experience />
        <Skills />
        <Projects />
        <BugCaseStudies />
        <TestCaseExample />
        <TestingWorkflow />
        <AutomationJourney />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
