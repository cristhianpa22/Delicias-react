
export default function Modal({ title = "Modal Title", children, isOpen, onClose }) {
    const handleMModalClose = e => e.stopPropagation();
    if (!isOpen) {
        return null;
    }

    const displayClass = isOpen ? "flex" : "hidden";
    return (
        <article className={`fixed inset-0 z-50 items-center justify-center bg-pink-900/40 backdrop-blur-sm transition-opacity duration-300 ${displayClass}`}
         onClick={onClose}>
            <div className="relative bg-white p-8 m-4 rounded-3xl shadow-2xl border-4 border-pink-200 min-h-xl w-full max-w-xl max-h[80vh] overflow-y-auto transform transition-all duration-300 opacity-100"
                onClick={handleMModalClose}>
                <button className="absolute top-4 right-4 text-pink-500  hover:text-pink-700 transition duration-200 p-2 rounded-full bg-pink-100/50 hover:bg-pink-100 border border-pink-200"
                    onClick={onClose}
                    aria-label="cerrar Modal"
                >
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </button>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 pb-2 border-b border-pink-300 flex items-center">
                    {title}
                    <i className="fa-solid fa-star mr-2 text-pink-500"></i>
                    </h2>
                <div className="text-gray-700">
                     {children}
                </div>
              

            </div>

        </article>
    )

}