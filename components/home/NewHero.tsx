import Image from 'next/image';
export default function NewHero() {
  return (
    <section className="bg-bg py-16">
      <div className="container-max grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="kicker text-brand">Introducing</div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight">
            Bold sauces. Gut-friendly ingredients.
          </h1>
          <p className="lead mt-4 text-ink">
            Ready-to-cook and ready-to-eat sauces crafted for modern wellness — rich flavor, minimal fuss.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/products" className="btn btn-primary">Shop now</a>
            <a href="/subscribe" className="btn btn-secondary">Subscribe</a>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/images/how-it-works/hero.jpg" alt="Tru Flavors hero" width={500} height={500} className="rounded-2xl shadow-lg"/>
        </div>
      </div>
    </section>
  );
}