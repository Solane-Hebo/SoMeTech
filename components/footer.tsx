import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Some<span className="text-violet-400">Teck</span>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
            Modern web development agency building fast, scalable and beautiful
            digital products.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Pages</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>

          <div className="mt-4 space-y-3 text-sm text-white/50">
            <p>hello@someteck.com</p>
            <p>Sweden</p>
            <p>Response within 24h</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} SomeTeck. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}