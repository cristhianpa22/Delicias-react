
import Alert from "./Alert.jsx";
import {formatCurrency} from "../utils/utilitis.js"
import{categories} from "../utls/utilitis.js"
import Alert from "./Alert.jsx";




export default function Table({ products, submitError, successMessage,editingId,
    editForm,
    startEdit,
    cancelEdit,
    saveEdit,
    deleteItem}) {



    return (
        <div className="w-full my-6 px-4 overflow-x-auto">
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {submitError && <Alert variant="error">{submitError}</Alert>}
            <table className="table-auto border-collapse border border-rose-200 min-w-full ">
                <thead className="p-5">
                    <tr className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-200">
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">ID</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">NOMBRE</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">DESCRIPCION</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">PRECIO</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">CATEGORIA</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">STOCK</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">IMAGEN</th>
                        <th className="px-6 py-4 text-left text-sm font-serif text-rose-900">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((producto) => (
                        <tr key={producto.id}>
                            {editingId === producto.id ? (
                                <>
                                    <td className="px-6 py-4">
                                        <input
                                            type="disabled"
                                            value={producto.id}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={editForm.nombre}
                                            onChange={(e) => editForm({ ...editForm, nombre: e.target.value })}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={editForm.descripcion}
                                            onChange={(e) => editForm({ ...editForm, descripcion: e.target.value })}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={editForm.precio}
                                            onChange={(e) => editForm({ ...editForm, precio: e.target.value })}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        />
                                    </td>


                                    <td>
                                        <select
                                            value={editForm.categoria}
                                            onChange={(e) => editForm({ ...editForm, categoria: e.target.value })}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        >
                                            {categories.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </td>

                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={editForm.stock}
                                            onChange={(e) => editForm({ ...editForm, stock: e.target.value })}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={editForm.img}
                                            onChange={(e) => editForm({ ...editForm, img: e.target.value })}
                                            className="w-full px-3 py-1 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                        />
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={saveEdit}
                                                className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                                            >
                                                <i class="fa-solid fa-floppy-disk"></i>
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="p-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition-colors"
                                            >
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="px-6 py-4 font-medium text-rose-900">{producto.id}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">{producto.nombre}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">{producto.descripcion}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">{formatCurrency(producto.precio)}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">{producto.categoria}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900">{producto.stock}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900 max-w-xs overflow-hidden truncate whitespace-nowrap">{producto.img}</td>
                                    <td className="px-6 py-4 text-center text-sm font-serif text-rose-900"><button onClick={() => startEdit(producto)} className="m-2"><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button onClick={() => deleteItem(producto.id)}><i className="fa-solid fa-trash-can"></i></button></td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
