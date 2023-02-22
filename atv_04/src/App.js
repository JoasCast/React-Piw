import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PaginaPostar } from "./components/pages/PaginaPostar/paginaPostar";
import { PaginaPrincipal } from "./components/pages/PaginaPrincipal/paginaPrincipal";

function App() {
  return (
    <div className="paginaTotal">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>} />
          <Route path="/postar" element={<PaginaPostar></PaginaPostar>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
