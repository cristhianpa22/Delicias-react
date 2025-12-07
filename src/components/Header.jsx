import '../index.css'
import { Link } from 'react-router-dom';

export default function Header({ 
  openModalCarrito,
  cartItem,
  menuOpen,
  navLinkTo,
  navLinkText,
  handleActionClick
}) {

  
  return (

    <header className="w-full flex items-center justify-center p-8 mb-6 px-4 relative">
      <div
        className="
          w-full max-w-[1400px]
          bg-[#f4edf275]
          border border-[#daacb269]
          rounded-2xl
          h-auto md:h-[120px]
          px-4 md:px-10
          flex items-center justify-between
          shadow-[0_0_8px_rgba(255,255,255,0.1)]
        "
      >
        {/* TITULOS */}
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl sm:text-4xl font-hello font-bold flex items-baseline gap-1 sm:gap-2">
            <span className="font-perfect text-white drop-shadow-sm">
              Pastelería
            </span>

            <span className="text-[#6a1a57] font-extrabold tracking-wide">
              Delicias React
            </span>
          </h1>

          <p className="hidden sm:block text-[#F37950] font-perfect font-semibold text-sm sm:text-lg mt-1 font-family[hello_valentica]">
            Dulce es poco, esto es irresistible.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-6 ">
          {/* Navegacion */}
          <Link
            to={navLinkTo}
            className="text-lg font-perfect font-bold text-[#6a1a57] 
            hover:text-[#F37950] transition-colors
            cursor-pointer"
          >
            {navLinkText}
          </Link>

          {navLinkTo !== '/' && <button
            className="
              relative flex items-center justify-center
              bg-[#6a1a57] text-white
              rounded-xl
              px-5 py-3
              shadow-md
              hover:scale-105 transition-transform
              cursor-pointer
            "
            onClick={openModalCarrito}
          >
            <img
              src="../../public/images/carrito.gif" className="w-6 opacity-90 "
              alt="Carrito de compras"
            />
            <span
              className="
                absolute -top-2 -right-2
                bg-[#F37750] text-white
                text-xs font-bold
                rounded-full
                px-[7px] py-[1px]
              "
            >
              {cartItem.length}
            </span>
          </button>}
        </div>

        <div className='md:hidden flex items-center gap-3'>
          <button
            className="p-2 bg-[#6a1a57] text-white rounded-xl"
            onClick={handleActionClick}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

      </div>
      <div
        className={`
          md:hidden 
          absolute top-full right-4 mt-2 z-50 
          bg-white border border-rose-200 
          rounded-xl shadow-lg p-4 transition-all duration-300 ease-in-out 
          w-1/2 min-w-[150px]
          ${menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        `}
      >
        <Link
          to={navLinkTo}
          onClick={handleActionClick}
          className="block w-full text-center py-2 text-lg font-bold text-[#6a1a57] hover:bg-rose-50 rounded-lg transition-colors"
        >
          {navLinkText}
        </Link>
        {navLinkTo !== '/' && (
          <button
            className="
                    relative flex items-center justify-center mx-auto mt-3 
                    bg-[#6a1a57] text-white rounded-xl p-3 w-4/5
                    shadow-md hover:scale-[1.02] transition-transform
                "
            onClick={() => {
              openModalCarrito();
              handleActionClick();
            }}
          >
            <img
              src="../../public/images/carrito.gif" className="w-6 opacity-90"
              alt="Carrito de compras"
            />
            <span className="absolute -top-1 -right-1 bg-[#F37950] text-white text-xs font-bold rounded-full px-[5px] py-[1px]">
              {cartItem.length}
            </span>
          </button>
        )}
      </div>

    </header>
  );
}
