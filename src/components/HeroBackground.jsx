import img1 from '../assets/SON00.jpg';
import img2 from '../assets/SON01002.jpg';
import logo from '../assets/logo_transparent.png';

const HeroBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Image gauche : prend toute la hauteur et la moitié gauche */}
      <img
        src={img1}
        alt="gauche"
        className="absolute left-0 top-0 h-full w-1/2 object-cover"
        style={{ objectPosition: 'left' }}
      />

      {/* Image droite : prend toute la hauteur et la moitié droite */}
      <img
        src={img2}
        alt="droite"
        className="absolute right-0 top-0 h-full w-1/2 object-cover"
        style={{ objectPosition: 'right' }}
      />

      {/* Logo au centre */}
      <div className="flex items-center justify-center h-full z-10 relative">
        <img
          src={logo}
          alt="Logo"
          className="w-40 h-auto sm:w-60 animate-pulse"
        />
      </div>
    </div>
  );
};

export default HeroBackground;