
import NewHero from '@/components/home/NewHero';
import WhyCards from '@/components/home/WhyCards';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SubscriptionBand from '@/components/home/SubscriptionBand';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export const metadata = {
  title: 'Tru Flavors — Home',
  description: 'Gut-friendly, chef-developed sauces for modern wellness.',
};

export default function Page() {
  return (
    <main>
      <NewHero />
      <WhyCards />
      <FeaturedProducts />
      <SubscriptionBand />
      <Testimonials />
      <FAQ />
    </main>
  );
}
