import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserSearch } from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import NavBar2 from "../../components/NavBar2";

const DashboardStages = () => {
  const [search, setSearch] = useState("");

  const [stages, setStages] = useState([
    {
      theme: "Application Web",
      dateDebut: "2024-07-01",
      dateFin: "2024-09-01",
      encadrant: "M. Bensalah",
      stagiaire1: "Yasmine Benali",
      stagiaire2: "Nesrine Ouerdane",
    },
    {
      theme: "Analyse de données",
      dateDebut: "2024-06-15",
      dateFin: "2024-08-15",
      encadrant: "Mme. Larbi",
      stagiaire1: "Rania Said",
      stagiaire2: "Sara Khelifi",
    },
  ]);

  const getDuree = (start, end) => {
    const debut = new Date(start);
    const fin = new Date(end);
    const diff = fin.getTime() - debut.getTime();
    const jours = Math.ceil(diff / (1000 * 3600 * 24));
    return `${jours} jours`;
  };

  const handleDelete = (index) => {
    const updated = [...stages];
    updated.splice(index, 1);
    setStages(updated);
  };

  const filteredStages = stages.filter((s) =>
    `${s.theme} ${s.encadrant} ${s.stagiaire1} ${s.stagiaire2}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-8" >
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
            <h2 className="text-2xl font-bold text-center mb-6">
              Liste des Stages
            </h2>

            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Rechercher un stage..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
                <UserSearch
                  size={20}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            {/*  Tableau des stages */}
            <div className="overflow-x-auto">
              <motion.table
                className="min-w-full text-sm border-collapse rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <thead className="bg-gray-500 text-white text-left">
                  <tr>
                    <th className="p-3">Thème</th>
                    <th className="p-3">Début</th>
                    <th className="p-3">Fin</th>
                    <th className="p-3">Durée</th>
                    <th className="p-3">Encadrant</th>
                    <th className="p-3">Stagiaire 1</th>
                    <th className="p-3">Stagiaire 2</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStages.map((s, idx) => (
                    <motion.tr
                      key={idx}
                      className="border-b hover:bg-orange-50 transition duration-200"
                      whileHover={{ scale: 1.01 }}
                    >
                      <td className="p-3">{s.theme}</td>
                      <td className="p-3">{s.dateDebut}</td>
                      <td className="p-3">{s.dateFin}</td>
                      <td className="p-3">
                        {getDuree(s.dateDebut, s.dateFin)}
                      </td>
                      <td className="p-3">{s.encadrant}</td>
                      <td className="p-3">{s.stagiaire1}</td>
                      <td className="p-3">{s.stagiaire2}</td>
                      <td className="p-3 flex flex-col items-center gap-2">
                        <button
                          className="bg-gray-400 hover:bg-orange-300 text-white px-4 py-1 rounded text-xs w-24"
                          onClick={() => alert("Modifier stage")}
                        >
                          Modifier
                        </button>
                        <button
                          className="bg-red-300 hover:bg-red-600 text-white px-4 py-1 rounded text-xs w-24"
                          onClick={() => handleDelete(idx)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardStages;
