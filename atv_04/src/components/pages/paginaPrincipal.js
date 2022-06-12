//essa é a paginaFeed que eu so vi agr que tem nome 

import "./paginaPrincipal.css";
import { Navegador } from "../commons/navegador/navegador";
import { Feed } from "./Feed";

export function PaginaPrinipal() {
  return (
    <div>
      <Navegador></Navegador>
      <Feed></Feed>
    </div>
  );
}
