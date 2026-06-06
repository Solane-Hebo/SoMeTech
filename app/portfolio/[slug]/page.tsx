import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden px-6 pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <div className="max-w-4xl">
            <p className="text-sm font-medium text-violet-400">
              {project.category}
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {project.overview}
            </p>
          </div>

          <div className="relative mt-14 h-[480px] overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <InfoCard title="Challenge" text={project.challenge} />
              <InfoCard title="Solution" text={project.solution} />
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
                <h2 className="text-xl font-bold">Technologies</h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
                <h2 className="text-xl font-bold">Results</h2>

                <ul className="mt-6 space-y-3 text-sm text-white/60">
                  {project.results.map((result) => (
                    <li key={result}>✓ {result}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-10 text-center">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold">
                Interested in a similar project?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Let&apos;s discuss how we can help your business build
                something modern, fast and scalable.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-colors hover:border-violet-500/30">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-white/60">{text}</p>
    </div>
  );
}