import { Bug, Lightbulb, Wrench, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-ink/10 dark:border-paper/15 p-7 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-0.5 transition-all duration-300 bg-paper dark:bg-ink">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-semibold text-xl">{project.name}</h3>
          <p className="text-sm text-signal-600 dark:text-signal-300 mt-0.5">{project.type}</p>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} link`}
            className="shrink-0 p-2 rounded-full border border-ink/10 dark:border-paper/15 hover:border-signal-500/60 transition-colors"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      <p className="mt-4 text-ink/65 dark:text-paper/65 leading-relaxed text-[15px] text-justify">
        {project.summary}
      </p>

      <div className="mt-5">
        <p className="text-xs font-mono uppercase tracking-wide text-ink/40 dark:text-paper/40 mb-2">
          Areas tested
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.areas.map((area) => (
            <li
              key={area}
              className="text-xs px-2.5 py-1 rounded-full bg-ink/5 dark:bg-paper/10 text-ink/65 dark:text-paper/65"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs font-mono px-2.5 py-1 rounded-md border border-ink/10 dark:border-paper/15 text-ink/55 dark:text-paper/55"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-ink/10 dark:border-paper/10 space-y-3">
        <p className="flex gap-2.5 text-sm text-ink/70 dark:text-paper/70">
          <Bug size={16} className="text-fail mt-0.5 shrink-0" aria-hidden="true" />
          <span className="text-justify">{project.findings}</span>
        </p>
        <p className="flex gap-2.5 text-sm text-ink/70 dark:text-paper/70">
          <Lightbulb size={16} className="text-warn mt-0.5 shrink-0" aria-hidden="true" />
          <span className="text-justify">{project.learned}</span>
        </p>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Projects
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            QA work in practice
          </h2>
          <p className="text-ink/60 dark:text-paper/60 mt-3">
            Real testing performed on real products — what I checked, what I found, and what it
            taught me.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={240} className="mt-10 rounded-2xl border border-ink/10 dark:border-paper/15 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Wrench size={20} className="text-signal-600 dark:text-signal-300 shrink-0" aria-hidden="true" />
          <p className="text-sm text-ink/65 dark:text-paper/65">
            <span className="font-mono text-ink/40 dark:text-paper/40 mr-2">Request →</span>
            <span className="font-mono">Status Code</span>
            <span className="mx-2 text-ink/30">→</span>
            <span className="font-mono">Response Body</span>
            <span className="mx-2 text-ink/30">→</span>
            <span className="font-mono">Validation</span>
            <span className="mx-2 text-ink/30">→</span>
            <span className="font-mono text-signal-600 dark:text-signal-300">Defect / Pass</span>
            <span className="block mt-1 text-ink/50 dark:text-paper/50">
              The habit I follow for every API endpoint I test.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}