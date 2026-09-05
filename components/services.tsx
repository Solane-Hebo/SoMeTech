import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Gauge,
  Layers3,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { services } from "@/lib/services";

const icons = {
  Code2,
  Database,
  Smartphone,
  ShoppingCart,
  Layers3,
  Gauge,
};

// Three accents cycling through the palette instead of one color per icon type —
// keeps every card in-family while still telling them apart at a glance.
const accents = [
  { text: "text-[#7FB3B4]", ring: "#376E6F", chipHover: "group-hover:border-[#376E6F]/40" },
  { text: "text-[#DA7B93]", ring: "#DA7B93", chipHover: "group-hover:border-[#DA7B93]/40" },
  { text: "text-[#E8A5B8]", ring: "#E8A5B8", chipHover: "group-hover:border-[#E8A5B8]/40" },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#1C3334] px-6 pt-40 pb-24 text-white">
      <ServicesBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Our Services
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Complete web development for{" "}
            <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
              modern businesses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            From frontend interfaces to complete fullstack systems. We help
            startups and businesses build fast, scalable digital products.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const accent = accents[i % accents.length];
            const number = String(i + 1).padStart(2, "0");

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative overflow-hidden border border-white/10 bg-[#2F4454]/40 p-8 pt-10 transition-all duration-300 hover:-translate-y-2 hover:bg-[#2F4454]/60 ${accent.chipHover}`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                }}
              >
                {/* corner glow, tucked into the cut corner */}
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ backgroundColor: accent.ring }}
                />

                {/* ghost index number sitting in the notch */}
                <span
                  className="pointer-events-none absolute right-3 top-1 text-xs font-bold tracking-widest text-white/20"
                >
                  {number}
                </span>

                <div
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${accent.ring}40`,
                    backgroundColor: `${accent.ring}1A`,
                  }}
                >
                  <Icon className={accent.text} size={26} />
                </div>

                <h2 className="relative text-2xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="relative mt-4 text-sm leading-relaxed text-white/50">
                  {service.shortDescription}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border border-white/10 px-3 py-1 text-xs text-white/50 transition group-hover:text-white/70 ${accent.chipHover}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:translate-x-1 group-hover:text-white"
                  style={{ color: accent.ring }}
                >
                  Learn more
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-[#2F4454]/40 p-10 text-center">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#DA7B93]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#376E6F]/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Need a custom solution?</h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Every business is different. We create tailored solutions that fit
              your goals, workflow and future growth.
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
  );
}

function ServicesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-20 -left-20 h-[60vh] w-[60vh] rounded-full opacity-90"
        style={{
          background: "linear-gradient(140deg, #2E151B 0%, #376E6F 70%, #2E151B 100%)",
        }}
      />
      <div
        className="absolute top-1/4 -right-24 h-[68vh] w-[68vh] rounded-full opacity-95"
        style={{
          background: "linear-gradient(155deg, #2E151B 0%, #DA7B93 65%, #2E151B 100%)",
        }}
      />
      {/* thin dotted grid for texture */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
        <pattern id="services-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#DA7B93" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#services-dots)" />
      </svg>
    </div>
  );
}
