export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle,#951362_0%,#A8176F_100%)] text-white pt-0 pb-8 relative font-[Poppins]">

      {/* Nubes */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[110px] block">
          <defs>
            <radialGradient id="cloudGradient" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="rgba(235,202,206,0.87)" />
              <stop offset="100%" stopColor="rgba(236,220,185,0.62)" />
            </radialGradient>
          </defs>

          <path
            d="M0,80 C120,100 280,25 400,50 C520,75 600,0 720,30 
               C840,60 960,15 1080,50 C1200,85 1320,35 1440,65 
               L1440,0 L0,0 Z"
            fill="url(#cloudGradient)"
          />
        </svg>
      </div>

      {/* contenido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 lg:px-28 py-10 max-w-[1300px] mx-auto">

        {/* historia */}
        <div>
          <h3 className="font-perfect tracking-wider mb-4 text-md font-semibold">NUESTRA HISTORIA</h3>

          <p className="text-white/80 text-sm leading-relaxed">
            En 1986, mi abuela decidió compartir su receta secreta con todos sus nietos.
            Entre harina volando y mucha risa, nació una tradición familiar que hoy vive en
            <span className="text-[#F6BC59] font-semibold"> Pastelería Delicias</span>:
            postres hechos con amor, historia y un toque dulce de nostalgia.
          </p>
        </div>

        {/* informacion */}
        <div>
          <h3 className="font-perfect tracking-wider mb-4 text-md font-semibold">INFORMACIÓN</h3>

          <p className="text-sm text-white/80">
            <strong>Dirección:</strong> Calle 45 # 12-34 Bogotá, Colombia
          </p>
          <p className="text-sm text-white/80 mt-2">
            <strong>Teléfono:</strong> +57 320 555 8899
          </p>
          <p className="text-sm text-white/80 mt-2">
            <strong>Horario:</strong> Lun–Dom / 8:00am – 7:00pm
          </p>
        </div>

        {/* redes sociales */}
        <div className="text-center md:text-left">
          <h3 className="font-perfect text-lg tracking-wide antialiased tracking-wider mb-4 text-md font-semibold">
            SÍGUENOS EN NUESTRAS REDES
          </h3>

          <div className="flex md:justify-start justify-center space-x-6 text-xl">
            <a href="#" className="hover:scale-110 transition">
              <img src="./src/assets/images/social-facebook-svgrepo-com.svg" className="w-10" alt="facebook" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src="./src/assets/images/social-instagram-svgrepo-com.svg" className="w-10" alt="instagram" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src="./src/assets/images/social-github-svgrepo-com.svg" className="w-10" alt="gitHub" />
            </a>
          </div>
        </div>

      </div>

      {/* creditos */}
      <div className="font-perfect text-center mt-4 text-white/80 text-xs space-y-1">
        <p>&copy; {new Date().getFullYear()} Pastelería Delicias React</p>
        <p>Desarrollado por: Cristian Padilla ~ Jhon Galeano ~ Sofía Ballen</p>
      </div>

    </footer>
  );
}
