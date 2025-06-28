import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import AdminSidebar from "../../components/AdminSidebar";
import NavBar2 from "../../components/NavBar2";
import { UserSearch } from "lucide-react";

const DashboardAdmin = () => {
  const [search, setSearch] = useState("");
  const [admins, setAdmins] = useState([]);

  // 🔄 Charger les administrateurs depuis l’API
  useEffect(() => {
    axios.get("http://localhost:5000/api/admins")
      .then((res) => setAdmins(res.data))
      .catch((err) => console.error("Erreur lors de la récupération des admins :", err));
  }, []);

  const filteredAdmins = admins.filter((s) =>
    `${s.nom} ${s.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (index) => {
    const updated = [...admins];
    updated.splice(index, 1);
    setAdmins(updated);
  };

  return (
    <div className="p-8">
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
              Dashboard Administrateurs
            </h2>

            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Rechercher un admin..."
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

            <div className="overflow-x-auto">
              <motion.table
                className="min-w-full text-sm border-collapse rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <thead className="bg-gray-500 text-white text-left">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">Prénom</th>
                    <th className="p-3">Email</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmins.map((s, idx) => (
                    <motion.tr
                      key={idx}
                      className="border-b hover:bg-orange-50 transition duration-200"
                      whileHover={{ scale: 1.01 }}
                    >
                      <td className="p-3">{s.nom}</td>
                      <td className="p-3">{s.prenom}</td>
                      <td className="p-3">{s.email}</td>
                      <td className="p-3 flex flex-col items-center gap-2">
                        <button
                          className="bg-gray-400 hover:bg-orange-300 text-gray-900 px-4 py-1 rounded text-xs w-24"
                          onClick={() => alert("Modifier admin")}
                        >
                          Modifier
                        </button>
                        <button
                          className="bg-red-300 hover:bg-red-600 text-gray-900 px-4 py-1 rounded text-xs w-24"
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

export default DashboardAdmin;
