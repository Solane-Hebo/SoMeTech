"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reliable mobile detection via JS — bypasses any Tailwind JIT issues
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open && isMobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, isMobile]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-[#050816]/80 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Some<span className="text-violet-400">Teck</span>
        </Link>

        {/* Desktop Nav — JS-controlled visibility */}
        {!isMobile && (
          <div className="flex items-center gap-8 text-sm">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition-colors duration-200
                    after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full
                    after:origin-left after:scale-x-0 after:bg-violet-400
                    after:transition-transform after:duration-200
                    hover:text-white hover:after:scale-x-100
                    ${isActive ? "text-white after:scale-x-100" : "text-white/60"}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:scale-95"
          >
            Get Started
          </Link>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`absolute left-0 top-full w-full border-t border-white/10 bg-[#050816] backdrop-blur-md transition-all duration-300 ease-in-out ${
            open
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-2"
          }`}
          aria-hidden={!open}
        >
          <div className="flex flex-col px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-white/5 py-3.5 text-sm font-medium transition-colors duration-150 last:border-none hover:text-white ${
                    isActive ? "text-violet-400" : "text-white/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="mt-5">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
