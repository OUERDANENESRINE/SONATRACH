import { motion, useScroll } from "framer-motion";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Barre de progression fixée en haut */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,          // un peu plus fin ?
          originX: 0,
          backgroundColor: "#ffffff",
          zIndex: 50          // passe AU‑DESSUS du reste
        }}
      />
      {/* Contenu long pour pouvoir scroller */}
      <Content />
    </>
  );
}

function Content() {
  return (
    <article
      style={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }}
    >
      {/* … ton texte ou tes sections ici … */}
    </article>
  );
}
