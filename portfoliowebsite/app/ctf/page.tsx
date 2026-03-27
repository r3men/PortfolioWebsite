// ============================================================
// CTF RANKINGS PAGE
// ============================================================
// TO ADD A NEW CTF RESULT:
//   Copy one object in the `ctfResults` array below and fill in:
//     - competition:  Name of the CTF competition
//     - team:         Your team name
//     - placement:    e.g. "12th / 500"
//     - score:        Points scored (number, or null to hide)
//     - date:         "Month YYYY"
//     - href:         CTFtime event link (or "" to hide)
//     - highlight:    true = show gold accent (for top placements)
// ============================================================

type CTFResult = {
  competition: string;
  team: string;
  placement: string;
  score: number | null;
  date: string;
  href: string;
  highlight: boolean;
};

// ── ADD / EDIT YOUR CTF RESULTS HERE ────────────────────────
const ctfResults: CTFResult[] = [
  {
    competition: "picoCTF 2024",
    team: "Team Name",
    placement: "1st / 10,000",
    score: 9850,
    date: "March 2024",
    href: "https://ctftime.org/event/XXXXX",
    highlight: true,
  },
  {
    competition: "UIUCTF 2024",
    team: "Team Name",
    placement: "34th / 800",
    score: 3200,
    date: "July 2024",
    href: "https://ctftime.org/event/XXXXX",
    highlight: false,
  },
  {
    competition: "HTB Cyber Apocalypse 2024",
    team: "Team Name",
    placement: "78th / 5,000",
    score: 14500,
    date: "March 2024",
    href: "https://ctftime.org/event/XXXXX",
    highlight: false,
  },
  {
    competition: "CSAW CTF 2023",
    team: "Team Name",
    placement: "12th / 1,200",
    score: 4875,
    date: "September 2023",
    href: "https://ctftime.org/event/XXXXX",
    highlight: true,
  },
  // ── Paste a new result object here ──
];
// ────────────────────────────────────────────────────────────

export default function CTFPage() {
  const highlights = ctfResults.filter((r) => r.highlight);
  const rest = ctfResults.filter((r) => !r.highlight);

  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* ── Header ── */}
        <div className="fade-up fade-up-1 mb-14">
          <p className="font-mono text-green-700 text-xs tracking-widest uppercase mb-3">
            <span className="text-green-600">&gt; </span>cat ~/ctf/rankings.txt
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-green-400 glow mb-4">
            CTF Rankings
          </h1>
          <p className="text-green-200/60 text-sm max-w-xl leading-relaxed">
            Capture the Flag competition results. Add results by editing the{" "}
            <code className="text-green-500 font-mono text-xs bg-green-950 px-1.5 py-0.5 rounded">
              ctfResults
            </code>{" "}
            array in{" "}
            <code className="text-green-500 font-mono text-xs bg-green-950 px-1.5 py-0.5 rounded">
              app/ctf/page.tsx
            </code>.
          </p>
        </div>

        {/* ── Top placements ── */}
        {highlights.length > 0 && (
          <div className="fade-up fade-up-2 mb-10">
            <p className="font-mono text-xs text-green-700 tracking-widest uppercase mb-4">
              ★ top placements
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((r) => (
                <CtfCard key={r.competition + r.date} result={r} featured />
              ))}
            </div>
          </div>
        )}

        {/* ── All results ── */}
        <div className="fade-up fade-up-3">
          {highlights.length > 0 && (
            <p className="font-mono text-xs text-green-700 tracking-widest uppercase mb-4">
              all results
            </p>
          )}
          <div className="border border-green-900/40 rounded-lg overflow-hidden">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 bg-green-950/30 font-mono text-xs text-green-600 tracking-widest uppercase border-b border-green-900/40">
              <span>Competition</span>
              <span>Team</span>
              <span>Placement</span>
              <span>Score</span>
              <span>Date</span>
            </div>
            {/* Rows */}
            {ctfResults.map((r, i) => (
              <div
                key={r.competition + r.date}
                className={`grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-2 sm:gap-4 px-6 py-4 font-mono text-sm border-b border-green-900/20 last:border-b-0 transition-colors hover:bg-green-950/20 ${
                  r.highlight ? "border-l-2 border-l-yellow-500/60" : ""
                }`}
              >
                {/* Competition */}
                <div className="flex items-center gap-2">
                  {r.highlight && (
                    <span className="text-yellow-500 text-xs">★</span>
                  )}
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:text-green-100 transition-colors"
                    >
                      {r.competition} ↗
                    </a>
                  ) : (
                    <span className="text-green-300">{r.competition}</span>
                  )}
                </div>
                {/* Team */}
                <span className="text-green-500 sm:block">
                  <span className="sm:hidden text-green-700 mr-1">team:</span>
                  {r.team}
                </span>
                {/* Placement */}
                <span
                  className={r.highlight ? "text-yellow-400 font-semibold" : "text-green-400"}
                >
                  <span className="sm:hidden text-green-700 mr-1">rank:</span>
                  {r.placement}
                </span>
                {/* Score */}
                <span className="text-green-600">
                  <span className="sm:hidden text-green-700 mr-1">pts:</span>
                  {r.score !== null ? r.score.toLocaleString() : "—"}
                </span>
                {/* Date */}
                <span className="text-green-700 text-xs">{r.date}</span>
              </div>
            ))}

            {/* Empty state */}
            {ctfResults.length === 0 && (
              <div className="px-6 py-16 text-center font-mono text-green-700 text-sm">
                No results yet. Add one to the ctfResults array in this file!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card component for featured placements ───────────────────
function CtfCard({
  result: r,
  featured,
}: {
  result: CTFResult;
  featured?: boolean;
}) {
  return (
    <div
      className={`card-glow rounded-lg border p-5 bg-black/40 backdrop-blur-sm ${
        featured
          ? "border-yellow-800/60 hover:border-yellow-500"
          : "border-green-900/60"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-mono text-sm text-green-300 font-semibold leading-snug">
          {r.href ? (
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-100 transition-colors"
            >
              {r.competition} ↗
            </a>
          ) : (
            r.competition
          )}
        </h3>
        {featured && (
          <span className="text-yellow-500 text-sm shrink-0">★</span>
        )}
      </div>
      <p className="font-mono text-2xl font-bold text-yellow-400 mb-1">
        {r.placement}
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-green-600 mt-2">
        <span>{r.team}</span>
        {r.score !== null && <span>{r.score.toLocaleString()} pts</span>}
        <span>{r.date}</span>
      </div>
    </div>
  );
}