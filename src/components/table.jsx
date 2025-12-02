export default function Table(){
    return(
        <table className="table-auto border-collapse border border-rose-200 w-4/6 my-6 mx-10">
            <thead className="p-5">
                <tr className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-200">
                    <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">NOMBRE</th>
                    <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">DESCRIPCION</th>
                    <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">PRECIO</th>
                    <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">STOCK</th>
                    <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td className="px-6 py-4 font-medium text-rose-900">Ejemplo</td>
                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">Ejemplohgfhfgh</td>
                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">Ejemplojghjfyjhfghghfghfghfg</td>
                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">254</td>
                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">4564</td>
                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900"><button className="m-2"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button><i class="fa-solid fa-trash-can"></i></button></td>
                </tr>
            </tbody>
        </table>
    )
}