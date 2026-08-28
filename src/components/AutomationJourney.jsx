import Reveal from './Reveal.jsx'

const STAGES = [
  { label: 'Manual Testing', done: true },
  { label: 'Test Design', done: true },
  { label: 'Selectors & Locators', done: true },
  { label: 'Assertions', done: true },
  { label: 'Playwright', current: true },
  { label: 'Automated Regression', done: false },
  { label: 'CI/CD', done: false },
]

export default function AutomationJourney() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Growth
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            From manual testing to automation
          </h2>
          <p className="text-ink/60 dark:text-paper/60 mt-3">
            I&rsquo;m deliberately building automation skills on top of solid manual testing
            fundamentals — currently focused on Playwright.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 overflow-x-auto mono-scroll">
          <ol className="flex items-center gap-2 min-w-max px-1 py-2">
            {STAGES.map((stage, i) => (
              <li key={stage.label} className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border whitespace-nowrap ${
                    stage.current
                      ? 'border-signal-500 bg-signal-500 text-paper'
                      : stage.done
                      ? 'border-ink/15 dark:border-paper/20 text-ink/70 dark:text-paper/70'
                      : 'border-dashed border-ink/15 dark:border-paper/20 text-ink/40 dark:text-paper/40'
                  }`}
                >
                  {stage.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-paper animate-pulse" />
                  )}
                  {stage.label}
                </span>
                {i < STAGES.length - 1 && (
                  <span className="text-ink/25 dark:text-paper/25" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-xs font-mono text-ink/40 dark:text-paper/40 mt-3">
            Highlighted stage marks where I am right now.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
