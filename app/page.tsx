const services = [
  {
    title: "Mobile MVPs",
    description:
      "Turn a product idea into a focused iOS or Android app with the right first features, clean flows, and a launchable build.",
  },
  {
    title: "App Modernization",
    description:
      "Refresh an existing app with stronger UX, faster screens, cleaner code, and a more reliable path to future releases.",
  },
  {
    title: "AI and Automation",
    description:
      "Add practical AI features, admin workflows, integrations, and automations that save time without bloating the product.",
  },
];

const process = [
  "Scope the first useful version",
  "Design the core experience",
  "Build, test, and iterate",
  "Ship with store-ready polish",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#141414]">
      <section className="relative border-b border-black/10 bg-[#f7f3ec]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(28,104,93,0.18),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.76),rgba(255,255,255,0))]" />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a href="#" className="text-lg font-semibold tracking-tight">
              Deviosh
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium text-black/65 sm:flex">
              <a href="#services" className="transition hover:text-black">
                Services
              </a>
              <a href="#process" className="transition hover:text-black">
                Process
              </a>
              <a href="#contact" className="transition hover:text-black">
                Contact
              </a>
            </nav>
            <a
              href="mailto:contact@deviosh.com?subject=Mobile%20app%20project%20inquiry"
              className="rounded-full bg-[#141414] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#245c53]"
            >
              Start a Project
            </a>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold text-[#245c53] shadow-sm">
                Founder-led mobile app development
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Build a mobile app people can trust, use, and grow with.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68 sm:text-xl">
                Deviosh helps founders and small teams shape, build, and improve
                mobile products with focused engineering, thoughtful UX, and
                practical automation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contact@deviosh.com?subject=Mobile%20app%20project%20inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-[#245c53] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#245c53]/20 transition hover:-translate-y-0.5 hover:bg-[#1d4b44]"
                >
                  Tell me about your app
                </a>
                <a
                  href="https://github.com/devioshdev"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white"
                >
                  View GitHub
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm font-medium text-black/65 sm:grid-cols-3">
                <div className="border-l border-black/15 pl-4">
                  iOS and Android apps
                </div>
                <div className="border-l border-black/15 pl-4">
                  MVP to production
                </div>
                <div className="border-l border-black/15 pl-4">
                  Direct creator access
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -left-8 top-16 hidden h-28 w-28 rounded-3xl bg-[#f0b75e] lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-36 w-24 rounded-[2rem] bg-[#245c53] lg:block" />
              <div className="relative rounded-[2.5rem] border border-black/10 bg-[#151515] p-3 shadow-2xl shadow-black/25">
                <div className="rounded-[2rem] bg-[#fdfaf5] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#245c53]">
                        Product Sprint
                      </p>
                      <p className="mt-1 text-xl font-semibold">Launch Board</p>
                    </div>
                    <div className="h-11 w-11 rounded-full bg-[#f0b75e]" />
                  </div>
                  <div className="space-y-3">
                    {process.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-black/8 bg-white p-4 shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#245c53] text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="font-medium text-black/78">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-3xl bg-[#245c53] p-5 text-white">
                    <p className="text-sm font-medium text-white/70">
                      Current focus
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      Fast, polished mobile products for real business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-b border-black/10 bg-[#fffaf2] px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#245c53]">
              What Deviosh Builds
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Clear product work with direct technical ownership.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-black/65">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#141414] px-6 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f0b75e]">
              How Work Moves
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              A practical path from idea to shipped app.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item, index) => (
              <div key={item} className="border-t border-white/18 pt-5">
                <p className="text-sm font-semibold text-[#f0b75e]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{item}</h3>
                <p className="mt-3 leading-7 text-white/62">
                  Small, visible steps keep scope honest and make the product
                  better before it reaches users.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7f3ec] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#245c53]">
              Start Small, Build Seriously
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Have an app idea, a broken build, or a workflow that needs a
              smarter tool?
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/65">
              Send a short note about what you are trying to build. You will
              work directly with the creator behind Deviosh.
            </p>
          </div>
          <a
            href="mailto:contact@deviosh.com?subject=Mobile%20app%20project%20inquiry"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#141414] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#245c53] sm:w-auto"
          >
            Contact Deviosh
          </a>
        </div>
      </section>
    </main>
  );
}
