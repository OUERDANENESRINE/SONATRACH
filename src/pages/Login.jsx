import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  const navigate = useNavigate();

  const handleConnexion = (e) => {
    e.preventDefault();

    if (!email || !motDePasse) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    if (email === "admin@sonatrach.dz") {
      navigate("/admin");
    } else if (email === "encadreur@sonatrach.dz") {
      navigate("/encadreur");
    } else if (email === "stagiaire@sonatrach.dz") {
      navigate("/stagiaire");
    } else {
      setErreur("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="col-md-6 col-lg-4 bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4">Connexion</h2>

        {erreur && (
          <div className="alert alert-danger text-center">{erreur}</div>
        )}

        <form onSubmit={handleConnexion}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="nom@exemple.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="motDePasse" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="motDePasse"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
