import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function Admin() {
  const [stages, setStages] = useState([
    {
      id: 1,
      theme: "Stage initial",
      description: "Exemple",
      dateDebut: "2025-01-01",
      dateFin: "2025-06-01",
      encadreur: { nom: "Hamissi", prenom: "Salah", email: "hamissi@sonatrach.dz" },
      stagiaires: [
        { nom: "Ouerdane", prenom: "Nesrine", email: "nesrine@usthb.dz" },
        { nom: "Benali", prenom: "Yasmine", email: "yasmine@usthb.dz" }
      ],
      etat: "en cours"
    }
  ]);

  const [nouveauStage, setNouveauStage] = useState({
    theme: "",
    description: "",
    dateDebut: "",
    dateFin: "",
    encadreur: { nom: "", prenom: "", email: "" },
    stagiaires: [
      { nom: "", prenom: "", email: "" },
      { nom: "", prenom: "", email: "" }
    ],
    etat: "en cours"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Gestion des champs de l'encadreur
    if (name.startsWith("encadreur.")) {
      const field = name.split(".")[1];
      setNouveauStage((prev) => ({
        ...prev,
        encadreur: { ...prev.encadreur, [field]: value },
      }));
    }
    // Gestion des champs des stagiaires
    else if (name.startsWith("stagiaire")) {
      const [_, index, field] = name.split(".");
      const i = parseInt(index, 10);
      const updatedStagiaires = [...nouveauStage.stagiaires];
      updatedStagiaires[i][field] = value;
      setNouveauStage((prev) => ({
        ...prev,
        stagiaires: updatedStagiaires,
      }));
    }
    // Autres champs (theme, description, etc.)
    else {
      setNouveauStage((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStage = {
      ...nouveauStage,
      id: Date.now(),
    };

    setStages([newStage, ...stages]);

    // Réinitialiser le formulaire
    setNouveauStage({
      theme: "",
      description: "",
      dateDebut: "",
      dateFin: "",
      encadreur: { nom: "", prenom: "", email: "" },
      stagiaires: [
        { nom: "", prenom: "", email: "" },
        { nom: "", prenom: "", email: "" }
      ],
      etat: "en cours",
    });
  };

  const supprimerStage = (id) => {
    if (window.confirm("Supprimer ce stage ?")) {
      setStages(stages.filter((s) => s.id !== id));
    }
  };

  const modifierStage = (id) => {
    alert(`Modifier stage ID ${id} - fonction à venir`);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-8 w-full">
        <h2 className="text-2xl font-bold mb-6 text-orange-700">
          Tableau de bord Administrateur des stages
        </h2>

        {/* FORMULAIRE D'AJOUT DE STAGE */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow mb-8 space-y-4"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Créer un nouveau stage
          </h3>

          <input
            type="text"
            name="theme"
            value={nouveauStage.theme}
            onChange={handleInputChange}
            placeholder="Thème"
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            value={nouveauStage.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="dateDebut"
              value={nouveauStage.dateDebut}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="date"
              name="dateFin"
              value={nouveauStage.dateFin}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <h4 className="font-semibold mt-4">Encadreur</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="encadreur.nom"
              value={nouveauStage.encadreur.nom}
              onChange={handleInputChange}
              placeholder="Nom"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="encadreur.prenom"
              value={nouveauStage.encadreur.prenom}
              onChange={handleInputChange}
              placeholder="Prénom"
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              name="encadreur.email"
              value={nouveauStage.encadreur.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded"
              required
            />
          </div>

          <h4 className="font-semibold mt-6">Stagiaire 1</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="stagiaire.0.nom"
              value={nouveauStage.stagiaires[0].nom}
              onChange={handleInputChange}
              placeholder="Nom"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="stagiaire.0.prenom"
              value={nouveauStage.stagiaires[0].prenom}
              onChange={handleInputChange}
              placeholder="Prénom"
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="stagiaire.0.email"
              value={nouveauStage.stagiaires[0].email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded"
            />
          </div>

          <h4 className="font-semibold mt-6">Stagiaire 2</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="stagiaire.1.nom"
              value={nouveauStage.stagiaires[1].nom}
              onChange={handleInputChange}
              placeholder="Nom"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="stagiaire.1.prenom"
              value={nouveauStage.stagiaires[1].prenom}
              onChange={handleInputChange}
              placeholder="Prénom"
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="stagiaire.1.email"
              value={nouveauStage.stagiaires[1].email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            Ajouter le stage
          </button>
        </form>

        {/* LISTE DES STAGES */}
        {stages.map((stage) => (
          <div key={stage.id} className="bg-white shadow rounded p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xl font-semibold text-orange-600">{stage.theme}</h4>
              <div className="space-x-2">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => modifierStage(stage.id)}
                >
                  ✏️ Modifier
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => supprimerStage(stage.id)}
                >
                  🗑️ Supprimer
                </button>
              </div>
            </div>

            <p><strong>Description :</strong> {stage.description}</p>
            <p><strong>Durée :</strong> {stage.dateDebut} ➝ {stage.dateFin}</p>
            <p><strong>État :</strong> {stage.etat}</p>

            <h6 className="mt-4 font-semibold">Encadreur</h6>
            <p>
              {stage.encadreur.nom} {stage.encadreur.prenom} — {stage.encadreur.email}
            </p>

            <h6 className="mt-4 font-semibold">Stagiaires</h6>
            <ul className="list-disc list-inside">
              {stage.stagiaires.map((stagiaire, idx) => (
                <li key={idx}>
                  {stagiaire.nom} {stagiaire.prenom} — {stagiaire.email}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
