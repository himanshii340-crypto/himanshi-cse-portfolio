import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshi Choudhary — B.Tech CSE Student, JECRC University" },
      {
        name: "description",
        content:
          "Personal portfolio of Himanshi Choudhary, a first-year B.Tech Computer Science & Engineering (CSE Core) student at JECRC University, Jaipur — skills, projects and contact.",
      },
      { property: "og:title", content: "Himanshi Choudhary — B.Tech CSE Student, JECRC University" },
      {
        property: "og:description",
        content:
          "First-year B.Tech CSE student at JECRC University, Jaipur learning C programming, web development and AI tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "himanshi.26bcon1972@jecrcu.edu.in";
const GITHUB_URL = "https://github.com/himanshii340-crypto";
const LINKEDIN_URL = "https://www.linkedin.com/in/himanshi-choudhary-b37333425";

function Index() {
  return (
    <div className="min-h-screen font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-glass backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
            HC · Portfolio
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#education" className="transition-colors hover:text-foreground">Education</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#achievements" className="transition-colors hover:text-foreground">Achievements</a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-black/5 transition-colors hover:bg-primary/85"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Home */}
        <section id="home" className="grid scroll-mt-24 items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="animate-rise">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              B.Tech · CSE (Core) · JECRC University, Jaipur
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
              Himanshi
              <br />
              Choudhary
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted-foreground text-pretty">
              A first-year Computer Science student learning C programming, AI tools, and digital
              productivity — building a foundation one project at a time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background ring-1 ring-black/5 transition-colors hover:bg-foreground/85"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-glass-strong px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-black/5 backdrop-blur-md transition-colors hover:bg-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[28px] bg-glass ring-1 ring-glass-ring backdrop-blur-md">
            <div className="bg-foreground p-6 font-mono text-sm leading-relaxed text-background md:p-8">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-background/25" />
                <span className="size-2.5 rounded-full bg-background/25" />
                <span className="size-2.5 rounded-full bg-background/25" />
              </div>
              <pre className="mt-5 overflow-x-auto whitespace-pre-wrap text-[13px]">{`#include <stdio.h>

int main(void) {
    printf("Hello, I'm Himanshi!\\n");
    return 0;
}`}</pre>
              <p className="mt-5 text-xs text-background/60">
                // first-year CSE · learning C, one program at a time
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-border py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">(a)</span>
            <h2 className="font-display text-4xl tracking-tight text-balance md:text-5xl">About Me</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <p className="max-w-[56ch] text-lg leading-relaxed text-foreground text-pretty">
              I'm a first-year B.Tech CSE (Core) student at JECRC University, Jaipur. Right now I'm
              learning the fundamentals of programming in C, exploring AI tools, and getting
              comfortable with basic web development and digital productivity workflows. I document
              what I learn and build small, honest projects along the way.
            </p>
            <div className="rounded-2xl bg-glass p-6 ring-1 ring-glass-ring backdrop-blur-md">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Focus areas
              </p>
              <ul className="mt-4 space-y-3 text-sm font-medium text-foreground">
                <li>C Programming fundamentals</li>
                <li>AI tools & prompt workflows</li>
                <li>Digital productivity & notes</li>
                <li>Basic web development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 border-t border-border py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">(b)</span>
            <h2 className="font-display text-4xl tracking-tight text-balance md:text-5xl">Education</h2>
          </div>
          <div className="mt-8 rounded-2xl bg-glass p-6 ring-1 ring-glass-ring backdrop-blur-md">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                B.Tech — Computer Science & Engineering (CSE Core)
              </h3>
              <span className="font-mono text-xs text-muted-foreground">2026 — Present</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">JECRC University, Jaipur · First year in progress</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 border-t border-border py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">(c)</span>
            <h2 className="font-display text-4xl tracking-tight text-balance md:text-5xl">Skills</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, i) => (
              <div
                key={skill.title}
                className="animate-rise rounded-2xl bg-glass p-5 ring-1 ring-glass-ring backdrop-blur-md transition-colors hover:bg-glass-strong"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary">{skill.tag}</p>
                <h3 className="mt-2 text-base font-semibold text-foreground">{skill.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{skill.description}</p>
              </div>
            ))}
            <div className="animate-rise grid place-items-center rounded-2xl bg-glass/40 p-5 text-center ring-1 ring-black/10 backdrop-blur-md">
              <p className="text-sm font-medium text-muted-foreground">More skills added as I learn them.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 border-t border-border py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">(d)</span>
            <h2 className="font-display text-4xl tracking-tight text-balance md:text-5xl">Projects</h2>
          </div>
          <p className="mt-3 max-w-[60ch] text-sm text-muted-foreground">
            A mix of what I'm currently learning and small project ideas — I only mark something as
            completed once it truly is.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ProjectCard
              status="Currently Learning"
              title="Student Records — C"
              description="Building my C fundamentals (arrays, functions, pointers) while planning a small console program to add and search student entries."
            >
              <div className="aspect-[4/3] bg-foreground p-5 font-mono text-[11px] leading-relaxed text-background/75">
                <p className="text-background">$ gcc student_records.c -o records</p>
                <p className="text-background">$ ./records</p>
                <p className="mt-2">1. Add student</p>
                <p>2. Search student</p>
                <p>3. Exit</p>
                <p className="mt-3 text-primary">// logic in progress</p>
              </div>
            </ProjectCard>

            <ProjectCard
              status="Completed"
              title="Personal Portfolio Website"
              description="This site — a responsive one-page portfolio I built to introduce myself, what I'm learning, and what I'm working on."
            >
              <div className="grid aspect-[4/3] place-items-center bg-secondary p-5">
                <div className="w-3/4 rounded-2xl bg-glass-strong p-4 ring-1 ring-black/5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">HC · Portfolio</p>
                  <p className="mt-2 font-display text-lg tracking-tight text-foreground">Himanshi Choudhary</p>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 rounded-full bg-foreground/10" />
                    <div className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
                    <div className="h-1.5 w-1/2 rounded-full bg-foreground/10" />
                  </div>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              status="Project Idea"
              title="Study Notes Hub"
              description="A simple HTML/CSS page I'd like to build to keep my semester notes, to-dos and links in one place."
            >
              <div className="grid aspect-[4/3] place-items-center bg-secondary p-5">
                <div className="w-3/4 rounded-2xl bg-glass-strong p-4 ring-1 ring-black/5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Semester notes</p>
                  <ul className="mt-3 space-y-2 text-xs font-medium text-foreground">
                    <li className="flex items-center gap-2">
                      <span className="size-3 rounded border border-primary bg-primary" />
                      C programming practice
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-3 rounded border border-foreground/20" />
                      Web development basics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-3 rounded border border-foreground/20" />
                      AI tools exploration
                    </li>
                  </ul>
                </div>
              </div>
            </ProjectCard>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section id="achievements" className="scroll-mt-24 border-t border-border py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">(e)</span>
            <h2 className="font-display text-4xl tracking-tight text-balance md:text-5xl">
              Certifications & Achievements
            </h2>
          </div>
          <div className="mt-8 grid place-items-center rounded-2xl border border-dashed border-border bg-glass/40 p-10 text-center backdrop-blur-md">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Coming soon</p>
              <p className="mx-auto mt-3 max-w-[48ch] text-sm leading-relaxed text-muted-foreground text-pretty">
                I'm keeping this space for genuine certificates and achievements only — I'll add
                each one here as I earn it.
              </p>
            </div>
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            More genuine certificates will be added as I complete them.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-border py-16">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">(f)</span>
            <h2 className="font-display text-4xl tracking-tight text-balance md:text-5xl">Contact</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-glass p-6 ring-1 ring-glass-ring backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Email</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block break-all text-lg font-semibold text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                {EMAIL}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">College email · JECRC University, Jaipur</p>
            </div>
            <div className="rounded-2xl bg-glass p-6 ring-1 ring-glass-ring backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Find me online</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background ring-1 ring-black/5 transition-colors hover:bg-foreground/85"
                >
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-glass-strong px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-black/5 transition-colors hover:bg-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-border bg-glass backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl tracking-tight text-foreground">Himanshi Choudhary</p>
            <p className="mt-1 text-sm text-muted-foreground">
              First-year B.Tech CSE (Core) · JECRC University, Jaipur
            </p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">© 2026 · Built while learning</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  status,
  title,
  description,
  children,
}: {
  status: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-[min(1vw,20px)] bg-glass ring-1 ring-glass-ring backdrop-blur-md">
      {children}
      <div className="p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary">{status}</p>
        <h3 className="mt-1 text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">{description}</p>
      </div>
    </article>
  );
}

const SKILLS = [
  {
    tag: "Core",
    title: "C Programming",
    description: "Loops, arrays, functions, and pointers — the language I'm currently building on.",
  },
  {
    tag: "Core",
    title: "Basic Web Development",
    description: "HTML and CSS basics, plus simple responsive layouts I'm still practicing.",
  },
  {
    tag: "Core",
    title: "AI Tools",
    description: "Using AI assistants and prompt workflows to learn faster and draft notes.",
  },
  {
    tag: "Soft",
    title: "Communication",
    description: "Explaining ideas clearly in class presentations and group work.",
  },
  {
    tag: "Soft",
    title: "Digital Productivity",
    description: "Organizing notes, tasks, and study material across tools.",
  },
];
