import './Hero.css';
import '../img/Hero.png';

export function Hero() {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>Venha conhecer nossas promoções</h1>
            <p><span>50% Off</span> nos produtos</p>
            <button>Ver produto</button>
        </div>
    </section>
  );
}