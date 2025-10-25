export default function ProductShowcase() {
  return (
    <section className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        Meet ExperienceAI — your digital experience co‑pilot.
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">
        Analyze behavior patterns, surface critical issues, and suggest
        actionable improvements automatically.
      </p>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
        <div className="card relative overflow-hidden">
          <span className="tag absolute left-3 top-3">Before</span>
          <div className="h-40 rounded-lg bg-gray-50 ring-1 ring-gray-100 sm:h-56" />
          <p className="mt-3 text-sm text-gray-600">
            Disconnected dashboards and guesswork.
          </p>
        </div>
        <div className="card relative overflow-hidden">
          <span className="tag absolute left-3 top-3">After</span>
          <div className="h-40 rounded-lg bg-primary-50 ring-1 ring-primary-100 sm:h-56" />
          <p className="mt-3 text-sm text-gray-600">
            ExperienceAI connects signals into clear, prioritized insights.
          </p>
        </div>
      </div>
    </section>
  );
}