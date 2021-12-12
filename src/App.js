import Footer from "components/Footer";
import Categorias from "pages/Categorias";
import Contato from "pages/Contato";
import Detalhes from "pages/Detalhes";
import NotFound from "pages/NotFound";
import Produtos from "pages/Produtos";
import Sobre from "pages/Sobre";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./components/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="MainContent">
        <Routes>
          <Route path="/" exact element={<Produtos />} />
          <Route path="/produto/:id" exact element={<Detalhes />} />
          <Route path="/categoria/:id" exact element={<Categorias />} />
          <Route path="/sobre" exact element={<Sobre />} />
          <Route path="/contato" exact element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
