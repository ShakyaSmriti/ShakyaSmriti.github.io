import { useEffect, useState } from 'react'
import { ArrowDown, FileDown, Check, TriangleAlert, X } from 'lucide-react'
import Reveal from './Reveal.jsx'

const LOG_LINES = [
  { status: 'pass', text: 'test_login_valid_credentials ... ok' },
  { status: 'pass', text: 'test_api_users_endpoint ... 200 OK' },
  { status: 'warn', text: 'edge_case: empty_input_field ... needs review' },
  { status: 'fail', text: 'test_password_reset_expiry ... FAILED' },
  { status: 'pass', text: 'regression_suite_checkout ... ok' },
]

const STATUS_STYLES = {
  pass: { icon: Check, color: 'text-pass' },
  warn: { icon: TriangleAlert, color: 'text-warn' },
  fail: { icon: X, color: 'text-fail' },
}

function TestConsole() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleCount(LOG_LINES.length)
      return
    }
    if (visibleCount >= LOG_LINES.length) {
      const resetTimer = setTimeout(() => {
        setVisibleCount(0)
        setCycle((c) => c + 1)
      }, 2600)
      return () => clearTimeout(resetTimer)
    }
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 550)
    return () => clearTimeout(timer)
  }, [visibleCount, cycle])

  return (
    <div
      className="rounded-2xl border border-ink/10 dark:border-paper/15 bg-ink dark:bg-[#101314] shadow-xl shadow-ink/5 overflow-hidden"
      role="img"
      aria-label="Illustration of a terminal running an automated test suite, showing passed tests, an edge case flagged for review, and one failed test"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-paper/10">
        <span className="h-2.5 w-2.5 rounded-full bg-fail/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-pass/70" />
        <span className="ml-3 text-xs text-paper/40 font-mono">test-run — spec.suite</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-6 min-h-[220px] mono-scroll overflow-x-auto">
        <p className="text-paper/50">$ npx run test-suite --watch</p>
        {LOG_LINES.slice(0, visibleCount).map((line, i) => {
          const { icon: Icon, color } = STATUS_STYLES[line.status]
          return (
            <p key={`${cycle}-${i}`} className="flex items-start gap-2 text-paper/85 mt-1.5">
              <Icon size={14} className={`${color} mt-0.5 shrink-0`} aria-hidden="true" />
              <span>{line.text}</span>
            </p>
          )
        })}
        <span className="inline-block w-2 h-4 bg-signal-500 align-middle mt-1.5 animate-blink" />
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-backdrop text-ink/[0.05] dark:text-paper/[0.05] pointer-events-none"
      />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-500" />
            QA Engineer · Available for opportunities
          </p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-balance">
            QA Engineer who thinks beyond the happy path.
          </h1>

          <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 max-w-xl leading-relaxed">
            IT graduate with hands-on QA experience across web, mobile, API, and AI-powered
            applications. I enjoy finding edge cases, breaking assumptions, and helping teams
            ship reliable software.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, '#projects')}
              className="inline-flex items-center rounded-full bg-ink dark:bg-paper text-paper dark:text-ink font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center rounded-full border border-ink/15 dark:border-paper/20 font-medium px-6 py-3 hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors"
            >
              Let&rsquo;s Connect
            </a>
          </div>

        </div>

        <Reveal>
          <TestConsole />
        </Reveal>
      </div>

      <a
  href="#about"
  onClick={(e) => scrollTo(e, '#about')}
  aria-label="Scroll to About section"
  className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center h-9 w-9 rounded-full border-2 border-grey text-red-500 hover:text-red-600 hover:border-red-600 transition-colors animate-bounce"
>
  <ArrowDown size={15} />
</a>
    </section>
  )
}
