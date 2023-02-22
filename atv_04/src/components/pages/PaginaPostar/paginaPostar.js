import "./paginaPostar.css";
import { Navegador } from "../../commons/navegador/navegador";
import React from "react";

// import MyContext from "../PaginaPostar";

import { Formulario } from "../../Formulario/";

export function PaginaPostar() {
  return (
    <div>
      <Navegador></Navegador>
      <Formulario></Formulario>
    </div>
  );
}
