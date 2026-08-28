const STATS = [
  { label: 'QA Intern', sub: 'Practical Experience' },
  { label: 'Web + Mobile', sub: 'Testing Experience' },
  { label: 'API Testing', sub: 'Postman + Swagger' },
  { label: 'Automation', sub: 'Learning Playwright' },
]

export default function Stats() {
  return (
    <section aria-label="Quick facts" className="border-y border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-content px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ink/10 dark:divide-paper/10">
        {STATS.map((stat) => (
          <div key={stat.label} className="py-8 px-4 sm:px-6">
            <p className="font-display font-semibold text-lg sm:text-xl">{stat.label}</p>
            <p className="text-sm text-ink/55 dark:text-paper/55 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
