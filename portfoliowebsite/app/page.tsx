// ============================================================
// HOME PAGE — About Me
// ============================================================
// TO CUSTOMIZE:
//   1. Replace YOUR_NAME, YOUR_TITLE, and the bio paragraphs
//   2. Update the skills array
//   3. Replace the social links (GitHub, LinkedIn, etc.)
// ============================================================

import Link from "next/link";

// ── Edit your skills here ────────────────────────────────────
const skills = [
  "Python", "C / C++", "Bash", "JavaScript",
  "Reverse Engineering", "Binary Exploitation", "Web Security",
  "Cryptography", "Forensics", "Network Analysis",
  "Linux", "Docker", "Git",
];

// ── Edit your social / contact links here ───────────────────
const socials = [
  { label: "GitHub", href: "https://github.com/YOUR_USERNAME", icon: "gh" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME", icon: "li" },
  { label: "CTFtime", href: "https://ctftime.org/user/YOUR_ID", icon: "ct" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen grid-bg">
      {/* ── Radial glow behind hero ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-96 w-96 rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36">

        {/* ── Hero block ── */}
        <div className="fade-up fade-up-1">
          <p className="font-mono text-green-500 text-sm tracking-widest uppercase mb-4">
            <span className="text-green-700">&gt; </span>whoami
          </p>
          <h1 className="font-mono text-5xl md:text-7xl font-bold text-green-400 glow leading-none mb-4 cursor">
            YOUR_NAME
          </h1>
          <p className="font-mono text-lg md:text-xl text-green-600 tracking-wide mb-10">
            {/* ── Edit your title here ── */}
            Security Researcher &amp; CTF Player
          </p>
        </div>

        {/* ── Bio ── */}
        <div className="fade-up fade-up-2 max-w-2xl space-y-4 text-green-200/80 leading-relaxed text-base mb-14">
          {/* ── Edit these paragraphs to describe yourself ── */}
          <p>
            Hey — I&apos;m <span className="text-green-400 font-semibold">YOUR_NAME</span>, a
            security-focused developer who loves breaking things apart to understand how they work.
            I compete in CTF competitions and am passionate about low-level systems, cryptography,
            and offensive security.
          </p>
          <p>
            When I&apos;m not staring at a disassembler, I build tools, write scripts, and explore
            everything at the intersection of software and security.
          </p>
        </div>

        {/* ── Skills ── */}
        <div className="fade-up fade-up-3 mb-14">
          <p className="font-mono text-green-700 text-xs tracking-widest uppercase mb-4">
            <span className="text-green-600">&gt; </span>skills --list
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs text-green-400 border border-green-800 rounded px-3 py-1 bg-green-950/40 hover:border-green-500 hover:bg-green-950 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA buttons ── */}
        <div className="fade-up fade-up-4 flex flex-wrap gap-4 mb-14">
          <Link
            href="/projects"
            className="font-mono text-sm text-black bg-green-400 hover:bg-green-300 px-6 py-3 rounded transition-colors tracking-wide"
          >
            View Projects →
          </Link>
          <Link
            href="/ctf"
            className="font-mono text-sm text-green-400 border border-green-700 hover:border-green-400 hover:bg-green-950 px-6 py-3 rounded transition-colors tracking-wide"
          >
            CTF Rankings →
          </Link>
          <Link
            href="/contact"
            className="font-mono text-sm text-green-600 hover:text-green-400 px-6 py-3 rounded transition-colors tracking-wide underline underline-offset-4"
          >
            Get in touch
          </Link>
        </div>

        {/* ── Socials ── */}
        <div className="fade-up fade-up-5">
          <p className="font-mono text-green-700 text-xs tracking-widest uppercase mb-3">
            <span className="text-green-600">&gt; </span>links
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-green-500 hover:text-green-300 border-b border-green-800 hover:border-green-500 pb-0.5 transition-colors"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}