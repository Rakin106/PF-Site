import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  MapPin,
  Calendar,
  Code2,
  Download,
} from "lucide-react";

// ==============================
// 🔧 DATA FROM PDF RESUME
// ==============================
const DATA = {
  name: "Rakin Bhuiyan",
  role: "Computer Engineering Student | AI & Machine Learning Enthusiast",
  location: "Turin, Piedmont, Italy",
  email: "rakin1234bhuiyan@gmail.com",
  headline:
    "Computer Engineering student at Politecnico di Torino, passionate about AI, machine learning, and emerging technologies.",
  about:
    "I am a Computer Engineering student at Politecnico di Torino, passionate about artificial intelligence, machine learning, and emerging technologies. I am constantly learning, adapting, and expanding my skill set to contribute to AI-related projects and innovative solutions. My interests include AI, data science, machine learning, computer vision, and intelligent systems. I enjoy working on challenging problems, collaborating in diverse teams, and exploring how technology can make a positive impact.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhuiyan-rakin/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/Rakin106", icon: Github },
    { label: "Email", href: "mailto:rakin1234bhuiyan@gmail.com", icon: Mail },
  ],
  skills: [
    "Data Science",
    "Predictive Modeling",
    "Cloud Computing",
    "AI",
    "Machine Learning",
    "Computer Vision",
    "Intelligent Systems"
  ],
  projects: [
    {
      title: "Cloud Computing Fundamentals (AWS)",
      description:
        "Hands-on exploration of cloud infrastructure and services using AWS.",
      highlights: ["AWS", "Infrastructure"],
      tech: ["AWS", "Cloud"],
      links: [],
    },
    {
      title: "British Airways Data Science Job Simulation",
      description:
        "Analyzed customer data and built predictive models during a professional simulation.",
      highlights: ["Data Analysis", "Predictive Modeling"],
      tech: ["Python", "Pandas", "Scikit-learn"],
      links: [],
    },
    {
      title: "Machine Learning Explainability",
      description:
        "Project focused on improving explainability of ML models using SHAP and interpretability tools.",
      highlights: ["Explainability", "AI"],
      tech: ["Python", "SHAP"],
      links: [],
    },
  ],
  experience: [
    {
      role: "Student",
      company: "Politecnico di Torino",
      period: "Sep 2022 – Present",
      location: "Turin, Italy",
      bullets: [
        "Pursuing Bachelor's in Computer Engineering with focus on AI, ML, and Data Science.",
        "Engaged in academic projects exploring AI applications and emerging technologies.",
      ],
    },
  ],
  education: [
    {
      school: "Politecnico di Torino",
      degree: "Bachelor's degree in Computer Engineering",
      period: "September 2022 – September 2026",
    },
    {
      school: "Government Dohar-Nawabganj College",
      degree: "Higher Secondary School Certificate, Science",
      period: "2018 – 2020",
    },
  ],
  resumeUrl: "#", // add a hosted resume link when ready
};

// ===============
// 🧠 THEME HOOKS
// ===============
function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

