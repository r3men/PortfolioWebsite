"use client";

import { useState } from "react";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
  highlight: boolean;
};

const RESUME_URL = "/Resume.pdf";
const RESUME_LAST_UPDATED = "May 2025";

const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "raymondzhangwork@gmail.com",
    href: "mailto:raymondzhangwork@gmail.com",
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

export default function ContactPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-5xl mx-auto px-6 py-20">

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
                <span className="font-mono text-green-400 text-xs tracking-widest uppercase">resume</span>
                <span className="font-mono text-green-700 text-xs">last updated: {RESUME_LAST_UPDATED}</span>
              </div>
              <a
                href={RESUME_URL}
                download
                className="font-mono text-xs text-green-600 hover:text-green-400 transition-colors border border-green-900/60 hover:border-green-700 rounded px-3 py-1"
              >
                <span>&#8595; download</span>
              </a>
            </div>

            {/* Paper-style preview card */}
            <div className="p-6 flex justify-center bg-black/20">
              <div
                onClick={() => setLightboxOpen(true)}
                className="group relative cursor-pointer w-full max-w-lg"
              >
                {/* Shadow layers for paper stack effect */}
                <div className="absolute inset-0 translate-y-2 translate-x-1 bg-gray-300/10 rounded" />
                <div className="absolute inset-0 translate-y-1 bg-gray-200/10 rounded" />

                {/* Main paper card */}
                <div className="relative bg-white rounded shadow-2xl overflow-hidden" style={{ height: "520px" }}>
                  <iframe
                    src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume Preview"
                    className="w-full h-full pointer-events-none"
                    style={{ border: "none" }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded">
                    <span className="font-mono text-xs text-white border border-white/60 rounded px-4 py-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      click to expand
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── System status ── */}
        <div className="fade-up fade-up-4 border border-green-900/40 rounded-lg bg-black/40 font-mono text-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-green-900/40 bg-green-950/20">
            <p className="text-green-700 text-xs tracking-widest uppercase">system status</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-green-900/30">
            <StatusTile label="open to work" value="yes" ok />
            <StatusTile label="ctf active" value="yes" ok />
            <StatusTile label="response time" value="&lt; 48h" ok />
            <StatusTile label="location" value="East Hanover, NJ" ok={false} />
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl bg-white"
            style={{ height: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50">
              <span className="font-mono text-gray-500 text-xs tracking-widest uppercase">resume.pdf</span>
              <div className="flex items-center gap-3">
                <a
                  href={RESUME_URL}
                  download
                  className="font-mono text-xs text-green-700 hover:text-green-500 transition-colors border border-green-200 hover:border-green-400 rounded px-3 py-1"
                >
                  <span>&#8595; download</span>
                </a>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="font-mono text-xs text-gray-400 hover:text-gray-700 transition-colors border border-gray-200 hover:border-gray-400 rounded px-3 py-1"
                >
                  &#x2715; close
                </button>
              </div>
            </div>
            <iframe
              src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              className="w-full"
              style={{ height: "calc(90vh - 48px)", border: "none" }}
            />
          </div>
        </div>
      )}

    </div>
  );
}

function ContactCard({ method: m }: { method: ContactMethod }) {
  const inner = (
    <div
      className={`card-glow h-full flex flex-col gap-3 rounded-lg border p-5 bg-black/40 backdrop-blur-sm transition-all ${
        m.highlight ? "border-green-600/60 bg-green-950/20" : "border-green-900/40"
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
            <span className="ml-2 text-green-500 normal-case tracking-normal">&#8592; preferred</span>
          )}
        </span>
      </div>
      <p className={`font-mono text-sm break-all ${m.highlight ? "text-green-300" : "text-green-500"}`}>
        {m.value}
      </p>
      <p className="text-green-200/50 text-xs leading-relaxed flex-1">{m.description}</p>
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

function StatusTile({
  label,
  value,
  ok,
}: {
  label: string;
  value: string;
  ok: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 px-5 py-4">
      <span className="text-green-700 text-xs tracking-widest uppercase">{label}</span>
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${ok ? "bg-green-400" : "bg-yellow-400"}`} />
        <span
          className={`text-sm font-mono ${ok ? "text-green-400" : "text-yellow-400"}`}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
}
