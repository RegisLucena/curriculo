import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lyrics = [
  { time: 298.85, text: "Time changed" },
  { time: 301.20, text: "We're different" },
  { time: 303.45, text: "But my mind still says redundant things" },
  { time: 307.35, text: "Can I not think" },
  { time: 310.85, text: "Will you love this part of me?" },
  { time: 315.20, text: "My lover is" },
  { time: 318.45, text: "The day I can't forget" },
  { time: 322.25, text: "Furthering my distance from you" },
];

export default function Lyrics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulação do tempo da música (apenas para demonstração)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lyrics.length);
    }, 3000); // Muda a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white overflow-hidden">
      <div className="relative flex flex-col items-center text-center px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            {/* Texto Secundário (Anterior) */}
            {currentIndex > 0 && (
              <p className="text-gray-500 text-sm mb-2 opacity-50">
                {lyrics[currentIndex - 1].text}
              </p>
            )}

            {/* Texto Principal */}
            <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight">
              {lyrics[currentIndex].text}
            </h1>

            {/* Texto Seguinte (Próximo) */}
            {currentIndex < lyrics.length - 1 && (
              <p className="text-gray-500 text-sm mt-4 opacity-50">
                {lyrics[currentIndex + 1].text}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Efeito de Corações (Decoração) */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Aqui você poderia adicionar partículas de coração flutuando */}
        </div>
      </div>
    </div>
  );
}