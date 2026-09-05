import Link from "next/link";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#2F4454] px-6 pt-20 pb-10">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Pre-footer CTA banner */}
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Build products that save you time{" "}
            <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
              — no surprises along the way
            </span>
          </h2>
          <Link
            href="/contact"
            className="rounded-full bg-[#DA7B93] px-8 py-3 font-semibold text-[#1C3334] transition hover:bg-[#e491a6]"
          >
            Get started
          </Link>
          <p className="text-sm text-white/40">15 min intro call</p>
        </div>

        {/* Main footer content */}
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Some<span className="text-[#DA7B93]">Teck</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              SomeTeck combines technical craft and problem-solving to build
              digital products that support the business, create structure
              and win back time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/70">Navigate</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/70">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <a href="mailto:hello@someteck.dev" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                hello@someteck.dev
              </a>
              <a
                href="https://www.linkedin.com/company/someteck/"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 SomeTeck. All rights reserved.</p>
          <p>Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
