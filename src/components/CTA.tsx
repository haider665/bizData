interface CTAProps {
  onOpenModal: (type: "waitlist" | "early-access") => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
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
          <button 
            onClick={() => onOpenModal("early-access")}
            className="btn btn-primary"
          >
            Request Early Access
          </button>
          <button 
            onClick={() => onOpenModal("waitlist")}
            className="btn btn-ghost"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}