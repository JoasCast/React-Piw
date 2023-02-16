import "./navegador.css";

export function Navegador(props) {
  let Link = ({ linkTexto }) => (
    <a className="linksNav" href="http://aliexpress.com">
      {linkTexto}
    </a>
  );
  return (
    <nav className="navegador">
      <Link linkTexto="Link 1"></Link>
      <Link linkTexto="Link 2"></Link>
      <Link linkTexto="Link 3"></Link>
    </nav>
  );
}
