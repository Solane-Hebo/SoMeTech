import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Technologies />
      <Testimonials />
    </main>
  );
}


function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Some<span className="text-violet-400">Tech</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Get started
        </Link>
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Start your project
            <ArrowRight size={18} />
          </Link>

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


const technologies = [
  { name: "React",       color: "text-blue-400",   icon: "⚛️" },
  { name: "Next.js",     color: "text-white",       icon: "▲" },
  { name: "TypeScript",  color: "text-blue-500",    icon: "TS" },
  { name: "Tailwind",    color: "text-cyan-400",    icon: "🌊" },
  { name: "Node.js",     color: "text-green-400",   icon: "🟢" },
  { name: "MongoDB",     color: "text-green-500",   icon: "🍃" },
  { name: "PostgreSQL",  color: "text-blue-300",    icon: "🐘" },
  { name: "Figma",       color: "text-pink-400",    icon: "🎨" },
  { name: "C#",     color: "text-purple-400", icon: "🟣" },
  { name: "DevOps", color: "text-blue-400",   icon: "⚙️" },
  { name: "GitHub", color: "text-white",      icon: "🐙" },
  { name: "ASP.NET",color: "text-violet-400", icon: "🔷" },
];

function Technologies() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Our Tech Stack
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Technologies we{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              master
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50 text-lg">
            We work with modern, battle-tested tools to deliver fast and
            scalable solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-violet-500/30 hover:bg-white/[0.06]"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className={`text-sm font-semibold ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const testimonials = [
  {
    name: "Brook Teshome",
    role: "CEO, Brook Skin Care",
    text: "SomeTeck delivered our platform ahead of schedule and exceeded every expectation. The code quality and attention to detail was outstanding.",
    rating: 5,
    initials: "EL",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    name: "Sara Johansson",
    role: "Founder, GreenLeaf Studio",
    text: "Working with SomeTeck was a game changer for our business. They understood our vision immediately and built exactly what we needed.",
    rating: 5,
    initials: "SJ",
    color: "bg-violet-500/20 text-violet-400",
  },
  {
    name: "Liya Kbede",
    role: "CTO, FinFlow",
    text: "Incredibly professional team. They handled complex fullstack requirements with ease and were always available for questions.",
    rating: 5,
    initials: "MA",
    color: "bg-pink-500/20 text-pink-400",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Testimonials
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            What our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50 text-lg">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition hover:border-violet-500/30"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-violet-400 text-violet-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Start your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
