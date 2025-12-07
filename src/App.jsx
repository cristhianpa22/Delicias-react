import ProductTiendaContainer from "./pages/ProducTiendaContainer.jsx";
import DashBoardContainer from "./pages/DashBoardContainer.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer.jsx";
import Footer from "./components/Footer.jsx";
import useModal from "./hooks/useModal.js";
import Carrusel from "./components/Carrusel.jsx";
import VistaLogin from "./pages/Login.jsx";
import CardProvider from "./context/Cart.jsx"


function App() {

  const [isOpenCarrito,openModalCarrito, closeModalCarrito] = useModal();

  return (
    <section className="bg-[radial-gradient(circle,_rgba(235,202,206,0.87)_0%,_rgba(236,220,185,0.62)_100%)]">
      <CardProvider>
      <BrowserRouter>
        <HeaderContainer openModalCarrito={openModalCarrito}/>
        <Routes>
          <Route path="/" element={<ProductTiendaContainer isOpenCarrito={isOpenCarrito} closeModalCarrito={closeModalCarrito} />} />
          <Route path="/dashboard" element={<DashBoardContainer />} />
          <Route path="/login" element={<VistaLogin />} />
        </Routes>
        <Carrusel />
        <Footer />
      </BrowserRouter>
      </CardProvider>
    </section>

  )
}

export default App
