import { ArrowRight } from "lucide-react";
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          Some<span className="text-violet-400">Teck</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#home" className="text-white">Home</a>
          <Link href="/about">About</Link>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Premium web solutions for modern businesses
        </div>

        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          We build{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
            digital experiences
          </span>{" "}
          that grow with your business
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          SomeTeck is a boutique digital agency focused on frontend and
          fullstack development. We create fast, modern and high-converting
          websites and web applications.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Start your project
            <ArrowRight size={18} />
          </a>

          <a
            href="#portfolio"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View our work
          </a>
        </div>

        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "2+", label: "Years experience" },
    { value: "50+", label: "Projects delivered" },
    { value: "100%", label: "Satisfied clients" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-bold text-violet-400">{stat.value}</p>
          <p className="mt-2 text-sm text-white/50">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}