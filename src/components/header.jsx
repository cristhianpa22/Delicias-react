import '../index.css'
import { Link, useLocation } from 'react-router-dom';
export default function Header( {openModalCarrito }) {

  const Location = useLocation ();

  const isAdminPath = Location.pathname.startsWith('/dashboard');

  const navLinkTo = isAdminPath ? '/' : '/dashboard';
  const navLinkText = isAdminPath ? 'Tienda' : 'Admin';

  return (

    <header className="w-full flex items-center justify-center mt-4 mb-6">
      <div
        className="
          w-full max-w-[1400px]
          bg-[#daacb23a]
          border border-[#daacb269]
          rounded-2xl
          h-[120px]
          px-10
          flex items-center justify-between
          shadow-[0_0_8px_rgba(255,255,255,0.1)]
        "
      >
        {/* titulos */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-hello font-bold flex items-baseline gap-2">
            <span className="font-[kg_perfect_penmanship] text-white drop-shadow-sm">
              Pastelería
            </span>

            <span className="text-[#6a1a57] font-extrabold tracking-wide">
              Sweet Tentation
            </span>
          </h1>

          <p className="text-[#F37950] font-perfect font-semibold text-lg mt-1 font-family[hello_valentica]">
            Dulce es poco, esto es irresistible.
          </p>
        </div>

        {/* navegacion */}
        {<Link
          to={navLinkTo}
          className="text-lg font-bold text-[#6a1a57] 
        hover:text-[#F37950] transition-colors
          cursor-pointer">{navLinkText}</Link>
        }

        {/* carrito */}
        {navLinkTo !== '/' && <button 
          className="
            relative flex items-center justify-center
            bg-[#6a1a57]
            text-white
            rounded-xl
            px-5 py-3
            shadow-md
            hover:scale-105 transition-transform
          "
          onClick={openModalCarrito}
        >
          <img
            src="./src/assets/images/carrito.gif" className="w-6 opacity-90"
          />
          <span
            className="
              absolute -top-2 -right-2
              bg-[#F37950] text-white
              text-xs font-bold
              rounded-full
              px-[7px] py-[1px]
            "
          >
            4
          </span>
        </button>}
      </div>
    </header>
  );
}
