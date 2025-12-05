import '../index.css';

export default function CardShop() {
  return (
    <aside className="
        font-perfect bg-[#f4e9edcc] border-4 border-[#f4e9ed90]
        rounded-[18px] p-6 h-fit
        shadow-[0_8px_20px_rgba(129,53,99,0.10)]
      "
    >
      <div className="cart-inner">
        <h2 className="mb-3 text-2xl font-bold text-[#813563] tracking-wide drop-shadow-sm">
          CARRITO
        </h2>

        <div className="min-h-[200px] max-h-[420px] ">
          <p className="text-[#7c6c7c] italic">Tu carrito esta vacio</p>

        <section className="border-2 border-[#f5b7c0] border-dashed w-full h-auto flex flex-col sm:flex-row p-3 gap-4">

          <div className="flex-shrink-0">
            <img
              className="w-[70px] h-[70px] rounded-2xl border-[#f5b7c0] border-2"
              src="src/assets/images/flan.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between w-full">
            <h2 className="text-[#000] font-bold text-sm sm:text-base">Nombre del producto</h2>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <p className="text-sm sm:text-base">Precio</p>

              <div className="flex gap-4 pr-0 sm:pr-6">
                <p className="w-6 h-6 rounded-[6px] bg-[#fff] flex items-center justify-center cursor-pointer">+</p>
                <span>0</span>
                <p className="w-6 h-6 rounded-[6px] bg-[#fff] flex items-center justify-center cursor-pointer">-</p>
                <p className="text-[#a90101] cursor-pointer">Eliminar</p>
              </div>
            </div>

          </div>

        </section>

        </div>

        <div className="mt-5">
          
          <div className="text-[#6B6B6B] mb-4 flex justify-between text-lg">
            <span>Subtotal</span>
            <strong className="text-[#813563]">$0</strong>
          </div>

          <div className="flex flex-col gap-3">

            <button
              className="
                w-40 p-2 rounded-xl
                bg-[#f7d6dd] border border-[#f5b7c0]
                text-[#813563] font-semibold
                transition-all
                hover:bg-[#f5c9d1]
                shadow-[0_3px_8px_rgba(244,150,170,0.18)]
              "
            >
              Vaciar carrito
            </button>

            <button
              className="
                w-full p-3 rounded-xl font-bold tracking-wide text-white
                bg-[#813563]
                shadow-[0_4px_12px_rgba(129,53,99,0.3)]
                transition-all
                hover:bg-[#6a1a57]
                hover:shadow-[0_6px_18px_rgba(129,53,99,0.45)]
              "
            >
              Pagar
            </button>

          </div>
        </div>
      </div>
    </aside>
  );
}
