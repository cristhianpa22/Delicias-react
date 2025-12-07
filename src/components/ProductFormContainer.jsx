import { useState } from "react";
import { categories } from "../utils/utilitis";
import ProductForm from "./ProductForm";

export default function ProductFormContainer(
    {onSubmit,
    onSuccess,
    submitError,
    initialData = {
        nombre: "",
        descripcion: "",
        precio: "",
        categoria: "",
        stock: "",
        img: "",
    }}
) {
    const [values, setValues] = useState(initialData);
    const [error, setError] = useState({});
    const [submitting, setSubmitting] = useState(false);

    function validar(valores) {
        const errors = {};
        if (!valores.nombre.trim()) {
            errors.nombre = "El nombre es obligatorio.";
        }
        else if (valores.nombre.trim().length < 3) {
            errors.nombre = "El nombre debe tener al menos 3 caracteres.";
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
        if (!valores.img.trim()) {
            errors.img = "La URL de la imagen es obligatoria.";
        }
        else if (!/^(https?:\/\/[^\s$.?#].[^\s]*)\.(jpe?g|png|gif|svg|webp|avif)$/i.test(valores.img.trim())) {
            errors.img = "Por favor ingrese una URL de imagen válida (jpg, png, gif, svg, webp, avif).";
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
                setError(Object.keys(newErrors).length > 0 ? newErrors : {});
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

        setError({});

        try {
            setSubmitting(true);
            const payload = {
                nombre: values.nombre.trim(),
                descripcion: values.descripcion.trim(),
                precio: parseFloat(values.precio),
                categoria: values.categoria,
                stock: parseInt(values.stock, 10),
                img: values.img.trim(),
            };
            const result = await onSubmit?.(payload);
            setValues(initialData);
            onSuccess?.(result ?? payload);
        } catch (error) {
            console.log(error);
            setError({ submit: submitError || "Error al enviar el producto." });
        } finally {
            setSubmitting(false);
        }
    }

    const borrarErroresDeEnvio = () => {
        setValues(initialData);
        setError({});
    };

    return (
        <ProductForm
            values={values}
            error={error}
            submitting={submitting}
            onChange={handleChange}
            onSubmit={handleSubmit}
            categories={categories}
            clearForm={borrarErroresDeEnvio}

        />
    )
}