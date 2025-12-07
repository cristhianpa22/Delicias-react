import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Header from './Header';

export default function HeaderContainer({openModalCarrito}){


const [menuOpen, setMenuOpen] = useState(false);

  const  {cartItems}  = useCart();

  const Location = useLocation();

  const isLoginPath = Location.pathname.startsWith('/login');
  const isDashboardPath = Location.pathname.startsWith('/dashboard');


  const navLinkTo = isLoginPath ? '/' : isDashboardPath ? '/' : '/login';
  const navLinkText = isLoginPath ? 'Tienda' : isDashboardPath ? 'Cerrar Sesión' : 'Iniciar Sesión';

  const handleActionClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    else if (!menuOpen) {
      setMenuOpen(true);
    }
  };

  return(
    <Header 
    openModalCarrito={openModalCarrito}
    cartItem={cartItems}
    menuOpen={menuOpen}
    navLinkTo={navLinkTo}
    navLinkText={navLinkText}
    handleActionClick={handleActionClick}
    />

  )


}