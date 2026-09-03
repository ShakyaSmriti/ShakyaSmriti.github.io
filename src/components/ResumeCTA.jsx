import { FileDown } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function ResumeCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="rounded-2xl border border-ink/10 dark:border-paper/15 px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-paper-dim dark:bg-white/[0.03]">
          <div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight">
              Want the full picture?
            </h2>
            <p className="text-ink/60 dark:text-paper/60 mt-2 max-w-md">
              Download my resume to see my experience, skills, and QA journey in
              detail.
            </p>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}SMRITI_SHAKYA_CV.pdf`}
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink font-medium px-6 py-3 hover:opacity-90 transition-opacity shrink-0"
          >
            <FileDown size={17} />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