// ===============
// 🔩 UTILITIES
// ===============
const container = "max-w-6xl mx-auto px-6";
const sectionPad = "py-20 sm:py-24";
const chip =
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm/6 font-medium border-zinc-300/60 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/50 backdrop-blur";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function IconLink({ href, children, ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="rounded-xl p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3">
      {kicker && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <a href="#home" className="font-semibold tracking-tight">
          <span className="text-zinc-900 dark:text-white">{DATA.name}</span>
          <span className="sr-only">Home</span>
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950 sm:hidden">
          <div className={`${container} py-4`}> 
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setOpen(false);
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} Toggle theme
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 600);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className={`${sectionPad}`}>
      <div className={`${container} grid items-center gap-12 md:grid-cols-2`}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <span className={chip}>
            <Code2 size={16} />
            {DATA.role}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {DATA.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{DATA.headline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1"><MapPin size={16} /> {DATA.location}</span>
            <span className="inline-flex items-center gap-1"><Calendar size={16} /> Available for opportunities</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
            >
              See my work <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
            </a>
            {DATA.resumeUrl !== "#" && (
              <a
                href={DATA.resumeUrl}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-4 py-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Resume
              </a>
            )}
            <div className="ml-2 inline-flex items-center gap-2">
              {DATA.socials.map((s) => (
                <IconLink key={s.label} href={s.href} ariaLabel={s.label}>
                  {React.createElement(s.icon, { size: 18 })}
                </IconLink>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative isolate"
        >
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-zinc-200 via-zinc-100 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black p-1 shadow-inner">
            <div className="grid h-full place-items-center rounded-2xl bg-white/70 p-10 text-center dark:bg-zinc-900/60">
              <div className="text-7xl font-black tracking-tight text-zinc-800 dark:text-white">
                <span className="select-none">{"<"}dev{">"}</span>
                <span className="ml-1 text-zinc-400">{cursor ? "|" : "\\u00A0"}</span>
              </div>
              <p className="mt-4 max-w-sm text-zinc-600 dark:text-zinc-400">
                Minimal, fast, and elegant. Built with React, Tailwind, and framer‑motion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className={`${sectionPad} border-t border-zinc-200/60 dark:border-zinc-800/60`}>
      <div className={container}>
        <SectionTitle
          kicker="About"
          title="A bit about me"
          subtitle="Human‑friendly engineer with a product mindset and a bias to ship."
        />
        <div className="grid gap-10 md:grid-cols-2">
          <motion.p
            className="text-zinc-700 dark:text-zinc-300"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
          >
            {DATA.about}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="grid grid-cols-2 gap-3"
          >
            {DATA.skills.map((s) => (
              <span key={s} className="rounded-xl border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-800">
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className={`${sectionPad} border-t border-zinc-200/60 dark:border-zinc-800/60`}>
      <div className={container}>
        <SectionTitle
          kicker="Projects"
          title="Things I'm proud of"
          subtitle="A selection of study projects, simulations, and explorations."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="inline-flex gap-1 text-xs text-zinc-500">
                  {p.highlights?.map((h) => (
                    <span key={h} className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
                      {h}
                    </span>
                  ))}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 dark:border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {p.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-100"
                  >
                    <ExternalLink size={16} /> {l.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className={`${sectionPad} border-t border-zinc-200/60 dark:border-zinc-800/60`}>
      <div className={container}>
        <SectionTitle kicker="Experience" title="Where I've worked / studied" />
        <div className="space-y-6">
          {DATA.experience.map((e) => (
            <motion.div
              key={e.company + e.period}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{e.role} · {e.company}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.location}</p>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className={`${sectionPad} border-t border-zinc-200/60 dark:border-zinc-800/60`}>
      <div className={container}>
        <SectionTitle kicker="Education" title="What I've studied" />
        <div className="grid gap-6 sm:grid-cols-2">
          {DATA.education.map((ed) => (
            <motion.div
              key={ed.school}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="font-semibold">{ed.school}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{ed.degree}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{ed.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={`${sectionPad} border-t border-zinc-200/60 dark:border-zinc-800/60`}>
      <div className={container}>
        <SectionTitle
          kicker="Contact"
          title="Let's build something"
          subtitle="My inbox is always open. If you have a question or just want to say hi, I'll try my best to get back to you!"
        />
        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            action={`mailto:${DATA.email}`}
            method="post"
            encType="text/plain"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <label className="mb-4 block text-sm font-medium">Your name
              <input className="mt-1 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700" name="name" required />
            </label>
            <label className="mb-4 block text-sm font-medium">Email
              <input type="email" className="mt-1 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700" name="email" required />
            </label>
            <label className="mb-4 block text-sm font-medium">Message
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700" name="message" required />
            </label>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-white transition hover:opacity-90 dark:bg:white dark:text-zinc-900">
              Send <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Tip: For a proper form backend, swap this mailto with Formspree, Basin, or your API.
            </p>
          </motion.form>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="font-semibold">Elsewhere</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Prefer email? <a className="underline" href={`mailto:${DATA.email}`}>{DATA.email}</a>
            </p>
            <div className="mt-4 flex items-center gap-3">
              {DATA.socials.map((s) => (
                <a key={s.label} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800" href={s.href} target="_blank" rel="noreferrer">
                  {React.createElement(s.icon, { size: 16 })} {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200/60 py-10 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
      <div className={`${container} flex flex-col items-center justify-between gap-3 sm:flex-row`}>
        <p>© {year} {DATA.name}. All rights reserved.</p>
        <div className="flex items-center gap-2">
          {DATA.socials.map((s) => (
            <IconLink key={s.label} href={s.href} ariaLabel={s.label}>
              {React.createElement(s.icon, { size: 16 })}
            </IconLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // Add smooth scroll behavior
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  // Mount dark by default (avoids flash)
  const { theme } = useTheme();
  useMemo(() => theme, [theme]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 dark:from-black dark:to-zinc-950 dark:text-zinc-50">
      <Nav />
      <Hero />
      <About />
      <section id="skills" className="sr-only" aria-hidden>skills anchor</section>
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
