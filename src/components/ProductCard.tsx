'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  year: string;
  image: string;
  index: number;
}

export default function ProductCard({ title, price, year, image, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card"
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ 
        position: 'relative', 
        height: '350px', 
        marginBottom: '2rem', 
        overflow: 'hidden',
        backgroundColor: '#050a06'
      }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(2,4,2,0.8)',
          padding: '8px 12px',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid var(--border)',
          fontSize: '0.8rem',
          color: 'var(--accent)',
          backdropFilter: 'blur(5px)'
        }}>
          <Clock size={14} />
          <span>{year}</span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          marginBottom: '1rem' 
        }}>
          <h3 style={{ 
            fontSize: '1.4rem', 
            margin: 0, 
            color: 'var(--foreground)',
            fontFamily: 'var(--font-heading)'
          }}>{title}</h3>
        </div>

        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--accent)', 
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          marginBottom: '2rem' 
        }}>{price}</p>
        
        <motion.button 
          whileHover={{ gap: '15px' }}
          className="btn" 
          style={{ 
            width: '100%', 
            marginTop: 'auto',
            display: 'flex',
            gap: '8px'
          }}
        >
          Ver Pieza Maestra <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
