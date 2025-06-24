import { useNavigate } from "react-router-dom";
import img2 from '../assets/SON01002.jpg';
import NavBar1 from "../components/NavBar1";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  const navigate = useNavigate();

  const handleConnexion = (e) => {
    e.preventDefault();

    if (!email || !motDePasse) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    if (email === "admin@sonatrach.dz") {
      navigate("/admin");
    } else if (email === "encadreur@sonatrach.dz") {
      navigate("/encadreur");
    } else if (email === "stagiaire@sonatrach.dz") {
      navigate("/stagiaire");
    } else {
      setErreur("Email ou mot de passe incorrect.");
    }
  };

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
    <div className="container d-flex align-items-center justify-content-center min-vh-100 ">
      <NavBar1 />
       <img
          src={img2}
          alt="droite"
          className="hidden sm:block absolute   object-cover z-0"
          style={{ objectPosition: 'right' }}
        />
      <motion.div className="col-md-6 col-lg-4  p-4 rounded shadow z-20" id="login"
      ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    
  >
       
        <h2 className="text-center mb-4 text-gray-800">Connexion</h2>

        {erreur && (
          <div className="alert alert-danger text-center">{erreur}</div>
        )}

        <form onSubmit={handleConnexion}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-base text-gray-800">
              Adresse email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="nom@exemple.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="motDePasse" className="form-label text-base text-gray-800">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="motDePasse"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="w-100 rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
           Se connecter
          </button>

        </form>
      </motion.div>
    </div>
  );
}

export default Login;
