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

const styles = {
  Code2: {
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  Database: {
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  Smartphone: {
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  ShoppingCart: {
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  Layers3: {
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  Gauge: {
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 pt-40 pb-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Our Services
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Complete web development for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              modern businesses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            From frontend interfaces to complete fullstack systems. We help
            startups and businesses build fast, scalable digital products.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const style = styles[service.icon as keyof typeof styles];

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition group-hover:bg-violet-500/20" />

                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border ${style.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={style.color} size={28} />
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
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50 transition group-hover:border-violet-500/30 group-hover:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition group-hover:translate-x-1 group-hover:text-white">
                  Learn more
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-10 text-center">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Need a custom solution?</h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Every business is different. We create tailored solutions that fit
              your goals, workflow and future growth.
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
  );
}