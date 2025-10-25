type Tier = {
  name: string;
  price: string;
  period?: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    cta: "Start 7‑day free trial",
    features: [
      "01k sessions / mo",
      "Basic AI insights",
      "Email support",
      "No-code install"
    ]
  },
  {
    name: "Pro",
    price: "$199",
    period: "/mo",
    cta: "Start 7‑day free trial",
    highlighted: true,
    features: [
      "05k sessions / mo",
      "Prioritized AI Signals",
      "Session replay & journeys",
      "Heatmaps & funnels",
      "Slack alerts"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    cta: "Contact Sales",
    features: [
      "Unlimited events",
      "SAML/SSO",
      "PII governance",
      "On‑prem / EU data",
      "Dedicated support"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        Simple, transparent pricing for all team sizes.
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {tiers.map((t) => (
          <article
            key={t.name}
            className={`card flex flex-col ${
              t.highlighted ? "ring-1 ring-primary-200 shadow-lg" : ""
            }`}
          >
            {t.highlighted && (
              <div className="mx-auto -mt-2 mb-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                RECOMMENDED
              </div>
            )}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="mt-2">
              <span className="text-2xl font-bold">{t.price}</span>
              {t.period && (
                <span className="text-sm text-gray-500">{t.period}</span>
              )}
            </div>
            <ul className="mt-3 flex flex-1 list-disc flex-col gap-1 pl-5 text-sm text-gray-700">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`btn mt-4 ${
                t.highlighted ? "btn-primary" : "btn-ghost"
              }`}
            >
              {t.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}