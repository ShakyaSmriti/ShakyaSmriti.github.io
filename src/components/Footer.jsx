import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ShakyaSmriti",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/smriti-shakya3/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shakyasmriti368@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-paper/10 py-10">
      <div className="mx-auto max-w-content px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-ink/60 dark:text-paper/60">
            © {new Date().getFullYear()} Smriti Shakya.
          </p>

          <p className="text-xs text-ink/40 dark:text-paper/40 mt-1 font-mono">
            Quality is everyone&rsquo;s responsibility.
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="text-ink/50 dark:text-paper/50 hover:text-signal-600 dark:hover:text-signal-300 transition-colors"
              >
                <link.icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
