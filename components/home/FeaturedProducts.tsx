
import ProductCard from '@/components/ProductCard';
export default function FeaturedProducts() {
  return (
    <section className="py-12 container-max">
      <h2 className="text-2xl font-bold text-ink mb-6">Featured products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard p={{id:'1',name:'Tomato Masala',price:'£7.99',slug:'/products/1',images:['/images/ingredients/hero.jpg']}} />
        <ProductCard p={{id:'2',name:'Coconut Curry',price:'£8.49',slug:'/products/2',images:['/images/ingredients/hero.jpg']}} />
        <ProductCard p={{id:'3',name:'Smoky Tomato',price:'£6.99',slug:'/products/3',images:['/images/ingredients/hero.jpg']}} />
      </div>
    </section>
  );
}
