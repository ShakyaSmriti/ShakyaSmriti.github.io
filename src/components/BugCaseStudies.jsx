import { CheckCircle2, Bug, Clock } from 'lucide-react'
import { caseStudies } from '../data/caseStudies.js'
import Reveal from './Reveal.jsx'

const RESULT_META = {
  fixed: { label: 'FIX VERIFIED', icon: CheckCircle2, className: 'text-pass border-pass/30 bg-pass/10' },
  pending: { label: 'BUG FOUND', icon: Clock, className: 'text-warn border-warn/30 bg-warn/10' },
}

const FIELDS = [
  ['The Problem', 'problem'],
  ['How I Found It', 'found'],
  ['Expected', 'expected'],
  ['Actual', 'actual'],
  ['Investigation', 'investigation'],
  ['Verification', 'verification'],
]

function CaseCard({ study }) {
  const result = RESULT_META[study.result]
  const ResultIcon = result.icon

  return (
    <article className="rounded-2xl border border-ink/10 dark:border-paper/15 p-7 bg-paper dark:bg-ink">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display font-semibold text-lg leading-snug">{study.title}</h3>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${result.className}`}
        >
          <ResultIcon size={12} />
          {result.label}
        </span>
      </div>

      <dl className="mt-5 space-y-4">
        {FIELDS.map(([label, key]) => (
          <div key={key}>
            <dt className="text-xs font-mono uppercase tracking-wide text-ink/40 dark:text-paper/40">
              {label}
            </dt>
            <dd className="text-sm text-ink/70 dark:text-paper/70 mt-1 leading-relaxed text-justify">
              {study[key]}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export default function BugCaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 py-20 sm:py-28 bg-paper-dim dark:bg-white/[0.02]">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300 flex items-center gap-2">
            <Bug size={13} /> Case Studies
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            From bug → root cause → fix verification
          </h2>
          <p className="text-ink/60 dark:text-paper/60 mt-3">
            A closer look at how I actually investigate an issue, not just report it.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.title} delay={i * 90}>
              <CaseCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}