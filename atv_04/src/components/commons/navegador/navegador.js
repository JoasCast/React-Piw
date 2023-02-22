import { Link } from "react-router-dom";
import "./navegador.css"

export function Navegador() {
  return (
    <nav className="navegador">
      <h3 className="navTitulo">Rede Social</h3>
      <Link className="navButton" to={"/"}>for you</Link>
      <Link className="navButton" to={"/postar"}>
        postar
      </Link>
      <span className="usuario">usuario</span>
    </nav>
  );
}
