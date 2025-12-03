import "../index.css"
export default function Card() {
  return (
    <section
      aria-label="Productos disponibles"
      className="grid grid-cols-2 gap-4 w-[900px]"
    >
      <article
        data-id="p01"
        data-name="Brownies"
        data-price="8000"
        data-image="./src/assets/images/brownis.jpg"
        className="bg-[#FFFFFF] font-perfect rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(20,20,20,0.06)] flex flex-col"
      >
        <img
          src="./src/assets/images/brownis.jpg"
          alt="Brownies con chocolate"
          className="h-[250px] w-full object-cover"
        />

        <div className="p-[0.9rem] flex flex-col gap-[0.6rem] flex-1">
          <h3 className="m-0 text-[1.02rem] text-[#222222]">
            Brownies
          </h3>

          <p className="m-0 text-[0.9rem] text-[#6B6B6B] leading-[1.2] min-h-[2.4em]">
            Brownie de chocolate con corteza crujiente y centro húmedo.
          </p>

          <div className="mt-auto flex items-center justify-between gap-[0.5rem]">
            <span className="font-bold text-[#813563]">$8.000</span>

            <button
              className="bg-[#1E9D8A] text-white border-0 px-[0.7rem] py-[0.45rem] rounded-[8px] font-semibold cursor-pointer transition duration-200 ease-[cubic-bezier(.2,.9,.3,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(30,157,138,0.12)]"
              data-action="add"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
