export default function Modal({ title = "Modal Title", children, isOpen, onClose }) {
    const handleMModalClose = e => e.stopPropagation();
    if (!isOpen) {
        return null;
    }

    const displayClass = isOpen ? "flex" : "hidden";
    return (
        <article className={`fixed inset-0 z-50 items-center  justify-center bg-[#8a528c4d] backdrop-blur-sm transition-opacity duration-300 ${displayClass}`}
         onClick={onClose}>
            <div className="relative bg-[#f7dae6] p-8 m-4 rounded-3xl h-[95%] shadow-2xl shadow-[0_12px_35px_rgba(129,53,99,0.25)] border-4 border-[#E8B6C8] min-h-xl w-full max-w-xl overflow-y-scroll  transform transition-all duration-300 opacity-100"
                onClick={handleMModalClose}>
                <button className="absolute top-4 right-4 text-[#e9ac28] hover:text-[#e8a108] transition duration-200 p-2 rounded-full bg-[#eaae164e] hover:bg-[#eaae1657] border border-[#f0ae06f7] shadow-[0_2px_6px_rgba(129,53,99,0.25)]"
                    onClick={onClose}
                    aria-label="cerrar Modal"
                >
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </button>
                <h2 className="font-perfect text-2xl font-bold text-[#358174] mb-6 pb-2 border-b tracking-wide border-[#e9b3c0] gab-2 flex justify-center">
                    {title}
                    <div className="hidden sm:block">
                    <i className="fa-solid fa-star mr-2 text-[#e9ac28] "></i>
                    </div>
                    </h2>
                <div className="text-gray-700">
                     {children}
                </div>
              

            </div>

        </article>
    )

}