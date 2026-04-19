'use client';

import { useEffect } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import { Shield, Award, Sparkles, MapPin, ArrowRight, Quote, Globe, Mail, MessageSquare } from "lucide-react";

if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Asegurar scroll al inicio al montar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { id: 1, title: "Patek Philippe Calatrava", price: "$12,500", year: "1954", image: "/watch-gold.png" },
    { id: 2, title: "Rolex Cosmograph Daytona", price: "$45,000", year: "1968", image: "/watch-silver.png" },
    { id: 3, title: "Omega Speedmaster Pro", price: "$8,200", year: "1969", image: "/watch-gold.png" },
    { id: 4, title: "Cartier Tank Louis", price: "$9,800", year: "1972", image: "/watch-silver.png" },
    { id: 5, title: "Vacheron Const. Patrimony", price: "$18,400", year: "1958", image: "/watch-gold.png" },
    { id: 6, title: "Audemars Piguet Royal Oak", price: "$52,000", year: "1974", image: "/watch-silver.png" }
  ];

  const testimonials = [
    { name: "Julian Rossi", role: "Coleccionista Senior", text: "La atención al detalle en la restauración es simplemente inigualable. Mi Patek Philippe parece haber salido de la fábrica ayer." },
    { name: "Elena Von Berg", role: "Historiadora de Arte", text: "Chronos Heritage no solo vende relojes, venden fragmentos de historia perfectamente preservados. Una joya en Ginebra." },
    { name: "Marcus Thorne", role: "Entusiasta de Horología", text: "La curaduría es excepcional. Encontré piezas que no había visto ni en las casas de subastas más prestigiosas del mundo." }
  ];

  const features = [
    { icon: <Shield size={32} />, title: "Originalidad Certificada", desc: "Cada pieza es autenticada por nuestros maestros relojeros." },
    { icon: <Award size={32} />, title: "Garantía de Por Vida", desc: "Respaldamos la precisión de cada movimiento vintage." },
    { icon: <Sparkles size={32} />, title: "Restauración Maestra", desc: "Preservando la pátina original y la perfección mecánica." }
  ];

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      <Preloader />
      <CustomCursor />
      <div className="noise-overlay"></div>
      
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--background)' }}>
        <motion.div 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, y }}
        >
          <Image
            src="/hero.png"
            alt="Mecanismo de Reloj Vintage"
            fill
            priority
            style={{ objectFit: 'cover', opacity: 0.6 }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, var(--background) 20%, transparent 100%)' }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, var(--background) 0%, transparent 30%)' }}></div>
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ color: 'var(--accent)', fontSize: '1.1rem', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '2rem' }}
              >
                Excelencia desde 1924
              </motion.h2>
              <h1 style={{ marginBottom: '2rem', lineHeight: '1.1' }}>
                El Arte de la <br /> <span style={{ WebkitTextStroke: '1px var(--accent)', color: 'transparent' }}>Precisión</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#bbb', marginBottom: '3rem', maxWidth: '600px', borderLeft: '3px solid var(--accent)', paddingLeft: '2rem' }}>
                Curaduría de las piezas más excepcionales del mundo. 
                Historia en tu muñeca, legado en tu alma.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#coleccion" className="btn">Explorar Archivo</motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#legado" className="btn btn-secondary">Nuestro Legado</motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              style={{ position: 'relative', height: '600px', filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.2))' }}
            >
              <Image
                src="/watch-gold.png"
                alt="Reloj Vintage Destacado"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)', color: 'var(--accent)', opacity: 0.6 }}
        >
          <div style={{ width: '2px', height: '50px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}></div>
        </motion.div>
      </section>

      {/* Trust Features */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--secondary)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', padding: '4rem 0' }}>
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>{f.title}</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="coleccion" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1rem' }}
            >
              Obras Maestras Curadas
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: '3px', background: 'var(--accent)', margin: '0 auto 2rem' }}
            ></motion.div>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--muted)', fontSize: '1.1rem' }}>
              Cada pieza de nuestra colección ha sido seleccionada por su importancia histórica, 
              integridad mecánica y estética atemporal.
            </p>
          </div>

          <div className="grid-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                index={index}
                title={product.title}
                price={product.price}
                year={product.year}
                image={product.image}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <div className="btn" style={{ padding: '20px 60px' }}>Ver Archivo Completo</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ background: 'var(--secondary)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ color: 'white' }}>Voces de Coleccionistas</h2>
            <p style={{ color: 'var(--muted)' }}>Lo que dicen nuestros clientes más exclusivos</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ textAlign: 'center' }}
              >
                <Quote size={40} color="var(--accent)" style={{ opacity: 0.3, marginBottom: '1.5rem', margin: '0 auto' }} />
                <p style={{ fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.1rem' }}>&quot;{t.text}&quot;</p>
                <h5 style={{ color: 'white', marginBottom: '0.2rem' }}>{t.name}</h5>
                <p style={{ color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="legado" className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', color: 'white' }}>Siglos de <br/> Tradición</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Nacido en el corazón de Ginebra, Chronos Heritage ha dedicado más de un siglo 
                a conectar coleccionistas exigentes con los relojes más significativos jamás fabricados.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '3rem' }}>
                Nuestra red de expertos abarca todo el mundo, desde las casas de subastas de Londres 
                hasta colecciones privadas en Tokio. No solo vendemos relojes; preservamos legados.
              </p>
              <div style={{ display: 'flex', gap: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', margin: 0 }}>40+</h3>
                  <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Años de Experiencia</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', margin: 0 }}>12k</h3>
                  <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Relojes Restaurados</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card" 
              style={{ padding: '1rem', position: 'relative' }}
            >
              <div style={{ position: 'relative', height: '550px', width: '100%' }}>
                <Image src="/watch-silver.png" alt="Herencia Suiza" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', backgroundColor: 'var(--accent)', color: 'var(--background)', padding: '30px', borderRadius: '2px', maxWidth: '250px' }}>
                  <p style={{ fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', fontSize: '0.85rem' }}>
                    &quot;Un reloj es la única pieza de joyería que un hombre debería necesitar.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--accent)', color: 'var(--background)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--background)', fontSize: '3rem', marginBottom: '2rem' }}>Únete al Club Privado</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', fontWeight: 600 }}>
            Acceso anticipado a piezas raras y eventos exclusivos de horología en todo el mundo.
          </p>
          <div className="btn" style={{ borderColor: 'var(--background)', color: 'var(--background)', padding: '20px 80px' }}>Solicitar Acceso</div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" style={{ borderTop: '1px solid var(--border)', padding: '100px 0 50px', background: '#020402' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '4rem', marginBottom: '80px' }}>
            <div>
              <h3 style={{ color: 'var(--accent)', fontSize: '2rem', letterSpacing: '4px', marginBottom: '2rem' }}>CHRONOS</h3>
              <p style={{ maxWidth: '350px', color: 'var(--muted)', fontSize: '1rem' }}>
                El destino premier para la horología vintage. Dedicación al pasado, precisión para el futuro.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="#" className="text-accent"><Globe size={24} /></a>
                <a href="#" className="text-accent"><Mail size={24} /></a>
                <a href="#" className="text-accent"><MessageSquare size={24} /></a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'white', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Colecciones</h4>
              <ul style={{ color: 'var(--muted)', lineHeight: '2.5' }}>
                <li><a href="#">Archivo Rolex</a></li>
                <li><a href="#">Patek Philippe</a></li>
                <li><a href="#">The Speedmaster</a></li>
                <li><a href="#">Relojes Militares</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'white', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Soporte</h4>
              <ul style={{ color: 'var(--muted)', lineHeight: '2.5' }}>
                <li><a href="#">Envíos</a></li>
                <li><a href="#">Autenticación</a></li>
                <li><a href="#">Visitar Boutique</a></li>
                <li><a href="#">Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'white', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Visítanos</h4>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '10px' }}>
                <MapPin size={18} className="text-accent" />
                123 Rue du Rhône, 1204<br/>
                Ginebra, Suiza
              </p>
              <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '2px' }}>
                <p style={{ fontSize: '0.8rem', color: 'white', fontWeight: 600, marginBottom: '5px' }}>Suscríbete al Archivo</p>
                <div style={{ display: 'flex' }}>
                  <input type="text" placeholder="Tu Email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', color: 'white', padding: '10px 0', width: '100%', outline: 'none' }} />
                  <button style={{ background: 'transparent', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}><ArrowRight size={20} /></button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#444', fontSize: '0.8rem' }}>
            <div>&copy; 2024 Chronos Heritage. Todos los derechos reservados.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <span>Términos</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
