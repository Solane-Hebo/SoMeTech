export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>

            About SomeTech
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            We are two{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              passionate developers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            With solid experience in both Frontend and Fullstack development,
            we help companies realize their digital visions with precision,
            creativity and scalable technology.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-blue-500/30">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
              <span className="font-mono text-xl font-bold text-blue-400">
                &lt;/&gt;
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold">
              Frontend Expert
            </h2>

            <p className="leading-8 text-white/60">
              Specialized in React, Next.js, TypeScript and modern UI
              development. Building fast, responsive and conversion-focused
              user experiences with performance and accessibility in mind.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Next.js"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-violet-500/30">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
              <span className="font-mono text-xl font-bold text-violet-400">
                &lt;/&gt;
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold">
              Fullstack Developer
            </h2>

            <p className="leading-8 text-white/60">
              Experienced across the entire stack from backend systems and APIs
              to databases and deployment. Building scalable applications with
              Node.js, PostgreSQL and cloud infrastructure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Node.js", "Python", "PostgreSQL", "AWS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold">
                Our Philosophy
              </h2>

              <p className="max-w-4xl leading-8 text-white/60">
                We believe every project deserves personal attention and a
                tailored solution. As a small and dedicated agency we offer
                flexibility, direct communication and a deep understanding of
                our clients' goals. We don't just build websites and
                applications — we build long-term partnerships that help
                businesses grow online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}