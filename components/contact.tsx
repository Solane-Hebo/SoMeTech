"use client";

import { useState } from "react";
import { Mail, MapPin, Clock3, ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!formData.projectType) e.projectType = "Please select a project type.";
    if (!formData.message.trim()) {
      e.message = "Please tell us about your project.";
    } else if (formData.message.trim().length < 20) {
      e.message = "Message must be at least 20 characters.";
    }
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setFormData({ name: "", email: "", company: "", projectType: "", message: "" });
    setErrors({});
    setServerError("");
  }

  const inputBase =
    "w-full rounded-xl border bg-white/5 px-4 py-4 outline-none transition placeholder:text-white/30 text-white";
  const inputNormal = "border-white/10 focus:border-violet-500";
  const inputError = "border-red-500/70 focus:border-red-500";

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
          {/* Email — clickable */}
          <a
            href="mailto:sometech16@gmail.com"
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition hover:border-violet-500/30 hover:bg-white/[0.06]"
          >
            <Mail className="mb-4 text-blue-400" size={28} />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-3 text-white/60 break-all">sometech16@gmail.com</p>
          </a>

          {/* Location — links to Google Maps Stockholm */}
          <a
            href="https://www.google.com/maps/search/Stockholm,+Sweden"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition hover:border-violet-500/30 hover:bg-white/[0.06]"
          >
            <MapPin className="mb-4 text-violet-400" size={28} />
            <h3 className="text-xl font-bold">Location</h3>
            <p className="mt-3 text-white/60">Stockholm, Sweden</p>
          </a>

          {/* Response time */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
            <Clock3 className="mb-4 text-pink-400" size={28} />
            <h3 className="text-xl font-bold">Response Time</h3>
            <p className="mt-3 text-white/60">Within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-16 rounded-3xl border border-white/5 bg-white/[0.03] p-8 md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Message sent!</h2>
              <p className="mt-4 max-w-md text-white/60">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:bg-white/5"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-6">

              {/* Server error banner */}
              {serverError && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {serverError}
                </div>
              )}

              {/* Row 1 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                  />
                  {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className={`${inputBase} ${inputNormal}`}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.projectType ? inputError : inputNormal} bg-[#0B1220]`}
                  >
                    <option value="">Project Type *</option>
                    <option>Frontend Development</option>
                    <option>Fullstack Development</option>
                    <option>Web Application</option>
                    <option>E-commerce</option>
                    <option>Other</option>
                  </select>
                  {errors.projectType && <p className="text-xs text-red-400">{errors.projectType}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us about your project... *"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.message ? inputError : inputNormal}`}
                />
                <div className="flex items-center justify-between">
                  {errors.message
                    ? <p className="text-xs text-red-400">{errors.message}</p>
                    : <span />}
                  <p className={`text-xs ${formData.message.length < 20 ? "text-white/30" : "text-violet-400"}`}>
                    {formData.message.length} / 20 min
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* CTA */}
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-10 text-center">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Ready to start?</h2>
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
