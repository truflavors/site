export default function FAQ() {
  const items = [
    { q: 'Are your sauces shelf-stable?', a: 'Yes — store in a cool, dry place.' },
    { q: 'Do you offer subscriptions?', a: 'Yes — flexible subscriptions are available.' },
    { q: 'What ingredients do you avoid?', a: 'We avoid artificial preservatives and common irritants.' },
  ];
  return (
    <section className="py-12 container-max">
      <h2 className="text-2xl font-bold text-ink mb-4">FAQ</h2>
      {items.map((i, idx) => (
        <details key={idx} className="card p-4">
          <summary className="font-semibold">{i.q}</summary>
          <div className="mt-2 text-sm text-gray-600">{i.a}</div>
        </details>
      ))}
    </section>
  );
}