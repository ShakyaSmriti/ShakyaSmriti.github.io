import { useState } from 'react'
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Reveal from './Reveal.jsx'

const FORM_ENDPOINT = 'https://formspree.io/f/xppzzqev'

const CONTACT_LINKS = [
  { icon: Mail, label: 'shakyasmriti368@gmail.com', href: 'mailto:shakyasmriti368@gmail.com' },
  { icon: Linkedin, label: 'linkedin.com/in/smriti-shakya3', href: 'https://www.linkedin.com/in/smriti-shakya3/' },
  { icon: Github, label: 'github.com/ShakyaSmriti', href: 'https://github.com/ShakyaSmriti' },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | submitted | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        setStatus('submitted')
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 grid lg:grid-cols-[0.45fr_0.55fr] gap-14">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-signal-600 dark:text-signal-300">
            Contact
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight text-balance">
            Let&rsquo;s talk about quality.
          </h2>
          <p className="text-ink/60 dark:text-paper/60 mt-4 max-w-sm leading-relaxed">
            I&rsquo;m always interested in connecting with people working in software quality,
            testing, and technology.
          </p>

          <ul className="mt-8 space-y-3">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-3 text-ink/70 dark:text-paper/70 hover:text-signal-600 dark:hover:text-signal-300 transition-colors"
                >
                  <link.icon size={17} />
                  <span className="font-mono text-sm">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          {status === 'submitted' ? (
            <div className="rounded-2xl border border-pass/30 bg-pass/5 p-8 flex items-start gap-4">
              <CheckCircle2 size={22} className="text-pass shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-lg">Message sent</p>
                <p className="text-sm text-ink/60 dark:text-paper/60 mt-1">
                  Thanks for reaching out — I&rsquo;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-medium text-signal-600 dark:text-signal-300 hover:underline"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {status === 'error' && (
                <div
                  role="alert"
                  className="rounded-lg border border-fail/30 bg-fail/5 px-4 py-3 flex items-start gap-2.5 text-sm text-fail"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>
                    Something went wrong sending your message. Please try again, or email me
                    directly instead.
                  </span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-lg border border-ink/15 dark:border-paper/20 bg-transparent px-4 py-2.5 outline-none focus:border-signal-500 transition-colors"
                />
                {errors.name && (
                  <p id="name-error" className="text-fail text-sm mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-lg border border-ink/15 dark:border-paper/20 bg-transparent px-4 py-2.5 outline-none focus:border-signal-500 transition-colors"
                />
                {errors.email && (
                  <p id="email-error" className="text-fail text-sm mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full rounded-lg border border-ink/15 dark:border-paper/20 bg-transparent px-4 py-2.5 outline-none focus:border-signal-500 transition-colors resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="text-fail text-sm mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink font-medium px-6 py-3 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}