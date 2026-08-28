import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 grid lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-16">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            About
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight">
            A little about me
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5 text-ink/70 dark:text-paper/70 leading-relaxed text-[17px]">
            <p>
              I&rsquo;m an IT graduate building my career in Software Quality Assurance. During my
              QA internship, I worked on testing web and mobile applications, validating APIs,
              documenting defects, and performing regression testing across different products.
            </p>
            <p>
              I&rsquo;m particularly interested in understanding how software behaves beyond
              expected scenarios — exploring edge cases, identifying inconsistencies, and
              improving product reliability. I&rsquo;m also expanding my skills in automation
              testing with Playwright and modern QA practices.
            </p>
            <p>
              My goal is straightforward: become a QA Engineer who teams trust to catch what
              others miss, before it reaches users.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
