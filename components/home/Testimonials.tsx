export default function Testimonials() {
  const items = [
    { quote: 'These sauces changed our weeknight dinners.', name: '— Alex' },
    { quote: 'Rich flavour, easy on the gut.', name: '— Priya' },
    { quote: 'A pantry staple now.', name: '— Sam' },
  ];
  return (
    <section className="py-12 container-max">
      <h2 className="text-2xl font-bold text-ink mb-6">What customers say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <blockquote key={idx} className="card p-6">
            <p className="text-gray-700">{i.quote}</p>
            <footer className="mt-3 text-sm text-gray-500">{i.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}