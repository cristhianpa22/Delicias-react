import "../index.css"
export default function Card({ pasteles }) {
    const { nombre, descripcion, precio, categoria, img } = pasteles;

    const formatCurrency = (valor) => {
        const numero = Number(valor) || 0;
        // Usa toLocaleString() con configuración de Colombia
        return numero.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0  // Sin decimales (los pesos no usan centavos)
        });
    };

  return (
    <section
      aria-label="Productos disponibles"
      className="grid gap-4 w-full"
    >
      <article
        data-id="p01"
        data-name={nombre}
        data-price={precio}
        data-image={img}
        className="bg-[#FFFFFF] font-perfect rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(20,20,20,0.06)] flex flex-col"
      >
        <img
          src={img} 
          alt={nombre}
          className="h-[250px] w-full object-cover"
        />

        <div className="p-[0.9rem] flex flex-col gap-[0.6rem] flex-1">
          <h3 className="m-0 text-[1.02rem] text-[#222222]">
            {nombre}
          </h3>

          <p className="m-0 text-[0.9rem] text-[#6B6B6B] leading-[1.2] min-h-[2.4em]">
            {descripcion}
          </p>
           <p className="m-0 text-[0.9rem] text-[#6B6B6B] leading-[1.2] min-h-[2.4em]">
            {categoria}
          </p>

          <div className="mt-auto flex items-center justify-between gap-[0.5rem]">
            <span className="font-bold text-[#813563]">{formatCurrency(precio)}</span>
            <button
              className="bg-[#1E9D8A] text-white border-0 px-[0.7rem] py-[0.45rem] rounded-[8px] font-semibold cursor-pointer transition duration-200 ease-[cubic-bezier(.2,.9,.3,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(30,157,138,0.12)]"
              data-action="add"
            >
                <img
                    src={img || "src/assets/"}
                    alt={nombre}
                    className="h-[250px] w-full object-cover"
                />
                <div className="p-[0.9rem] flex flex-col gap-[0.6rem] flex-1">
                    <h3 className="m-0 text-[1.02rem] text-[#222222]">
                        {nombre}
                    </h3>

                    <p className="m-0 text-[0.9rem] text-[#6B6B6B] leading-[1.2] min-h-[2.4em]">
                        {descripcion}
                    </p>
                    <p className="m-0 text-[0.9rem] text-[#6B6B6B] leading-[1.2] min-h-[2.4em]">
                        {categoria}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-[0.5rem]">
                        <span className="font-bold text-[#813563]">{formatCurrency(precio)}</span>
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
