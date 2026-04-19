'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Patek Philippe Calatrava",
      price: "$12,500",
      year: "1954",
      image: "/watch-gold.png"
    },
    {
      id: 2,
      title: "Rolex Cosmograph Daytona",
      price: "$45,000",
      year: "1968",
      image: "/watch-silver.png"
    },
    {
      id: 3,
      title: "Omega Speedmaster Pro",
      price: "$8,200",
      year: "1969",
      image: "/watch-gold.png" // Reusing for layout balance
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/hero.png"
            alt="Vintage Watch Mechanism"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(5,10,6,0.9) 0%, rgba(5,10,6,0.4) 100%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="fade-in-up" style={{ maxWidth: '600px' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '1rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>Est. 1924</h2>
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Timeless <br /> <span style={{ color: 'white' }}>Precision</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
              Discover an exclusive collection of the world's most sought-after vintage timepieces.
              Each watch tells a story of craftsmanship, history, and elegance.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#collection" className="btn">Explore Collection</a>
              <a href="#about" className="btn btn-secondary">Our Heritage</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--foreground)' }}>Curated Collection</h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--accent)', margin: '1rem auto' }}></div>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)' }}>
              Hand-selected for their rarity and condition, our watches represent the pinnacle of horological history.
            </p>
          </div>

          <div className="grid-3">
            {products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                year={product.year}
                image={product.image}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="#" className="btn">View All Timepieces</a>
          </div>
        </div>
      </section>

      {/* Restoration/About */}
      <section id="restoration" className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Art of Restoration</h2>
              <p>
                Every timepiece that enters our workshop undergoes a rigorous inspection and restoration process.
                Our master watchmakers, trained in Swiss traditions, ensure that every gear, spring, and jewel functions exactly as it did decades ago.
              </p>
              <p>
                We believe in preserving the soul of the watch while reviving its heart. We don't just sell watches; we serve as custodians of history.
              </p>
              <a href="#contact" className="btn" style={{ marginTop: '1rem' }}>Restoration Services</a>
            </div>
            <div className="glass-card" style={{ padding: '1rem' }}>
              {/* Placeholder for restoration image using one of the products for now, styled differently */}
              <div style={{ position: 'relative', height: '400px', width: '100%' }}>
                <Image
                  src="/watch-silver.png"
                  alt="Restoration Process"
                  fill
                  style={{ objectFit: 'cover', filter: 'sepia(30%) contrast(120%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '4rem 0', background: '#020402' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>CHRONOS</h3>
            <p style={{ maxWidth: '300px', fontSize: '0.9rem', color: 'var(--muted)' }}>
              Dedication to the past, precision for the future. The premier destination for vintage horology.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'white' }}>Collection</h4>
            <ul style={{ listStyle: 'none', color: 'var(--muted)', lineHeight: '2' }}>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Chronographs</a></li>
              <li><a href="#">Dress Watches</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'white' }}>Contact</h4>
            <p style={{ color: 'var(--muted)', lineHeight: '2' }}>
              123 Heritage Lane<br />
              Geneva, Switzerland<br />
              info@chronosheritage.com
            </p>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.8rem', color: '#555' }}>
          &copy; 2024 Chronos Heritage. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
