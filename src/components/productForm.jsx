import { useState } from "react";
import Alert from "./alert";
const categories = ["Tartas", "Galletas", "Cupcakes", "Bebidas"];

export default function ProductForm({
    onSubmit,
    onSuccess,
    submitError,
    initialData = {
        nombre: "",
        descripcion: "",
        precio: "",
        categoria: "",
        stock: "",
        imagen: "",
    } }) {
    const [values, setValues] = useState(initialData);
    const [error, setError] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    function validar(valores) {
        const errors = {};
        if (!valores.nombre.trim()) {
            errors.nombre = "El nombre es obligatorio.";
        }
        else if (valores.nombre.trim().length < 4) {
            errors.nombre = "El nombre debe tener al menos 4 caracteres.";
        }

        if (!valores.descripcion.trim()) {
            errors.descripcion = "La descripción es obligatoria.";
        }
        else if (valores.descripcion.trim().length < 10) {
            errors.descripcion = "La descripción debe tener al menos 10 caracteres.";
        }
        if (!valores.precio || isNaN(valores.precio) || Number(valores.precio) <= 0) {
            errors.precio = "El precio debe ser un número positivo.";
        }
        if (!valores.categoria || !categories.includes(valores.categoria)) {
            errors.categoria = "Por favor seleccione una categoría válida.";
        }
        if (!valores.stock || isNaN(valores.stock) || !Number.isInteger(Number(valores.stock)) || Number(valores.stock) < 0) {
            errors.stock = "El stock debe ser un número entero no negativo.";
        }
        if (!valores.imagen.trim()) {
            errors.imagen = "La URL de la imagen es obligatoria.";
        }
        return errors;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (error) {
            const currentErrors = validar({ ...values, [name]: value });
            if (error[name] && !currentErrors[name]) {
                const newErrors = { ...error };
                delete newErrors[name];
                setError(Object.keys(newErrors).length > 0 ? newErrors : null);
            }
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validar(values);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }
        setError(null);
        setSubmitting(true);
        try {
            setSubmitting(true);
            const payload = {
                name: values.nombre.trim(),
                description: values.descripcion.trim(),
                price: parseFloat(values.precio),
                category: values.categoria,
                stock: parseInt(values.stock, 10),
                imageUrl: values.imagen.trim(),
            };
            const result = await onSubmit?.(payload);
            setSuccessMessage("Producto enviado exitosamente.");
            setValues(initialData);
            onSuccess?.(result ?? payload);
        } catch (error) {
            setSuccessMessage(null);
            setError({ submit: submitError || "Error al enviar el producto." });
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <section className="p-8  bg-pink-50  rounded-2xl shadow-2xl h-fit border border-pink-200">
            <h2 className=" text-3xl font-extrabold text-pink-700 mb-6 border-b border-pink-300 pb-3 flex items-center">
                <i class="fa-solid fa-cookie fa-lg mr-3 text-amber-500"></i>
                Añadir Nuevo Producto
            </h2>
            <form
                noValidate
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {submitError && <Alerta variant="error">{submitError}</Alerta>}
                {successMessage && <Alerta variant="success">{successMessage}</Alerta>}


                <div className="relative ">
                    <label
                        htmlFor="producto-nombre"
                        className="block text-sm font-semibold text-pink-700 mb-1"
                    >
                        Nombre del Producto <span className="text-red-500">Requerido</span>
                    </label>
                    <input
                        id="producto-nombre"
                        name="nombre"
                        type="text"
                        required
                        autoFocus
                        value={values.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Tarta de Chocolate"
                        aria-invalid={Boolean(error.nombre)}
                        aria-describedby={error.nombre ? "error-nombre" : undefined}
                        className={`w-full p-3 bg-white rounded-lg border focus:ring-pink-500 focus:border-pink-500 text-amber-900 transition shadow-sm
                        ${error.nombre
                                ? "border-red-500  focus:ring-2 focus:ring-red-500"
                                : "border-pink-200 focus:ring-2 focus:ring-amber-500 "
                            }`}
                        disabled={submitting}
                    />
                    {error.nombre && (
                        <p
                            id="error-title"
                            className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0"
                            role="alert"
                        >
                            {error.nombre}
                        </p>
                    )}
                </div>

                <div className="relative pt-5">
                    <label
                        htmlFor="producto-descripcion"
                        className="block text-sm font-semibold text-pink-700 mb-1"
                    >
                        Descripcion <span className="text-red-500">Requerido</span>
                    </label>
                    <input
                        id="producto-descripcion"
                        name="descripcion"
                        type="text"
                        required
                        value={values.descripcion}
                        onChange={handleChange}
                        placeholder="Ej: Deliciosa tarta de chocolate con..."
                        aria-invalid={Boolean(error.descripcion)}
                        aria-describedby={error.descripcion ? "error-descripcion" : undefined}
                        disabled={submitting}
                        className={`w-full p-3 rounded-lg border focus:ring-pink-500 focus:border-pink-500 text-amber-900 transition  shadow-sm
                        ${error.descripcion
                                ? "border-red-500  focus:ring-2 focus:ring-red-500"
                                : "border-pink-200 focus:ring-2 focus:ring-amber-500 "
                            }`}
                    />
                    {error.descripcion && (
                        <p
                            id="error-descripcion"
                            className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                            role="alert"
                        >
                            {error.descripcion}
                        </p>
                    )}
                </div>

                <div className="relative pt-5">
                    <label
                        htmlFor="producto-precio"
                        className="block text-sm font-semibold text-pink-700 mb-1"
                    >
                        Precio <span className="text-red-500">Requerido</span>
                    </label>
                    <input
                        id="producto-precio"
                        name="precio"
                        type="number"
                        required
                        value={values.precio}
                        onChange={handleChange}
                        placeholder="Ej: 25.000"
                        aria-invalid={Boolean(error.precio)}
                        aria-describedby={error.precio ? "error-precio" : undefined}
                        disabled={submitting}
                        className={`w-full p-3 rounded-lg border focus:ring-pink-500 focus:border-pink-500 text-amber-900 transition  shadow-sm
                        ${error.precio
                                ? "border-red-500  focus:ring-2 focus:ring-red-500"
                                : "border-pink-200 focus:ring-2 focus:ring-amber-500 "
                            }`}
                    />
                    {error.precio && (
                        <p
                            id="error-precio"
                            className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                            role="alert"
                        >
                            {error.precio}
                        </p>
                    )}
                </div>

                <div className="relative pt-5">
                    <label
                        htmlFor="producto-categoria"
                        className="block text-sm font-semibold text-pink-700 mb-1"
                    >
                        Tipo de Producto <span className="text-red-500">Requerido</span>
                    </label>
                    <select
                        id="producto-categoria"
                        name="categoria"
                        required
                        value={values.categoria}
                        onChange={handleChange}
                        aria-invalid={Boolean(error.categoria)}
                        aria-describedby={error.categoria ? "error-categoria" : undefined}
                        disabled={submitting}
                        className={`w-full p-3 rounded-lg border focus:ring-pink-500 focus:border-pink-500 text-amber-900 transition  shadow-sm
                        ${error.categoria
                                ? "border-red-500  focus:ring-2 focus:ring-red-500"
                                : "border-pink-200 focus:ring-2 focus:ring-amber-500 "
                            }`}
                    >
                        <option value="" disabled>
                            selecciona una categoría
                        </option>
                        {categories.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                    {error.categoria && (
                        <p
                            id="error-categoria"
                            className="text-xs text-red-600 dark:text-red-400"
                            role="alert"
                        >
                            {error.categoria}
                        </p>
                    )}
                </div>

                <div className="relative pt-5">
                    <label
                        htmlFor="producto-stocks"
                        className="block text-sm font-semibold text-pink-700 mb-1"
                    >
                        Stocks <span className="text-red-500">Requerido</span>
                    </label>
                    <input
                        id="producto-precio"
                        name="precio"
                        type="number"
                        required
                        value={values.stock}
                        onChange={handleChange}
                        placeholder="Ej: Queen"
                        aria-invalid={Boolean(error.stock)}
                        aria-describedby={error.stock ? "error-stock" : undefined}
                        disabled={submitting}
                        className={`w-full p-3 rounded-lg border focus:ring-pink-500 focus:border-pink-500 text-amber-900 transition  shadow-sm
                        ${error.stock
                                ? "border-red-500  focus:ring-2 focus:ring-red-500"
                                : "border-pink-200 focus:ring-2 focus:ring-amber-500 "
                            }`}
                    />
                    {error.stock && (
                        <p
                            id="error-stock"
                            className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                            role="alert"
                        >
                            {error.stock}
                        </p>
                    )}
                </div>

                <div className="relative pt-5">
                    <label
                        htmlFor="producto-imagen"
                        className="block text-sm font-semibold text-pink-700 mb-1"
                    >
                        imagen <span className="text-red-500">Requerido</span>
                    </label>
                    <input
                        id="producto-imagen"
                        name="imagen"
                        type="text"
                        required
                        value={values.imagen}
                        onChange={handleChange}
                        placeholder="Ej: url de la imagen"
                        aria-invalid={Boolean(error.imagen)}
                        aria-describedby={error.imagen ? "error-imagen" : undefined}
                        disabled={submitting}
                        className={`w-full p-3 rounded-lg border focus:ring-pink-500 focus:border-pink-500 text-amber-900 transition  shadow-sm
                        ${error.imagen
                                ? "border-red-500  focus:ring-2 focus:ring-red-500"
                                : "border-pink-200 focus:ring-2 focus:ring-amber-500 "
                            }`}
                    />
                    {error.imagen && (
                        <Alert variant="error">{error.imagen}</Alert>
                        
                    )}
                </div>

                

                <div className="flex items-center justify-end gap-3 pt-6">
                    <button
                        type="button"
                        onClick={() => {
                            setValues(initialData);
                            setError({});
                            setSuccessMessage(null);
                        }}
                        className="rounded-lg border border-pink-300 px-4 py-2 text-sm text-pink-700 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                        disabled={submitting}
                    >
                        Limpiar Campos
                    </button>

                    <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-lg font-bold transition duration-300 
                            ${submitting
                                ? 'bg-pink-600 cursor-not-allowed'
                                : 'bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/50'
                            }`}
                    >

                        {submitting ? (
                            <p><i className="fa-solid fa-cookie-bit fa-spin mr-2"></i>
                                Horneando...
                            </p>
                        ) : (
                            "Añadir producto"
                        )}
                    </button>
                </div>
            </form>

        </section>
    )


}
