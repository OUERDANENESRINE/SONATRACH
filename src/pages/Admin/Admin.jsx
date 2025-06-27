import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "../../components/AdminSidebar";
import SearchBar from "../../components/SearchBar";
import NavBar2 from "../../components/NavBar2";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const [admins, setAdmins] = useState([
    { nom: "Admin", prenom: "Principal", email: "admin@sonatrach.dz" },
    { nom: "Messaoudi", prenom: "Khaled", email: "k.messaoudi@sonatrach.dz" }
  ]);

  const [encadreurs, setEncadreurs] = useState([
    { nom: "Hamissi", prenom: "Salah", email: "hamissi@sonatrach.dz" },
    { nom: "Brahimi", prenom: "Yacine", email: "yacine@sonatrach.dz" }
  ]);

  const [stagiaires, setStagiaires] = useState([
    { nom: "Ouerdane", prenom: "Nesrine", email: "nesrine@usthb.dz" },
    { nom: "Benali", prenom: "Yasmine", email: "yasmine@usthb.dz" },
    { nom: "Said", prenom: "Rania", email: "rania@esi.dz" }
  ]);

  const [stages, setStages] = useState([
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
  ]);

  const filteredAdmins = admins.filter((a) =>
    `${a.nom} ${a.prenom}`.toLowerCase().includes(search.toLowerCase())
  );
  const filteredEncadreurs = encadreurs.filter((e) =>
    `${e.nom} ${e.prenom}`.toLowerCase().includes(search.toLowerCase())
  );
  const filteredStagiaires = stagiaires.filter((s) =>
    `${s.nom} ${s.prenom}`.toLowerCase().includes(search.toLowerCase())
  );
  const filteredStages = stages.filter((stage) =>
    stage.theme.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (index, listSetter, currentList) => {
    const updated = [...currentList];
    updated.splice(index, 1);
    listSetter(updated);
  };

  const renderActions = (index, deleteHandler) => (
    <div className="flex space-x-2">
      <button className="bg-blue-200 text-white px-2 py-1 rounded hover:bg-yellow-300 text-sm">
        Modifier
      </button>
      <button
        className="bg-red-300 text-white px-2 py-1 rounded hover:bg-red-400 text-sm"
        onClick={deleteHandler}
      >
        Supprimer
      </button>
    </div>
  );

  return (
    <div className="p-8" id="DashBoard-users">
      <NavBar2 />
      <AdminSidebar />
      <div className="ml-64 mt-10 flex justify-center">
        <motion.div
          className="px-8 py-10 w-full max-w-[1400px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-200 rounded-xl shadow-lg p-10 text-gray-800">
            <h2 className="text-2xl font-bold text-center text-gray mb-6">
              Dashboard Utilisateurs
            </h2>
            <div className="flex justify-center mb-6">
              <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Admins */}
              <div className="bg-white bg-opacity-20 rounded-lg shadow p-6 md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-orange-300">Administrateurs</h3>
                  <button
                    className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm"
                    onClick={() => window.location.href = "/admin/CreateAdmin"}
                  >
                    + Ajouter
                  </button>
                </div>
                <ul className="space-y-2">
                  {filteredAdmins.map((a, idx) => (
                    <li key={idx} className="border border-gray p-3 rounded hover:bg-orange-100 hover:bg-opacity-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <strong>{a.nom} {a.prenom}</strong><br />
                          <span className="text-sm text-gray-400">{a.email}</span>
                        </div>
                        {renderActions(idx, () => handleDelete(idx, setAdmins, admins))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Encadreurs */}
              <div className="bg-white bg-opacity-20 rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-orange-300">Encadreurs</h3>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm" onClick={() => window.location.href = "/admin/CreateEncadreur"}>+ Ajouter</button>
                </div>
                <ul className="space-y-2">
                  {filteredEncadreurs.map((e, idx) => (
                    <li key={idx} className="border border-gray p-3 rounded hover:bg-orange-100 hover:bg-opacity-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <strong>{e.nom} {e.prenom}</strong><br />
                          <span className="text-sm text-gray-400">{e.email}</span>
                        </div>
                        {renderActions(idx, () => handleDelete(idx, setEncadreurs, encadreurs))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stagiaires */}
              <div className="bg-white bg-opacity-20 rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-orange-300">Stagiaires</h3>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm" onClick={() => window.location.href = "/admin/CreateStagiaire"}>+ Ajouter</button>
                </div>
                <ul className="space-y-2">
                  {filteredStagiaires.map((s, idx) => (
                    <li key={idx} className="border border-gray p-3 rounded hover:bg-orange-100 hover:bg-opacity-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <strong>{s.nom} {s.prenom}</strong><br />
                          <span className="text-sm text-gray-400">{s.email}</span>
                        </div>
                        {renderActions(idx, () => handleDelete(idx, setStagiaires, stagiaires))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stages */}
              <div className="bg-white bg-opacity-20 rounded-lg shadow p-6 md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-orange-300">Stages</h3>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm" onClick={() => window.location.href = "/admin/CreateStage"}>+ Ajouter</button>
                </div>
                <ul className="space-y-3">
                  {filteredStages.map((stage, idx) => (
                    <li key={idx} className="border border-gray p-3 rounded hover:bg-orange-100 hover:bg-opacity-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <strong>{stage.theme}</strong> — {stage.dateDebut} ➝ {stage.dateFin}<br />
                          <span className="text-sm">{stage.description}</span><br />
                          <span className="text-sm text-orange-400 font-semibold">État : {stage.etat}</span>
                        </div>
                        {renderActions(idx, () => handleDelete(idx, setStages, stages))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
