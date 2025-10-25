const logos = ["Shopify", "WordPress", "Google Tag Manager", "React", "Next.js"];

export default function Integrations() {
  return (
    <section className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        Works with your existing tools.
      </h2>
      <div className="mt-6 grid grid-cols-2 items-center gap-3 text-center sm:grid-cols-3 md:grid-cols-6">
        {logos.map((l) => (
          <div
            key={l}
            className="rounded-lg bg-white px-3 py-4 text-sm font-medium text-gray-700 ring-1 ring-gray-100"
          >
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}