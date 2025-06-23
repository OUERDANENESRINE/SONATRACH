import React, { useState } from "react";

function CreateAdmin() {
  const [admin, setAdmin] = useState({ nom: "", prenom: "", email: "", motDePasse: "" });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvel admin :", admin);
    // ici appel à l'API ou autre
    setAdmin({ nom: "", prenom: "", email: "", motDePasse: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Créer un nouvel administrateur</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4 max-w-lg">
        <input name="nom" value={admin.nom} onChange={handleChange} placeholder="Nom" className="w-full border p-2 rounded" required />
        <input name="prenom" value={admin.prenom} onChange={handleChange} placeholder="Prénom" className="w-full border p-2 rounded" required />
        <input type="email" name="email" value={admin.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
        <input type="password" name="motDePasse" value={admin.motDePasse} onChange={handleChange} placeholder="Mot de passe" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Créer l'admin</button>
      </form>
    </div>
  );
}

export default CreateAdmin;
