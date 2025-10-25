const caps = [
  {
    title: "AI Insights",
    body:
      "Automatically detects experience friction, drop-offs, loops, and UX anti-patterns.",
    icon: "🤖"
  },
  {
    title: "Smart Heatmaps",
    body:
      "Semantic heatmaps show intent, hesitations, and rage-clicks — not just click density.",
    icon: "🔥"
  },
  {
    title: "Real‑Time Analytics",
    body:
      "Stream events in real-time and spot issues as they happen, not after the fact.",
    icon: "⚡"
  },
  {
    title: "No‑Code Setup",
    body:
      "Copy–paste a small snippet. No schema planning, trackers, or manual events.",
    icon: "🧩"
  },
  {
    title: "Privacy‑First",
    body:
      "On-device redaction and PII scrubbing. Private by default, configurable by design.",
    icon: "🛡️"
  },
  {
    title: "AI Assistant",
    body:
      "Ask questions in plain English. ‘Why is onboarding dropping on step 2?’",
    icon: "💬"
  }
];

export default function CapabilitiesGrid() {
  return (
    <section id="features" className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        Everything you need to understand user behavior.
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c) => (
          <article key={c.title} className="card">
            <div className="flex items-start gap-3">
              <div className="text-xl">{c.icon}</div>
              <div>
                <h3 className="font-medium">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}