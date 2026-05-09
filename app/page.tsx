export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070A] text-white flex items-center justify-center px-6">
      <section className="max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
          Deviosh
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Apps. Automation. AI. Cloud.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Building intelligent software experiences, modern web apps, and cloud-native solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@deviosh.com"
            className="rounded-full bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200 transition"
          >
            Contact Deviosh
          </a>

          <a
            href="https://github.com/devioshdev"
            className="rounded-full border border-gray-700 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
          >
            View GitHub
          </a>
        </div>
      </section>
    </main>
  );
}