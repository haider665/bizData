export default function   ProductShowcase() {
  return (
    <section className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        Meet BizData — your digital experience co‑pilot.
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">
        Analyze behavior patterns, surface critical issues, and suggest
        actionable improvements automatically.
      </p>

      <div className="relative mt-8 mx-auto max-w-6xl">
        <div className="card relative overflow-hidden">
          <span className="tag absolute left-3 top-3">Dashboard</span>
          <div className="h-80 rounded-lg bg-primary-50 ring-1 ring-primary-100 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center overflow-hidden">
            <img 
              src="/images/bizDataDashboard.png" 
              alt="BizData connects signals into clear, prioritized insights"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-gray-600 text-center">
            BizData connects signals into clear, prioritized insights.
          </p>
        </div>
      </div>
    </section>
  );
}