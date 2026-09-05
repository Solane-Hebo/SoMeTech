import Image from "next/image";

function AboutHeroCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-24 -left-16 h-[38vh] w-[38vh] rounded-full opacity-70 blur-[2px]"
        style={{
          background:
            "linear-gradient(140deg, #2E151B 0%, #376E6F 60%, #2E151B 100%)",
        }}
      />
      <div
        className="absolute top-10 -right-20 h-[46vh] w-[46vh] rounded-full opacity-80 blur-[2px]"
        style={{
          background:
            "linear-gradient(155deg, #2E151B 0%, #DA7B93 55%, #2E151B 100%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-1/3 h-[28vh] w-[28vh] rounded-full opacity-50 blur-[2px]"
        style={{
          background: "linear-gradient(160deg, #376E6F 0%, #2E151B 100%)",
        }}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1C3334] text-white">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-20 text-center">
        <AboutHeroCircles />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#DA7B93]"
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

            About SomeTeck
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            We are two{" "}
            <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
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

      <section className="px-6 pb-20 md:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mb-12 text-center">
      <h2 className="text-4xl font-extrabold md:text-5xl">
        Meet the{" "}
        <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
          team
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
        Two passionate developers creating modern digital solutions with focus
        on quality, performance and user experience.
      </p>
    </div>


    <div className="grid gap-8 md:grid-cols-2">

      {/* Person 1 */}
      <div className="rounded-3xl border border-white/10 bg-[#2F4454]/40 p-8 text-center transition hover:border-[#376E6F]/40">

        <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border border-white/10">
          <Image
            src="/team/person1.jpg"
            alt="Developer"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-white">
          Solane Sani
        </h3>

        <p className="mt-4 leading-7 text-white/60">
          Passionate about building modern digital products and creating
          scalable solutions that help businesses grow online.
        </p>

      </div>


      {/* Person 2 */}
      <div className="rounded-3xl border border-white/10 bg-[#2F4454]/40 p-8 text-center transition hover:border-[#DA7B93]/40">

        <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border border-white/10">
          <Image
            src="/team/person2.jpg"
            alt="Developer"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-white">
          Meron Beyene
        </h3>

        <p className="mt-4 leading-7 text-white/60">
          Focused on delivering clean, reliable and innovative solutions
          through modern technology and creative thinking.
        </p>

      </div>

    </div>

  </div>
</section>
      <section className="px-6 pb-12 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#2F4454]/40 p-8 transition-all hover:border-[#376E6F]/40">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#376E6F]/30 bg-[#376E6F]/10">
              <span className="font-mono text-xl font-bold text-[#7FB3B4]">
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

          <div className="rounded-3xl border border-white/10 bg-[#2F4454]/40 p-8 transition-all hover:border-[#DA7B93]/40">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#DA7B93]/30 bg-[#DA7B93]/10">
              <span className="font-mono text-xl font-bold text-[#DA7B93]">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#2F4454]/40 p-10">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#DA7B93]/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#376E6F]/20 blur-3xl" />

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
