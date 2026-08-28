import { Check } from 'lucide-react'
import { experience } from '../data/experience.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Experience
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            Where I&rsquo;ve tested software
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <div className="grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 border-l-2 border-signal-500/40 pl-6 lg:pl-8 relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-signal-500 ring-4 ring-paper dark:ring-ink"
                />
                <div>
                  <p className="font-mono text-sm text-ink/50 dark:text-paper/50">{job.period}</p>
                  <h3 className="font-display font-semibold text-xl mt-1">{job.role}</h3>
                  <p className="text-signal-600 dark:text-signal-300 font-medium mt-0.5">
                    {job.company}
                  </p>
                </div>

                <div>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-ink/70 dark:text-paper/70 leading-relaxed"
                      >
                        <Check size={16} className="text-pass mt-1 shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-full border border-ink/10 dark:border-paper/15 text-ink/60 dark:text-paper/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
