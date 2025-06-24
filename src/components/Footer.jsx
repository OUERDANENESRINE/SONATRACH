import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-3 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-center text-sm">
        <p>&copy; {new Date().getFullYear()} Plateforme de gestion des stagiaires. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
