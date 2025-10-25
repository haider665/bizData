const items = [
  {
    title: "Numbers, Not Behavior",
    body:
      "Traditional tools surface metrics, not insights. You don’t see why users drop or hesitate.",
    icon: "📊"
  },
  {
    title: "Static Heatmaps",
    body:
      "Old-school heatmaps capture snapshots, missing intent and individual journeys.",
    icon: "🗺️"
  },
  {
    title: "Overpriced & Complex",
    body:
      "Fragmented stacks are powerful but clunky—with steep learning curves and heavy setup.",
    icon: "💸"
  }
];

export default function InfoGrid() {
  return (
    <section className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        You know what’s happening on your site — but not why.
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">
        Businesses make decisions in the dark. Traditional tools give pieces of
        the puzzle, but not the full picture.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card">
            <div className="flex items-start gap-3">
              <div className="text-xl">{it.icon}</div>
              <div>
                <h3 className="font-medium">{it.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{it.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}