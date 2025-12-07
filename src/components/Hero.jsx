import { useNavigate } from 'react-router-dom';

export default function Hero() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login');
      };
    return (
        <>


            <div className="">
                
                <div className="relative min-h-screen flex items-center overflow-hidden">
                    
                    <div className="absolute inset-0 z-0">
                        <img
                            src="../../public/images/textura.jpg"
                            alt="Luxury pastries"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 gradient-overlay"></div>
                    </div>

                    
                    <div className="absolute top-25 left-55 w-150 h-50 bg-[#e0bacf] rounded-full opacity-30 blur-2xl"></div>
                    <div className="absolute bottom-30 left-50 w-96 h-96 bg-[#F6BC59] rounded-full opacity-20 blur-3xl"></div>

                    
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
                       
                        <div className="space-y-8">
                         
                            <div className="space-y-6">
                                <h1 className="hero-title text-5xl lg:text-6xl font-perfect text-[#6B6B6B] leading-tight">
                                    ELEGANCIA<br />
                                    <span className="text-[#A8176F]">EN CADA BOCADO.</span><br />
                                    <span className="text-4xl lg:text-5xl">ALTA PASTELERÍA,</span><br />
                                    <span className="text-[#F4425A]">REFINADA Y SUBLIME.</span>
                                </h1>
                            </div>

                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                  className="
                                    w-fit px-10 py-4 
                                    rounded-xl font-semibold 
                                    border-2 border-[#1E9D8A]
                                    text-[#1E9D8A]
                                    bg-[#dbe9e792]
                                    shadow-[0_6px_18px_rgba(168,23,111,0.12)]
                                    hover:bg-[#1E9D8A] hover:text-white
                                    hover:-translate-y-[2px]
                                    transition-all
                                  "
                                  onClick={handleLogin}
                                >
                                  EXPLORAR COLECCIÓN
                                </button>
                                
                            </div>
                        </div>

                        
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/RolesDeCanelaConRedVelvet.jpg"
                                    alt="Exquisite pastries and macarons"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
