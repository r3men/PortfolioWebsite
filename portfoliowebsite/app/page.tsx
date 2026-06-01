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
  "Python", "Java", "C++", "TypeScript", "Bash", "Wireshark", "Next.js", "PyTorch",
];

// ── Edit your social / contact links here ───────────────────
const socials = [
  { label: "GitHub", href: "https://github.com/r3men", icon: "gh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raymond-zhang-273503390/", icon: "li" },
  { label: "picoCTF", href: "https://play.picoctf.org/users/r3men", icon: "ct" },
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
            Raymond Zhang
          </h1>
          <p className="font-mono text-lg md:text-xl text-green-600 tracking-wide mb-10">
            {/* ── Edit your title here ── */}
            Aspiring SOC Analyst &amp; CTF Competitor
          </p>
        </div>

        {/* ── Bio ── */}
        <div className="fade-up fade-up-2 max-w-2xl space-y-4 text-green-200/80 leading-relaxed text-base mb-14">
          {/* ── Edit these paragraphs to describe yourself ── */}
          <p>
            Welcome to my portfolio website! — I&apos;m <span className="text-green-400 font-semibold">Raymond Zhang</span>.
          </p>
          <p>
            I am a passionate, attentive online detective aspiring to become a SOC Analyst. I am interested in maintaining system structure, stability, and security through extensive log analysis. I have foundational knowledge of networks, cryptography, and ethical hacking with accompanying participation in hands-on labs.
          </p>
          <p>
            Additionally, I enjoy software development, building purposeful AI-assisted web applications using TypeScript and Next.js. As artificial intelligence becomes more prevalent in the workplace, I hope to leverage its capabilities to increase output and development efficiency. 
          </p>
          <p>
            Whether it be cybersecurity or software development, I am always open to new opportunities that give me a chance to develop professionally!
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
