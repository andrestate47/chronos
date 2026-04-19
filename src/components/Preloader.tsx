'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#020402',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
          }}
        >
          <div style={{ position: 'relative', width: '200px', height: '200px' }}>
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '2px dashed var(--accent)',
                borderRadius: '50%',
                opacity: 0.3
              }}
            />
            {/* Hour Hand */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '2px',
                height: '50px',
                backgroundColor: 'var(--accent)',
                transformOrigin: 'top',
                marginTop: '-1px'
              }}
            />
            {/* Minute Hand */}
            <motion.div
              initial={{ rotate: 45 }}
              animate={{ rotate: 405 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '1px',
                height: '70px',
                backgroundColor: '#fff',
                transformOrigin: 'top',
                marginTop: '-1px'
              }}
            />
            {/* Center Pin */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '10px',
              height: '10px',
              backgroundColor: 'var(--accent)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px var(--accent)'
            }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <h3 style={{ 
              color: 'var(--accent)', 
              letterSpacing: '8px', 
              fontSize: '1.2rem', 
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>CHRONOS</h3>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent)', margin: '0 auto' }}></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
