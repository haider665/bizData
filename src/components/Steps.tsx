const steps = [
  {
    step: 1,
    title: "Install Snippet",
    desc:
      "Copy and paste the ExperienceAI script into your website’s head tag."
  },
  {
    step: 2,
    title: "Collect Interactions",
    desc: "Events and journeys are captured automatically — no manual tracking."
  },
  {
    step: 3,
    title: "Get Insights",
    desc:
      "Receive prioritized, actionable recommendations to improve experience."
  }
];

export default function Steps() {
  return (
    <section className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        From clicks to clarity — in 3 steps.
      </h2>

      <ol className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.step} className="text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700 ring-1 ring-primary-200">
              {s.step}
            </div>
            <h3 className="mt-3 font-medium">{s.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}