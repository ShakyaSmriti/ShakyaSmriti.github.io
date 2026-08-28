import { skillCategories, toolbox } from '../data/skills.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28 bg-paper-dim dark:bg-white/[0.02]">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Skills
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            What I bring to a QA team
          </h2>
          <p className="text-ink/60 dark:text-paper/60 mt-3">
            Grounded in manual testing fundamentals, with automation skills actively growing.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 70}>
              <h3 className="font-display font-semibold text-base pb-3 border-b border-ink/10 dark:border-paper/10">
                {cat.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors ${
                        skill.learning
                          ? 'border-dashed border-signal-500/50 text-signal-700 dark:text-signal-300'
                          : 'border-ink/10 dark:border-paper/15 text-ink/75 dark:text-paper/75 hover:border-signal-500/60 hover:text-signal-600 dark:hover:text-signal-300'
                      }`}
                    >
                      {skill.name}
                      {skill.learning && (
                        <span className="text-[10px] uppercase tracking-wide font-mono text-signal-600 dark:text-signal-300">
                          learning
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 pt-10 border-t border-ink/10 dark:border-paper/10">
          <h3 className="font-display font-semibold text-lg mb-6">Testing toolbox</h3>
          <div className="flex flex-wrap gap-3">
            {toolbox.map((tool) => (
              <span
                key={tool}
                className="font-mono text-sm px-4 py-2 rounded-lg border border-ink/10 dark:border-paper/15 bg-paper dark:bg-ink text-ink/70 dark:text-paper/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
