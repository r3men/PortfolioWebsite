// ============================================================
// CONTACT PAGE
// ============================================================
// TO CUSTOMIZE:
//   1. Update the `contactMethods` array with your real links
//   2. Update the bio blurb at the top
//   3. Set your preferred contact to highlight: true
//   4. Update RESUME_URL with your actual resume link/file path
// ============================================================

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
  highlight: boolean;
};

// ── EDIT YOUR RESUME LINK HERE ───────────────────────────────
const RESUME_URL = "/resume.pdf"; // or an external link, e.g. "https://..."
const RESUME_LAST_UPDATED = "May 2025"; // update this whenever you upload a new version
// ────────────────────────────────────────────────────────────

// ── EDIT YOUR CONTACT METHODS HERE ──────────────────────────
const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "raymennoodles33@gmail.com",
    href: "mailto:raymennoodles33@gmail.com",
    description: "Best for professional inquiries and collaborations.",
    highlight: true,
  },
  {
    label: "GitHub",
    value: "github.com/r3men",
    href: "https://github.com/r3men",
    description: "Check out some of my other projects!",
    highlight: false,
  },
  {
    label: "LinkedIn",
    value: "Raymond Zhang",
    href: "https://www.linkedin.com/in/raymond-zhang-273503390/",
    description: "Connect with me professionally, and explore some of my work experience.",
    highlight: false,
  },
];
// ────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* ── Header ── */}
        <div className="fade-up fade-up-1 mb-14">
          <p className="font-mono text-green-700 text-xs tracking-widest uppercase mb-3">
            <span className="text-green-600">&gt; </span>ping Raymond Zhang
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-green-400 glow mb-4">
            Get in Touch
          </h1>
          <p className="text-green-200/60 text-sm max-w-xl leading-relaxed">
            I&apos;m always open to chatting about cybersecurity, CTFs, and geography. Feel free to contact me if you want to learn more about world cities, capitals, flags, or my personal favorite, GeoGuessr!
          </p>
        </div>

        {/* ── Contact cards ── */}
        <div className="fade-up fade-up-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {contactMethods.map((method) => (
            <ContactCard key={method.label} method={method} />
          ))}
        </div>

        {/* ── Resume section ── */}
        <div className="fade-up fade-up-3 mb-16">
          <p className="font-mono text-green-700 text-xs tracking-widest uppercase mb-4">
            <span className="text-green-600">&gt; </span>cat resume.pdf
          </p>
          <div className="border border-green-900/40 rounded-lg bg-black/40 backdrop-blur-sm overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-green-900/40 bg-green-950/20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-green-400 text-xs tracking-widest uppercase">
                  resume
                </span>
                <span className="font-mono text-green-700 text-xs">
                  last updated: {"May 2025"}
                </span>
              </div>
              <a
                href={"/Resume.pdf"}
                download
                className="font-mono text-xs text-green-600 hover:text-green-400 transition-colors border border-green-900/60 hover:border-green-700 rounded px-3 py-1"
              >
                <span>&#8595; download</span>
              </a>
            </div>

            {/* Inline PDF viewer */}
            <div className="w-full" style={{ height: "680px" }}>
              <iframe
                src={RESUME_URL}
                title="Resume"
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>

        {/* ── Terminal-style status block ── */}
        <div className="fade-up fade-up-4 border border-green-900/40 rounded-lg p-6 bg-black/40 font-mono text-sm max-w-lg">
          <p className="text-green-700 text-xs tracking-widest uppercase mb-4">
            system status
          </p>
          <div className="space-y-2">
            <StatusLine label="open to work" value="yes" ok />
            <StatusLine label="ctf active" value="yes" ok />
            <StatusLine label="response time" value="&lt; 48h" ok />
            <StatusLine label="location" value="East Hanover, NJ" ok={false} />
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Contact card component ───────────────────────────────────
function ContactCard({ method: m }: { method: ContactMethod }) {
  const inner = (
    <div
      className={`card-glow h-full flex flex-col gap-3 rounded-lg border p-5 bg-black/40 backdrop-blur-sm transition-all ${
        m.highlight
          ? "border-green-600/60 bg-green-950/20"
          : "border-green-900/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs tracking-widest uppercase ${
            m.highlight ? "text-green-400" : "text-green-600"
          }`}
        >
          {m.label}
          {m.highlight && (
            <span className="ml-2 text-green-500 normal-case tracking-normal">
              &#8592; preferred
            </span>
          )}
        </span>
      </div>
      <p
        className={`font-mono text-sm break-all ${
          m.highlight ? "text-green-300" : "text-green-500"
        }`}
      >
        {m.value}
      </p>
      <p className="text-green-200/50 text-xs leading-relaxed flex-1">
        {m.description}
      </p>
      {m.href && (
        <span className="font-mono text-xs text-green-600 group-hover:text-green-400 transition-colors w-fit border-b border-green-800">
          Open &#8599;
        </span>
      )}
    </div>
  );

  if (m.href) {
    return (
      <a
        href={m.href}
        target={m.href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {inner}
      </a>
    );
  }
  return <div className="h-full">{inner}</div>;
}

// ── Status line component ────────────────────────────────────
function StatusLine({
  label,
  value,
  ok,
}: {
  label: string;
  value: string;
  ok: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-green-700 text-xs">{label}</span>
      <div className="flex-1 border-b border-green-900/40 border-dashed" />
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-green-400" : "bg-yellow-400"}`}
        />
        <span
          className={`text-xs font-mono ${ok ? "text-green-400" : "text-yellow-400"}`}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
}