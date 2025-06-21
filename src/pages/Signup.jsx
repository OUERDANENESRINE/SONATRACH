// src/pages/Signup.jsx
import { useState } from "react";

function Signup() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil créé !");
    // Ici tu pourrais enregistrer dans un backend ou localStorage
  };

  return (
    <div className="container mt-5">
      <h2>Créer un profil</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nom</label>
          <input type="text" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Prénom</label>
          <input type="text" className="form-control" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input type="password" className="form-control" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
    </div>
  );
}

export default Signup;
