export default function CTA() {
  return (
    <section id="cta" className="section mt-16">
      <div className="rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-gray-100">
        <h2 className="text-lg font-semibold sm:text-xl">
          Be the first to experience smarter analytics.
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
          Limited early access slots available. Join now to help shape the
          future of analytics.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a className="btn btn-primary" href="#">
            Request Early Access
          </a>
          <a className="btn btn-ghost" href="#">
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}