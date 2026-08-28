import { GraduationCap } from 'lucide-react'
import { education } from '../data/experience.js'
import Reveal from './Reveal.jsx'

const COURSEWORK = [
  'Software Engineering',
  'Database Management Systems',
  'Web Technology',
  'Internet Software Architecture',
  'Human Computer Interaction',
  'Object-Oriented Programming',
  'Artificial Intelligence',
]

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28 bg-paper-dim dark:bg-white/[0.02]">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Education
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            IT graduate
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex items-start gap-5 max-w-xl">
          <div className="shrink-0 h-11 w-11 rounded-full bg-signal-500/10 flex items-center justify-center">
            <GraduationCap size={20} className="text-signal-600 dark:text-signal-300" />
          </div>
          <div>
            <p className="font-display font-semibold text-lg">{education.degree}</p>
            <p className="text-ink/60 dark:text-paper/60 mt-1">{education.institution}</p>
            <p className="text-sm text-ink/45 dark:text-paper/45 mt-1 font-mono">
              {education.year}
            </p>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-paper/40 mb-3">
            Relevant Coursework
          </p>
          <ul className="flex flex-wrap gap-2">
            {COURSEWORK.map((course) => (
              <li
                key={course}
                className="text-sm px-3.5 py-1.5 rounded-full border border-ink/10 dark:border-paper/15 text-ink/65 dark:text-paper/65"
              >
                {course}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}