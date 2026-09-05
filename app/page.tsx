import { ArrowRight, Star, Headset, TrendingUp, Zap, Handshake, Mail} from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1C3334] text-white">
      <Hero />
      <BusinessSolutions />
      {/* <Technologies /> */}
      <Clients />
      <WhySomeTech/>
      <Testimonials />
    </main>
  );
}


function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0E1717] px-6 pt-24"
    >
      <HeroCircles />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
          We build digital experiences{" "}
          that grow with your business
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          SomeTech is a boutique digital agency focused on frontend and
          fullstack development. We create fast, modern and high-converting
          websites and web applications.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#DA7B93] px-7 py-3 font-semibold text-[#1C3334] transition hover:bg-[#e491a6]"
          >
            Get started
          </Link>

          <a
            href="#portfolio"
            className="rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View our work
          </a>
        </div>

        {/* <Stats /> */}
      </div>
    </section>
  );
}

function HeroCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-[30%] top-1/2 h-[130vh] w-[130vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
        style={{
          background:
            "linear-gradient(140deg, #2E151B 0%, #1C3334 55%, #2E151B 100%)",
        }}
      />
      <div
        className="absolute left-[70%] top-1/2 h-[130vh] w-[130vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-95"
        style={{
          background:
            "linear-gradient(155deg, #2E151B 0%, #376E6F 38%, #DA7B93 62%, #2E151B 100%)",
        }}
      />
    </div>
  );
}

