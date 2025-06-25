import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16" id='footer'>
      <div className="container mx-auto px-4 flex-1 md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Plateforme de gestion des stagiaires. Tous droits réservés.</p>

       
      </div>
    </footer>
  );
}
