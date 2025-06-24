import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import SearchBar from "../components/SearchBar";

const allEncadreurs = [
  { nom: "Hamissi", prenom: "Salah", email: "hamissi@sonatrach.dz" },
  { nom: "Brahimi", prenom: "Yacine", email: "yacine@sonatrach.dz" }
];

const allStagiaires = [
  { nom: "Ouerdane", prenom: "Nesrine", email: "nesrine@usthb.dz" },
  { nom: "Benali", prenom: "Yasmine", email: "yasmine@usthb.dz" },
  { nom: "Said", prenom: "Rania", email: "rania@esi.dz" }
];

const allStages = [
  {
    theme: "Stage Dev React",
    description: "Développement d’une application web",
    dateDebut: "2025-01-01",
    dateFin: "2025-06-01",
    etat: "en cours"
  },
  {
    theme: "Stage Dev Java",
    description: "Backend avec Spring Boot",
    dateDebut: "2024-07-01",
    dateFin: "2024-12-01",
    etat: "terminé"
  }
];

const allAdmins = [
  { nom: "Admin", prenom: "Principal", email: "admin@sonatrach.dz" },
  { nom: "Messaoudi", prenom: "Khaled", email: "k.messaoudi@sonatrach.dz" }
];

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filterByName = (list) =>
    list.filter((item) =>
      `${item.nom} ${item.prenom}`.toLowerCase().includes(search.toLowerCase())
    );

  const filteredEncadreurs = filterByName(allEncadreurs);
  const filteredStagiaires = filterByName(allStagiaires);
  const filteredAdmins = filterByName(allAdmins);
  const filteredStages = allStages.filter((stage) =>
    stage.theme.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h2 className="text-2xl font-bold text-orange-700 mb-6">Dashboard Utilisateurs</h2>

        {/* 🔍 Barre de recherche */}
        <SearchBar value={search} onChange={setSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Administrateurs */}
           <div className="bg-white rounded shadow p-6 mt-6 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Administrateurs</h3>
            <ul className="space-y-2">
              {filteredAdmins.map((a, idx) => (
                <li key={idx} className="border p-2 rounded hover:bg-orange-50">
                  <strong>{a.nom} {a.prenom}</strong><br />
                  <span className="text-sm text-gray-600">{a.email}</span>
                </li>
              ))}
              {filteredAdmins.length === 0 && <p className="text-gray-500">Aucun administrateur trouvé.</p>}
            </ul>
          </div>
          {/* Encadreurs */}
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Encadreurs</h3>
            <ul className="space-y-2">
              {filteredEncadreurs.map((e, idx) => (
                <li key={idx} className="border p-2 rounded hover:bg-orange-50">
                  <strong>{e.nom} {e.prenom}</strong><br />
                  <span className="text-sm text-gray-600">{e.email}</span>
                </li>
              ))}
              {filteredEncadreurs.length === 0 && <p className="text-gray-500">Aucun encadreur trouvé.</p>}
            </ul>
          </div>

          {/* Stagiaires */}
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Stagiaires</h3>
            <ul className="space-y-2">
              {filteredStagiaires.map((s, idx) => (
                <li key={idx} className="border p-2 rounded hover:bg-orange-50">
                  <strong>{s.nom} {s.prenom}</strong><br />
                  <span className="text-sm text-gray-600">{s.email}</span>
                </li>
              ))}
              {filteredStagiaires.length === 0 && <p className="text-gray-500">Aucun stagiaire trouvé.</p>}
            </ul>
          </div>

          {/* Stages */}
          <div className="bg-white rounded shadow p-6 mt-6 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Stages</h3>
            <ul className="space-y-3">
              {filteredStages.map((stage, idx) => (
                <li key={idx} className="border p-3 rounded hover:bg-orange-50">
                  <strong>{stage.theme}</strong> — {stage.dateDebut} ➝ {stage.dateFin}<br />
                  <span className="text-sm">{stage.description}</span><br />
                  <span className="text-sm text-orange-700 font-semibold">État : {stage.etat}</span>
                </li>
              ))}
              {filteredStages.length === 0 && <p className="text-gray-500">Aucun stage trouvé.</p>}
            </ul>
          </div>

         
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
