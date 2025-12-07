import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <section className="min-h-screen flex justify-center items-center p-6 ">
      <div
        className="
          relative w-full max-w-sm md:max-w-xl lg:max-w-[900px] rounded-[20px] overflow-hidden
          bg-gradient-to-br from-[#D6C2CB] to-[#CCADBB]
          shadow-[0_6px_18px_rgba(20,20,20,0.06)]
        "
      >
        <img
          src="/images/login.sinfondo.png"
          alt="Imagen de login"
          className="
            absolute top-0 left-0 w-full h-full object-contain
            pointer-events-none select-none
            z-30
            hidden md:block 
          "
        />

        <div
          className="
            relative z-20 flex flex-col md:flex-row md:justify-end items-center 
            min-h-[520px] p-8 md:px-10 lg:px-15 py-10
          "
        >
          
          <div className="w-full md:w-[50%] md:pl-10 font-perfect">
            <h3 className="text-[35px] text-center md:text-left font-bold text-[#813563] mb-6">
              Iniciar sesion
            </h3>
            <form onSubmit={handleLogin}
            >
              <div className="flex flex-col mb-4">
                <label className="text-[#6B6B6B] font-medium mb-1">Correo</label>
                <input
                  type="email"
                  required
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

              <div className="flex flex-col mb-6">
                <label className="text-[#6B6B6B] font-medium mb-1">Contraseña</label>
                <input
                  type="password"
                  required
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

              <button
                type="submit"
                className="
                  bg-[#B0C8BB] text-[#5B7F6B] w-full py-3 rounded-[10px] font-semibold
                  transition duration-200 ease-[cubic-bezier(.2,.9,.3,1)]
                  hover:-translate-y-[2px]
                  hover:shadow-[0_8px_20px_rgba(30,157,138,0.12)]
                "
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}
