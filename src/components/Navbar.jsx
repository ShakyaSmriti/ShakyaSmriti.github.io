import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testing Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto mt-3 max-w-content px-4"
      >
        <div className="flex items-center justify-between gap-4 rounded-full border border-ink/10 dark:border-paper/10 bg-paper/80 dark:bg-ink/80 backdrop-blur-md px-4 sm:px-6 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-display font-semibold text-lg tracking-tight shrink-0"
            aria-label="Smitu, go to homepage"
          >
            S<span className="text-signal-500">S</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 rounded-full text-sm text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full text-ink/70 dark:text-paper/70 hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center rounded-full bg-ink dark:bg-paper text-paper dark:text-ink text-sm font-medium px-4 py-1.5 hover:opacity-90 transition-opacity"
            >
              Let&rsquo;s Connect
            </a>

            <button
              className="lg:hidden p-2 rounded-full hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[64px] z-40 bg-paper dark:bg-ink transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col px-6 py-8 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-xl font-display border-b border-ink/10 dark:border-paper/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-6 inline-flex items-center rounded-full bg-ink dark:bg-paper text-paper dark:text-ink text-sm font-medium px-5 py-2.5"
            >
              Let&rsquo;s Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
