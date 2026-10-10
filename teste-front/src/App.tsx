import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { ProductSection } from './components/ProductSection';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductSection />
      </main>
    </>
  );
}