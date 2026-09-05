import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  const index = services.findIndex((s) => s.slug === slug);
  const accents = ["#376E6F", "#DA7B93", "#E8A5B8"];
  const accent = accents[index % accents.length];

  return (
    <main className="min-h-screen bg-[#1C3334] text-white">
      <section className="relative overflow-hidden px-6 pt-40 pb-24">
        <ServiceDetailBackground accent={accent} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <p className="text-sm font-medium" style={{ color: accent }}>
              Our Services
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {service.description}
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <InfoCard title="Challenge" text={service.challenge} accent={accent} />
              <InfoCard title="Solution" text={service.solution} accent={accent} />
            </div>

            <aside className="space-y-6">
              <div
                className="relative overflow-hidden border border-white/10 bg-[#2F4454]/40 p-8"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                }}
              >
                <h2 className="text-xl font-bold">Technologies</h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="relative overflow-hidden border border-white/10 bg-[#2F4454]/40 p-8"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                }}
              >
                <h2 className="text-xl font-bold">What you get</h2>

                <ul className="mt-6 space-y-3 text-sm text-white/60">
                  {service.results.map((result) => (
                    <li key={result} style={{ color: undefined }}>
                      <span style={{ color: accent }}>✓</span> {result}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-[#2F4454]/40 p-10 text-center">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#376E6F]/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#DA7B93]/20 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold">
                Need help with {service.title}?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Let&apos;s build something modern, fast and scalable for your
                business.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#376E6F] to-[#DA7B93] px-8 py-4 font-semibold text-white transition hover:opacity-90"
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

function InfoCard({
  title,
  text,
  accent,
}: {
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-[#2F4454]/40 p-8 pl-9 transition-colors"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-white/60">{text}</p>
    </div>
  );
}

function ServiceDetailBackground({ accent }: { accent: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-24 left-1/3 h-[55vh] w-[55vh] -translate-x-1/2 rounded-full opacity-80"
        style={{
          background: `linear-gradient(150deg, #2E151B 0%, ${accent} 60%, #2E151B 100%)`,
        }}
      />
    </div>
  );
}
