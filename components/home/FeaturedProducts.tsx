
import ProductCard from '@/components/ProductCard';
export default function FeaturedProducts() {
  return (
    <section className="py-12 container-max">
      <h2 className="text-2xl font-bold text-ink mb-6">Featured products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard p={{id:'tomato-masala',name:'Tomato Masala',price:7.99,image:'/images/ingredients/hero.jpg',category:'ready-to-cook-gravy'}} />
        <ProductCard p={{id:'coconut-curry',name:'Coconut Curry',price:8.49,image:'/images/ingredients/hero.jpg',category:'ready-to-cook-gravy'}} />
        <ProductCard p={{id:'smoky-tomato',name:'Smoky Tomato',price:6.99,image:'/images/ingredients/hero.jpg',category:'ready-to-cook-gravy'}} />
      </div>
    </section>
  );
}
