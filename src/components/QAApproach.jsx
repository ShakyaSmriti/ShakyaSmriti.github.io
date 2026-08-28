import { Users, GitBranch, Search, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PRINCIPLES = [
  {
    icon: Users,
    title: 'Think Like a User',
    text: 'Understand how real users interact with the product — not just how the spec describes it.',
  },
  {
    icon: GitBranch,
    title: 'Break the Happy Path',
    text: 'Test unexpected inputs, edge cases, and unusual workflows most test plans skip.',
  },
  {
    icon: Search,
    title: "Investigate, Don't Assume",
    text: 'Reproduce issues, gather evidence, and pin down actual behavior before reporting it.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevent, Not Just Detect',
    text: 'Review requirements early to catch potential problems before they become bugs.',
  },
]

export default function QAApproach() {
  return (
    <section id="approach" className="scroll-mt-24 py-20 sm:py-28 bg-paper-dim dark:bg-white/[0.02]">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Testing Approach
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            How I think about quality
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ink/10 dark:bg-paper/10 rounded-2xl overflow-hidden">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full bg-paper dark:bg-ink p-8 transition-colors hover:bg-signal-50/50 dark:hover:bg-signal-500/[0.06]">
                <p.icon
                  size={22}
                  className="text-signal-600 dark:text-signal-300 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h3 className="font-display font-semibold text-lg mt-4">{p.title}</h3>
                <p className="text-ink/60 dark:text-paper/60 mt-2 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
