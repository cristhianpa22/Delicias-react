import ProductTienda from "./pages/pruducTienda.jsx";
import DashBoard from "./pages/dashboard.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import useModal from "./hooks/useModal.js";
import Carrusel from "./components/carrusel.jsx";
import VistaLogin from "./pages/login.jsx";


function App() {

  const [isOpenCarrito, openModalCarrito, closeModalCarrito] = useModal();
  return (
    <section className="bg-rose-100">
      <BrowserRouter>
        <Header openModalCarrito={openModalCarrito} />
        <Routes>
          <Route path="/" element={<ProductTienda isOpenCarrito={isOpenCarrito} closeModalCarrito={closeModalCarrito} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<VistaLogin />} />
        </Routes>
        <Carrusel />
        <Footer />
      </BrowserRouter>
    </section>

  )
}

export default App
