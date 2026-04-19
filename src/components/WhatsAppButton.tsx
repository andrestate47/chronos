'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Example number
  const message = "Hola, estoy interesado en sus relojes vintage.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        zIndex: 1000,
        cursor: 'pointer'
      }}
    >
      <MessageCircle size={32} />
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        style={{
          position: 'absolute',
          right: '70px',
          backgroundColor: 'white',
          color: '#333',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}
      >
        ¿En qué podemos ayudarte?
      </motion.span>
    </motion.a>
  );
}
