// ============================================================
// PROJECTS PAGE
// ============================================================
// TO ADD A NEW PROJECT:
//   Copy one object in the `projects` array below and fill in:
//     - title:       Project name
//     - description: Short summary (1–2 sentences)
//     - tags:        Array of tech/topic tags
//     - href:        GitHub or live demo URL (or "" to hide link)
//     - status:      "active" | "complete" | "wip"
// ============================================================

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  status: "active" | "complete" | "wip";
};

// ── ADD / EDIT YOUR PROJECTS HERE ───────────────────────────
const projects: Project[] = [
  {
    title: "Python Tools",
    description:
      "A series of tools designed with Python, intended to automate specific tasks. Projects include a SIEM Log Parser, File Integrity Monitor, IP Log Analyzer, and a Port Scanner.", 
    tags: ["Python", "Automation"],
    href: "https://github.com/r3men/python-tools",
    status: "wip",
  },
  {
    title: "CTF Writeups",
    description:
      "A repository dedicated to past CTF problems I have solved, designed for increased retention of prevalent topics in cybersecurity.",
    tags: ["Python", "Reverse Engineering", "Cryptography", "Web Security", "OSINT", "Binary Exploitation"],
    href: "https://github.com/r3men/ctf-writeups",
    status: "wip",
  },
  {
    title: "Home Cyber Lab",
    description:
      "A VirtualBox Lab designed to test and explore a multitude of vulnerabilities. This project has not been started yet, but it will continue to be worked on through the upcoming years.",
    tags: ["Linux"],
    href: "https://github.com/YOUR_USERNAME/pcap-analyzer",
    status: "active",
  },
  // ── Paste a new project object here ──
];
// ────────────────────────────────────────────────────────────

const statusConfig = {
  active:   { label: "ACTIVE",    color: "text-green-400 border-green-700 bg-green-950/50" },
  complete: { label: "COMPLETE",  color: "text-cyan-400  border-cyan-800  bg-cyan-950/50"  },
  wip:      { label: "WIP",       color: "text-yellow-400 border-yellow-800 bg-yellow-950/50" },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* ── Header ── */}
        <div className="fade-up fade-up-1 mb-14">
          <p className="font-mono text-green-700 text-xs tracking-widest uppercase mb-3">
            <span className="text-green-600">&gt; </span>ls ~/projects
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-green-400 glow mb-4">
            Projects
          </h1>
          <p className="text-green-200/60 text-sm max-w-xl leading-relaxed">
            Here are some of the projects I have made or am currently working on. I'm always open to feedback and comments. Hope you enjoy!
          </p>
        </div>

        {/* ── Project grid ── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const s = statusConfig[project.status];
            return (
              <article
                key={project.title}
                className={`fade-up fade-up-${Math.min(i + 2, 5)} card-glow flex flex-col gap-4 border border-green-900/60 rounded-lg p-6 bg-black/40 backdrop-blur-sm`}
              >
                {/* Status badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs border rounded px-2 py-0.5 ${s.color}`}
                  >
                    {s.label}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-mono text-base font-semibold text-green-300 leading-snug">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-green-200/60 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-green-600 bg-green-950/60 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-green-500 hover:text-green-300 border-b border-green-800 hover:border-green-500 w-fit transition-colors"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-24 font-mono text-green-700">
            <p>No projects yet. Add one to the array in this file!</p>
          </div>
        )}
      </div>
    </div>
  );
}