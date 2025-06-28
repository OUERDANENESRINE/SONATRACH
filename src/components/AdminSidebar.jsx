import { Link, useLocation } from "react-router-dom";
import {
  UserPlus,
  Users,
  LayoutDashboard,
  UserCog,
  ShieldCheck,
  LogOut,
  Plus,
  Pencil,
  User,
  Briefcase,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

const AdminSidebar = () => {
  const location = useLocation();
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);

  

  return (
    <div className="w-60 h-screen bg-gradient-to-b from-gray-500 to-orange-300  p-6 fixed top-0 left-0 shadow-lg flex flex-col justify-between">
      {/* Logo */}
      <a href="/home" className="-m-1.5 pr-2">
        <img
          alt="logo"
          src={logo}
          className="h-8 w-auto"
          style={{ width: "60px", height: "80px" }}
        />
      </a>

      {/* Menu */}
      <div >
        <ul className="space-y-2  " id="admin-sidebar">
          
          {/* Dashboard (avec sous-menu) */}
          <li
  className="relative"
  onMouseEnter={() => setShowDashboardMenu(true)}
  onMouseLeave={() => setShowDashboardMenu(false)}
>
  <button className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white/30 transition-all">
    <div className="flex items-center gap-3">
      <LayoutDashboard size={16} />
      <span>Dashboard</span>
    </div>
    {showDashboardMenu ? (
      <ChevronDown size={16} className="transition-transform rotate-180" />
    ) : (
      <ChevronRight size={16} className=" transition-transform" />
    )}
  </button>

  {showDashboardMenu && (
    <ul className="p-2 absolute left-full top-0 ml-2 w-60 bg-gradient-to-b from-gray-500 to-orange-300 rounded-lg shadow-lg z-50">
      <li>
        <Link
          to="/admin/dashboardStagiaire"
          className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
        >
          <User size={18} />
          <span>Stagiaires</span>
        </Link>
      </li>
      <hr className="my-1 border-gray-800" />
      <li>
        <Link
          to="/admin/dashboardEncadreur"
          className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
        >
          <ShieldCheck size={18} />
          <span>Encadrants</span>
        </Link>
      </li>
      <hr className="my-1 border-gray-800" />
      <li>
        <Link
          to="/admin/dashboardAdmin"
          className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
        >
          <ShieldCheck size={18} />
          <span>Admins</span>
        </Link>
      </li>
      <hr className="my-1 border-gray-800" />
      <li>
        <Link
          to="/admin/dashboardStage"
          className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
        >
          <Briefcase size={18} />
          <span>Stages</span>
        </Link>
      </li>
    </ul>
  )}
</li>


          {/* Ajouter */}
          <li
            className="relative"
            onMouseEnter={() => setShowAddMenu(true)}
            onMouseLeave={() => setShowAddMenu(false)}
          >
            <button className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white/30 transition-all">
              <div className="flex items-center gap-3">
                <Plus size={18} />
                <span>Ajouter</span>
              </div>
              {showAddMenu ? (
                <ChevronDown size={16} className="transition-transform rotate-180" />
              ) : (
                <ChevronRight size={16} className="transition-transform" />
              )}
            </button>
            {showAddMenu && (
              <ul className="p-2 absolute left-full top-0 ml-2 w-60 bg-gradient-to-b from-gray-500 to-orange-300  rounded-lg shadow-lg z-50">
                <li>
                  <Link
                    to="/admin/CreateStagiaire"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <UserPlus size={18} />
                    <span>Stagiaire</span>
                  </Link>
                </li>
                <hr className="my-1 border-gray-800" />
                <li>
                  <Link
                    to="/admin/CreateEncadreur"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <UserPlus size={18} />
                    <span>Encadrant</span>
                  </Link>
                </li>
                <hr className="my-1 border-gray-800" />
                <li>
                  <Link
                    to="/admin/CreateAdmin"
                    className="flex items-center gap-3 px-4 py-2  text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <UserPlus size={18} />
                    <span>Admin</span>
                  </Link>
                </li>
                <hr className="my-1 border-gray-800" />
                <li>
                  <Link
                    to="/admin/CreateStage"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <Plus size={18} />
                    <span>Stage</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Modifier */}
          <li
            className="relative"
            onMouseEnter={() => setShowEditMenu(true)}
            onMouseLeave={() => setShowEditMenu(false)}
          >
            <button className="w-full flex items-center justify-between px-4 py-2 rounded-lg  hover:bg-white/30 transition-all">
              <div className="flex items-center gap-3">
                <Pencil size={18} />
                <span>Modifier</span>
              </div>
              {showEditMenu ? (
                <ChevronDown size={16} className="transition-transform rotate-180" />
              ) : (
                <ChevronRight size={16} className="transition-transform" />
              )}
            </button>
            {showEditMenu && (
              <ul className="p-2 absolute left-full top-0 ml-2 w-60 bg-gradient-to-b from-gray-500 to-orange-300  rounded-lg shadow-lg z-50">
                <li>
                  <Link
                    to="/admin/ModifierStagiaire"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800  hover:bg-white/30 rounded-md no-underline"
                  >
                    <UserCog size={18} />
                    <span>Stagiaire</span>
                  </Link>
                </li>
                <hr className="my-1 border-gray-800" />
                <li>
                  <Link
                    to="/admin/ModifierEncadreur"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <UserCog size={18} />
                    <span>Encadrant</span>
                  </Link>
                </li>
                <hr className="my-1 border-gray-800" />
                <li>
                  <Link
                    to="/admin/ModifierAdmin"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <UserCog size={18} />
                    <span>Admin</span>
                  </Link>
                </li>
                <hr className="my-1 border-gray-800" />
                <li>
                  <Link
                    to="/admin/ModifierStage"
                    className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-white/30 rounded-md no-underline"
                  >
                    <Pencil size={18} />
                    <span>Stage</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Déconnexion */}
      <div className="mt-10 pt-6 border-t border-gray-500">
        <Link
          to="/home"
          className="flex items-center gap-3 text-gray-800 px-4 py-2 rounded-lg  hover:bg-red-600 no-underline"
        >
          <LogOut size={18} />
          <span>Déconnexion</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
