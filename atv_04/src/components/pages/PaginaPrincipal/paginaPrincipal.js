import "./paginaPrincipal.css";
import { Navegador } from "../../commons/navegador/navegador";
import { Feed } from "./Feed";

export function PaginaPrincipal() {
  return (
    <div>
      <Navegador></Navegador>
      <Feed></Feed>
    </div>
  );
}


