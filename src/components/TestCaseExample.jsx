import { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'

const TEST_CASES = [
  'Valid credentials',
  'Invalid password',
  'Invalid email',
  'Empty fields',
  'Invalid email format',
  'Password visibility toggle',
  'Multiple failed attempts',
  'Session persistence',
  'Logout',
  'Mobile responsiveness',
]

export default function TestCaseExample() {
  const [open, setOpen] = useState(true)

  return (
    <section id="test-case" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            How I Test a Feature
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            A sample test scenario
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-2xl">
          <div className="rounded-2xl border border-ink/10 dark:border-paper/15 overflow-hidden">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="test-case-list"
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-ink/[0.02] dark:hover:bg-paper/[0.03] transition-colors"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-ink/40 dark:text-paper/40">
                  Test Scenario
                </p>
                <p className="font-display font-semibold text-lg mt-0.5">User Login</p>
              </div>
              <ChevronDown
                size={20}
                className={`text-ink/50 dark:text-paper/50 transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id="test-case-list"
              className={`grid transition-all duration-300 ease-in-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <ul className="px-6 pb-6 pt-1 border-t border-ink/10 dark:border-paper/10 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {TEST_CASES.map((tc) => (
                    <li
                      key={tc}
                      className="flex items-center gap-2.5 text-sm text-ink/70 dark:text-paper/70 pt-2.5"
                    >
                      <CheckCircle2 size={15} className="text-pass shrink-0" aria-hidden="true" />
                      {tc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
