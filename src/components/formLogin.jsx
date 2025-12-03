import "../index.css";

export default function Login() {
  return (
    <section className="min-h-screen flex justify-center items-center p-6 
    bg-[radial-gradient(circle,_rgba(235,202,206,0.87)_0%,_rgba(236,220,185,0.62)_100%)]">
      <div
        className="
          relative w-full max-w-[900px] rounded-[20px] overflow-hidden
          bg-gradient-to-br from-[#D6C2CB] to-[#CCADBB]
          shadow-[0_6px_18px_rgba(20,20,20,0.06)]
        "
      >
    
        <img
          src="./src/assets/images/login.sinfondo.png"
          className="
            absolute top-0 left-0 w-full h-full object-contain
            pointer-events-none select-none
            z-30
          "
        />

        {/* contenido del login */}
        <div
          className="
            relative z-20 flex justify-end items-center
            min-h-[520px] px-15 py-10
          "
        >
          <div className="w-[50%] pl-10 font-perfect">

            <h3 className="text-[35px] pl-10 font-bold text-[#813563] mb-6">
              Iniciar sesion
            </h3>

            {/* correo */}
            <div className="flex flex-col mb-4">
              <label className="text-[#6B6B6B] font-medium mb-1">Correo</label>
              <input
                type="email"
                className="
                  px-4 py-3 rounded-[10px] border border-[#E3E3E3] bg-[#FAFAFA]
                  text-[#222] placeholder:text-[#9E9E9E]
                  focus:outline-none focus:ring-2 focus:ring-[#813563]
                  shadow-[inset_0_1px_4px_rgba(0,0,0,0.03)]
                  transition
                "
                placeholder="soySena@gmail.com"
              />
            </div>

            {/* contraseña */}
            <div className="flex flex-col mb-6">
              <label className="text-[#6B6B6B] font-medium mb-1">Contrasena</label>
              <input
                type="password"
                className="
                  px-4 py-3 rounded-[10px] border border-[#E3E3E3] bg-[#FAFAFA]
                  text-[#222] placeholder:text-[#9E9E9E]
                  focus:outline-none focus:ring-2 focus:ring-[#813563]
                  shadow-[inset_0_1px_4px_rgba(0,0,0,0.03)]
                  transition
                "
                placeholder="••••••••"
              />
            </div>

            {/* boton */}
            <button
              className="
                bg-[#B0C8BB] text-[#5B7F6B] w-full py-3 rounded-[10px] font-semibold
                transition duration-200 ease-[cubic-bezier(.2,.9,.3,1)]
                hover:-translate-y-[2px]
                hover:shadow-[0_8px_20px_rgba(30,157,138,0.12)]
              "
            >
              Entrar
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
