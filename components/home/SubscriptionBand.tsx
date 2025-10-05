export default function SubscriptionBand() {
  return (
    <section className="py-12">
      <div className="container-max card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="kicker text-brand">Subscribe & Save</h3>
          <p className="text-ink font-semibold">Regular deliveries, flexible plans.</p>
        </div>
        <div className="flex gap-3">
          <a href="/subscribe" className="btn btn-primary">See plans</a>
          <a href="/products" className="btn">Shop one-off</a>
        </div>
      </div>
    </section>
  );
}