"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/ctf", label: "CTF" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-900/40 bg-black/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-mono text-green-400 text-sm tracking-widest uppercase hover:text-green-300 transition-colors"
        >
          <span className="text-green-600">&gt; </span>YOUR_NAME
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded transition-all duration-200 ${
                    active
                      ? "text-black bg-green-400"
                      : "text-green-500 hover:text-green-300 hover:bg-green-950"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}