import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_45%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            About SomeTeck
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            We are two{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              passionate developers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            With solid experience in both Frontend and Fullstack development, we help
            companies realize their digital visions with precision and creativity.
          </p>
        </div>
      </section>

      {/* Developer Cards */}
      <section className="px-6 md:px-16 pb-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-5 hover:border-violet-500/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-lg font-bold font-mono">&lt;/&gt;</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Frontend Expert</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Specialized in modern JavaScript frameworks such as React, Next.js and Vue.
                Creates responsive, fast and user-friendly interfaces with a focus on
                performance and accessibility.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tag) => (
                <span key={tag} className="text-xs border border-white/10 text-white/50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-5 hover:border-violet-500/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <span className="text-violet-400 text-lg font-bold font-mono">&lt;/&gt;</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Fullstack Developer</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Expert across the entire stack from database to frontend. Builds scalable
                backends with Node.js, Python and modern databases. Ensures seamless
                integration between all parts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Python", "PostgreSQL", "AWS"].map((tag) => (
                <span key={tag} className="text-xs border border-white/10 text-white/50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Card */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-10 border border-white/5 bg-white/[0.03]">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-start gap-6">
              <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Our Philosophy</h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
                  We believe that every project deserves personal attention and tailored solutions.
                  As a small, dedicated agency we can offer flexibility, fast communication and a
                  deep understanding of your business goals. We are not just developers — we are
                  your digital partner who invests in your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Some<span className="text-violet-400">Teck</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <Link
          href="/"
          className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
}
