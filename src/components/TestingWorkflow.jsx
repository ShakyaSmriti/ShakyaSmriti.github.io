import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const STEPS = [
  'Requirements',
  'Understand User Flow',
  'Identify Risks',
  'Create Test Scenarios',
  'Execute Tests',
  'Report Defects',
  'Retest Fixes',
  'Regression Testing',
  'Release Confidence',
]

export default function TestingWorkflow() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setProgress(1)
      return
    }
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(1)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="scroll-mt-24 py-20 sm:py-28 bg-paper-dim dark:bg-white/[0.02]">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Process
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            My QA workflow
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-14 max-w-md mx-auto">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-ink/10 dark:bg-paper/15" aria-hidden="true" />
          <div
            className="absolute left-[9px] top-2 w-px bg-signal-500 transition-all duration-[1500ms] ease-out"
            style={{ height: progress ? 'calc(100% - 16px)' : '0%' }}
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {STEPS.map((step, i) => (
              <li key={step} className="relative pl-8">
                <span
                  className="absolute left-0 top-0.5 h-[19px] w-[19px] rounded-full border-2 border-signal-500 bg-paper dark:bg-ink transition-colors duration-500"
                  style={{ transitionDelay: `${i * 120}ms` }}
                  aria-hidden="true"
                />
                <span className="font-medium text-ink/80 dark:text-paper/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