function BusinessSolutions() {
  const solutions = [
    {
      title: "Understand your workflow",
      text: "We analyze how your business works today and identify opportunities where digital tools can save time and improve efficiency.",
      icon: "01",
    },
    {
      title: "Build tools around your needs",
      text: "Instead of forcing your business into existing systems, we create solutions designed around your actual routines.",
      icon: "02",
    },
    {
      title: "Improve everyday operations",
      text: "From internal dashboards to customer platforms, we build tools that make daily work simpler and more effective.",
      icon: "03",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,123,147,0.10),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <div className="
            mx-auto mb-5 inline-flex
            rounded-full
            border border-white/10
            bg-white/5
            px-4 py-2
            text-sm
            text-white/70
          ">
            Our Approach
          </div>


          <h2 className="
            text-4xl 
            font-extrabold 
            tracking-tight 
            md:text-5xl
          ">
            How SomeTeck helps businesses{" "}
            <span className="
              bg-gradient-to-r
              from-[#376E6F]
              via-[#DA7B93]
              to-[#DA7B93]
              bg-clip-text
              text-transparent
            ">
              build smarter tools
            </span>
          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          ">
            We create digital solutions that support real business routines,
            helping teams work faster, smarter and more efficiently.
          </p>

        </div>


        <div className="
          mt-16
          grid
          gap-6
          md:grid-cols-3
        ">

          {solutions.map((item) => (

            <div
              key={item.icon}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-[#2F4454]/40
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#DA7B93]/40
                hover:bg-[#2F4454]/60
              "
            >

              <div className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-[#376E6F]/30
                to-[#DA7B93]/30
                text-sm
                font-bold
                text-[#DA7B93]
              ">
                {item.icon}
              </div>


              <h3 className="
                mt-6
                text-xl
                font-bold
                text-white
              ">
                {item.title}
              </h3>


              <p className="
                mt-4
                text-sm
                leading-7
                text-white/50
              ">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
// function Stats() {
//   const stats = [
//     { value: "2+", label: "Years experience" },
//     { value: "50+", label: "Projects delivered" },
//     { value: "100%", label: "Satisfied clients" },
//     { value: "24/7", label: "Support" },
//   ];

//   return (
//     <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
//       {stats.map((stat) => (
//         <div key={stat.label}>
//           <p className="text-3xl font-bold text-[#DA7B93]">{stat.value}</p>
//           <p className="mt-2 text-sm text-white/50">{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


const technologies = [
  { name: "React",       color: "text-[#7FB3B4]",   icon: "⚛️" },
  { name: "Next.js",     color: "text-white",        icon: "▲" },
  { name: "TypeScript",  color: "text-[#7FB3B4]",   icon: "TS" },
  { name: "Tailwind",    color: "text-[#7FB3B4]",   icon: "🌊" },
  { name: "Node.js",     color: "text-[#DA7B93]",   icon: "🟢" },
  { name: "MongoDB",     color: "text-[#DA7B93]",   icon: "🍃" },
  { name: "PostgreSQL",  color: "text-[#B7CBCB]",   icon: "🐘" },
  { name: "Figma",       color: "text-[#DA7B93]",   icon: "🎨" },
  { name: "C#",          color: "text-[#E8A5B8]",   icon: "🟣" },
  { name: "DevOps",      color: "text-[#7FB3B4]",   icon: "⚙️" },
  { name: "GitHub",      color: "text-white",        icon: "🐙" },
  { name: "ASP.NET",     color: "text-[#E8A5B8]",   icon: "🔷" },
];

const clients = [
  {
    name: "Brook Skin Care",
    logo: "/clients/brook-logo.jpeg",
  },
  {
    name: "JBekery",
    logo: "/clients/bakery logo.png",
  },
  {
    name: "Meracle Aye Lash",
    logo: "/clients/meracle-logo.jpeg",
  },
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
            <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
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
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-[#2F4454]/40 p-6 transition hover:border-[#DA7B93]/30 hover:bg-[#2F4454]/60"
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

function Clients() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-12">
          <div className="
            mx-auto mb-4 inline-flex 
            rounded-full 
            border border-white/10 
            bg-white/5 
            px-4 py-2 
            text-sm 
            text-white/70
          ">
            Our Clients
          </div>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Trusted by{" "}
            <span className="
              bg-gradient-to-r 
              from-[#376E6F]
              via-[#DA7B93]
              to-[#DA7B93]
              bg-clip-text 
              text-transparent
            ">
              businesses
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            We help companies build modern digital products that create real impact.
          </p>
        </div>


        <div className="
          grid 
          grid-cols-2 
          gap-6 
          md:grid-cols-4
        ">
          {clients.map((client) => (
            <div
              key={client.name}
              className="
                group
                flex
                h-32
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-[#2F4454]/40
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#DA7B93]/40
                hover:bg-[#2F4454]/60
              "
            >

              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="
                  h-auto
                  max-h-12
                  w-auto
                  opacity-50
                  grayscale
                  transition
                  duration-300
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const whyPoints = [
  {
    title: "Ongoing Support",
    text: "We maintain and support your website after launch.",
    icon: Headset,
  },
  {
    title: "Continuous Improvements",
    text: "We continuously improve your website based on your business needs.",
    icon: TrendingUp,
  },
  {
    title: "Fast & Reliable",
    text: "When something needs to be fixed or changed, you have a team you can rely on.",
    icon: Zap,
  },
  {
    title: "Long-term Partnership",
    text: "We aim to become your long-term digital partner, not just another development agency.",
    icon: Handshake,
  },
];
function WhySomeTech() {
  return (
    <section className="relative overflow-hidden px-6 py-24 bg-[#2E151B]/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,110,111,0.12),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Why SomeTeck?
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            More than a website.{" "}
            <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
              A long-term digital partner.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            We don't just build your website and walk away. We stay involved,
            keep your digital products up to date, improve performance and
            help your business evolve over time.
          </p>
        </div>

        <div className="mt-16 grid justify-items-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex aspect-square w-56 flex-col items-center justify-center rounded-full border border-white/10 bg-[#2F4454]/40 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#DA7B93]/40 hover:bg-[#2F4454]/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#376E6F]/30 to-[#DA7B93]/30 text-[#DA7B93]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  {item.text}
                </p>
              </div>
            );
          })}
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
    color: "bg-[#376E6F]/20 text-[#7FB3B4]",
  },
  {
    name: "Sara Johansson",
    role: "Founder, JBekery",
    text: "Working with SomeTeck was a game changer for our business. They understood our vision immediately and built exactly what we needed.",
    rating: 5,
    initials: "SJ",
    color: "bg-[#DA7B93]/20 text-[#DA7B93]",
  },
  {
    name: "Liya Kbede",
    role: "CTO, FinFlow",
    text: "Incredibly professional team. They handled complex fullstack requirements with ease and were always available for questions.",
    rating: 5,
    initials: "MA",
    color: "bg-[#2E151B]/40 text-[#E8A5B8]",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(55,110,111,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Testimonials
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            What our{" "}
            <span className="bg-gradient-to-r from-[#376E6F] via-[#DA7B93] to-[#DA7B93] bg-clip-text text-transparent">
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
              className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-[#2F4454]/30 p-8 transition hover:border-[#DA7B93]/30"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#DA7B93] text-[#DA7B93]" />
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#376E6F] to-[#DA7B93] px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Start your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}


