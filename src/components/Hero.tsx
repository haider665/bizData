interface HeroProps {
  onOpenModal: (type: "waitlist" | "early-access") => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="section text-center">
      <div className="mx-auto max-w-3xl pt-16 sm:pt-24">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Smarter Insights. Simpler{" "}
          <span className="text-primary-700">Analytics.</span>
        </h1>
        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Understand what your users do — and why — with AI‑powered
          experience analytics.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button 
            onClick={() => onOpenModal("early-access")}
            className="btn btn-primary"
          >
            Get Early Access
          </button>
          <button 
            onClick={() => onOpenModal("waitlist")}
            className="btn btn-ghost"
          >
            Join the Waitlist
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card">
        <LaptopMock />
      </div>
    </section>
  );
}

function LaptopMock() {
  return (
    <div className="relative bg-gray-50">
      <div className="mx-auto h-64 max-w-3xl p-6 sm:h-80">
        <div className="grid h-full grid-cols-3 gap-4">
          <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-4">
            <Chart />
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex h-full items-center justify-center">
              <Donut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chart() {
  return (
    <svg viewBox="0 0 400 160" className="h-full w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="url(#g)"
        stroke="#60a5fa"
        strokeWidth="2"
        points="0,120 20,110 40,112 60,95 80,100 100,90 120,92 140,70 160,78 180,60 200,68 220,55 240,62 260,58 280,60 300,52 320,56 340,50 360,48 380,46 400,44 400,160 0,160"
      />
      <g fill="#e5e7eb">
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={i * 65} y={130} width="40" height="20" rx="4" />
        ))}
      </g>
    </svg>
  );
}

function Donut() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28">
      <circle cx="60" cy="60" r="42" fill="#eff6ff" />
      <circle
        cx="60"
        cy="60"
        r="38"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="10"
        strokeDasharray="210 80"
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text
        x="60"
        y="64"
        textAnchor="middle"
        className="fill-gray-700 text-[10px]"
      >
        21%
      </text>
    </svg>
  );
}