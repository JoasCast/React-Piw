import "./PaginaPrincipal.css";
import { Navegador } from "../../commom/navegador/navegador";
import { Conteudo } from "./conteudo";

function Cabecalho({ paginaAtual }) {
  return (
    <header className="cabecalho">
      <h1 className="logo">Diciplinas</h1>
      <span className="PaginaAtual">vc está na {paginaAtual}</span>
    </header>
  );
}

export function PaginaPrincipal() {
  return (
    <div>
      <Cabecalho paginaAtual="pagina de matricula"></Cabecalho>
      <Navegador></Navegador>
      <Conteudo></Conteudo>
    </div>
  );
}
