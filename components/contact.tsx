import {
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 pt-40 pb-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Contact Us
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
              amazing together
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Have an idea, project or business challenge? Let's discuss how we
            can help you build fast, scalable and modern digital experiences.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
            <Mail className="mb-4 text-blue-400" size={28} />

            <h3 className="text-xl font-bold">Email</h3>

            <p className="mt-3 text-white/60">
              hello@someteck.com
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
            <MapPin className="mb-4 text-violet-400" size={28} />

            <h3 className="text-xl font-bold">Location</h3>

            <p className="mt-3 text-white/60">
              Sweden
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
            <Clock3 className="mb-4 text-pink-400" size={28} />

            <h3 className="text-xl font-bold">Response Time</h3>

            <p className="mt-3 text-white/60">
              Within 24 hours
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-16 rounded-3xl border border-white/5 bg-white/[0.03] p-8 md:p-12">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-violet-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-violet-500"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Company"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-violet-500"
              />

              <select className="rounded-xl border border-white/10 bg-[#0B1220] px-4 py-4 outline-none transition focus:border-violet-500">
                <option>Project Type</option>
                <option>Frontend Development</option>
                <option>Fullstack Development</option>
                <option>Web Application</option>
                <option>E-commerce</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-violet-500"
            />

            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Send Message
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* CTA */}
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-10 text-center">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold">
              Ready to start?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Let's discuss your project and create something amazing together.
            </p>

            <button className="mt-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold text-white transition hover:opacity-90">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}