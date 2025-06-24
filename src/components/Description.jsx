import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Description = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

 return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="desc"
  >
    <h1 className="text-4xl font-semibold  text-balance text-gray-900 sm:text-6xl">
              Plateforme de gestion des stagiaires
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
                Attribuez, suivez, évaluez. Tout ce dont vous avez besoin pour une gestion optimale des stagiaires en entreprise.            </p>
  </motion.div>
);
};

export default Description;
