export default function Hero() {
    return (
        <>

            <div className="bg-gradient-to-br from-stone-50 to-rose-50">
                <div className="relative min-h-screen flex items-center overflow-hidden">
                    
                    <div className="absolute inset-0 z-0">
                        <img
                            src="src/assets/images/ChescakeDeFrutosRojos.jpg"
                            alt="Luxury pastries"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 gradient-overlay"></div>
                    </div>

                    
                    <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>

                    
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
                       
                        <div className="space-y-8">
                            
                            <div className="brand-name text-rose-800 text-sm tracking-widest font-hello_valentica ">
                                Delicias React
                            </div>

                           
                            <div className="space-y-6">
                                <h1 className="hero-title text-5xl lg:text-6xl font-hello_valentica text-stone-700 leading-tight">
                                    ELEGANCIA<br />
                                    <span className="text-rose-700">EN CADA BOCADO.</span><br />
                                    <span className="text-4xl lg:text-5xl">ALTA PASTELERÍA,</span><br />
                                    <span className="text-amber-700">REFINADA Y SUBLIME.</span>
                                </h1>
                            </div>

                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    
                                    className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    
                                    EXPLORAR COLECCIÓN
                                </button>

                                
                            </div>
                        </div>

                        
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="src/assets/images/RolesDeCanelaConRedVelvet.jpg"
                                    alt="Exquisite pastries and macarons"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            
                            <div className="absolute -top-6 -right-6 w-32 h-32 opacity-80">
                                <img
                                    src="src/assets/images/TortaDeHeladoConGalleta.jpg"
                                    alt="Orchid"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Floating Elements */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}