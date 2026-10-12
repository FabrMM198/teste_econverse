import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { ProductSection } from './components/ProductSection';
import { Partners } from './components/Partners';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductSection
          afterPrimaryCarousel={<Partners />}
          betweenRelatedCarousels={<Partners />}
        />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}