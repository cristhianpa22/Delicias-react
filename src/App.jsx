import ProductTienda from "./pages/pruducTienda.jsx";
import DashBoard from "./pages/dashboard.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import useModal from "./hooks/useModal.js";


function App() {

 const [isOpenCarrito, openModalCarrito, closeModalCarrito] = useModal();
  return (
    <>
         


      <BrowserRouter>
        <Header openModalCarrito={openModalCarrito} />
        <Routes>
          <Route path="/" element={<ProductTienda isOpenCarrito={isOpenCarrito} closeModalCarrito={closeModalCarrito}  />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
