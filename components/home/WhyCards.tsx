export default function WhyCards() {
  const items = [
    { title: 'Chef-developed', desc: 'Authentic recipes by chefs.' },
    { title: 'Real ingredients', desc: 'No junk, nothing artificial.' },
    { title: 'Shelf-stable', desc: 'Pantry-friendly, long shelf life.' },
  ];
  return (
    <section className="py-12 container-max grid md:grid-cols-3 gap-6">
      {items.map(i => (
        <div key={i.title} className="card p-6">
          <h3 className="kicker text-brand mb-2">{i.title}</h3>
          <p className="text-ink">{i.desc}</p>
        </div>
      ))}
    </section>
  );
}