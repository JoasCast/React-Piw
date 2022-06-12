import "./navegador.css";

export function Navegador() {
  return (
    <nav className="navegador">
      <h3 className="navTitulo">rede Social</h3>
      <button className="navButton">linha do tempo</button>
      <button className="navButton">postar</button>
      <span className="usuario">Joás</span>
    </nav>
  );
}
