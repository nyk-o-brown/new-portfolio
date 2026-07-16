export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="font-mono text-cyan-400 font-black text-xl mb-2">
              BN
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Building things that work, in Nairobi and on the internet.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-neutral-500 tracking-widest mb-4">
              QUICK LINKS
            </p>
            <div className="space-y-2">
              {["#about", "#skills", "#experience", "#projects", "#contact"].map(
                (href) => (
                  <a
                    key={href}
                    href={href}
                    className="block text-sm text-neutral-500 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {href.slice(1).toUpperCase()}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-neutral-900">
          <p className="text-xs font-mono text-neutral-700">
            © {new Date().getFullYear()} Brown Nyakako — built with Next.js,
            Tailwind, and too much coffee.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/nyk-o-brown"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-neutral-600 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brown-nyakako"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-neutral-600 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
