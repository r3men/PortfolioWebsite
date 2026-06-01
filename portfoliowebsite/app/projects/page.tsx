// ============================================================
// PROJECTS PAGE
// ============================================================
// TO ADD A NEW PROJECT:
//   Copy one object in the `projects` array below and fill in:
//     - title:       Project name
//     - description: Short summary (1–2 sentences)
//     - tags:        Array of tech/topic tags
//     - href:        GitHub URL (or "" to hide)
//     - live:        Live website URL (or "" to hide)
//     - screenshot:  Path to image in /public (or "" to hide)
//     - status:      "active" | "complete" | "wip"
// ============================================================

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  live: string;
  screenshot: string;
  status: "active" | "complete" | "wip";
};

// ── ADD / EDIT YOUR PROJECTS HERE ───────────────────────────
const projects: Project[] = [
  {
    title: "Python Tools",
    description:
      "A series of tools designed with Python, intended to improve user quality-of-life. Tools include a decoding utility, an IOC extractor, and much more.",
    tags: ["Python", "Quality of Life"],
    href: "https://github.com/r3men/python-tools",
    live: "",
    screenshot: "/python.png",
    status: "wip",
  },
  {
    title: "CTF Writeups",
    description:
      "A repository dedicated to past CTF problems I have solved, designed for increased retention of prevalent topics in cybersecurity.",
    tags: ["Python", "Exploration", "Reverse Engineering", "Cryptography", "Web Security", "OSINT", "Binary Exploitation"],
    href: "https://github.com/r3men/ctf-writeups",
    live: "",
    screenshot: "/ctf.png",
    status: "wip",
  },
  {
    title: "Home Cyber Lab",
    description:
      "A VirtualBox Lab designed to test and explore a multitude of vulnerabilities, increasing individual understanding of attack vectors, common threats, and operating systems.",
    tags: ["Linux, Exploration", "OS"],
    href: "https://github.com/r3men/home-cyber-lab",
    live: "",
    screenshot: "/kali.png",
    status: "wip",
  },
  {
    title: "MCST Bus App",
    description:
      "A web application designed to ease students trying to find their buses at dismissal at the Morris County School of Technology. School administrators are able to assign buses through a designated admin panel, while students can view bus assignments through the client panel.",
    tags: ["TypeScript", "Tailwind", "Next.js", "Quality of Life"],
    href: "https://github.com/r3men/MCSTBusApp",
    live: "https://mcstbusapp.vercel.app/",
    screenshot: "/mcstbusapp.png",
    status: "complete",
  },
  {
    title: "GeoGuessr: Human vs. AI",
    description:
      "A deep learning image classifier built with PyTorch that predicts which of four countries (United States, Japan, Brazil, and Russia) an image was taken in. Model is served via a FastAPI endpoint that returns model predictions and a saliency map allowing users to visualize noteworthy image regions.",
    tags: ["Machine Learning", "PyTorch"],
    href: "https://github.com/r3men/geoguessr-game",
    live: "https://geoguessraivshuman.vercel.app/",
    screenshot: "/ai.png",
    status: "complete",
  },
  {
    title: "InfoSTEM",
    description:
      "A web application designed to recommend STEM careers to high school students based on a survey utilizing a Likert scale. Application allows users to access a corresponding pathway based on their recommended career.",
    tags: ["TypeScript", "Tailwind", "Next.js"],
    href: "https://github.com/amongsusman/InfoSTEM",
    live: "https://info-stem.vercel.app/",
    screenshot: "/stem.png",
    status: "complete",
  },
  {
    title: "Geo-Tracker Simulator",
    description:
      "A terminal-based simulator game for geography enthusiasts and cybersecurity lovers. Built using OOP principles, loops, arrays, methods, etc.",
    tags: ["Java", "OOP"],
    href: "https://github.com/r3men/JavaPortfolioProject",
    live: "",
    screenshot: "/java.png",
    status: "complete",
  },
];
// ────────────────────────────────────────────────────────────

const statusConfig = {
  active:   { label: "ACTIVE",   color: "text-green-400 border-green-700 bg-green-950/50" },
  complete: { label: "COMPLETE", color: "text-cyan-400 border-cyan-800 bg-cyan-950/50" },
  wip:      { label: "WIP",      color: "text-yellow-400 border-yellow-800 bg-yellow-950/50" },
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
            Here are some of the projects I have made or am currently working on. I&apos;m always open to feedback and comments. Hope you enjoy!
          </p>
        </div>

        {/* ── Project grid ── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const s = statusConfig[project.status];
            return (
              <article
                key={project.title}
                className={`fade-up fade-up-${Math.min(i + 2, 5)} card-glow flex flex-col border border-green-900/60 rounded-lg bg-black/40 backdrop-blur-sm overflow-hidden`}
              >
                {/* Screenshot */}
                {project.screenshot ? (
                  <div className="w-full bg-green-950/20 border-b border-green-900/40 overflow-hidden" style={{ height: "180px" }}>
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-full bg-green-950/10 border-b border-green-900/40 flex items-center justify-center" style={{ height: "120px" }}>
                    <span className="font-mono text-green-900 text-xs tracking-widest">no preview</span>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  {/* Status + title row */}
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs border rounded px-2 py-0.5 flex-shrink-0 ${s.color}`}>
                      {s.label}
                    </span>
                    <h2 className="font-mono text-sm font-semibold text-green-300 leading-snug">
                      {project.title}
                    </h2>
                  </div>

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

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-1">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-green-500 hover:text-green-300 border-b border-green-800 hover:border-green-500 transition-colors"
                      >
                        View GitHub &#8599;
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-cyan-500 hover:text-cyan-300 border-b border-cyan-800 hover:border-cyan-500 transition-colors"
                      >
                        Live Site &#8599;
                      </a>
                    )}
                  </div>
                </div>
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