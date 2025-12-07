export const formatCurrency = (valor) => {
    const numero = Number(valor) || 0;
    // Usa toLocaleString() con configuración de Colombia
    return numero.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0  // Sin decimales (los pesos no usan centavos)
    });
};

export const categories = ["Tartas", "Galletas", "Cupcakes", "Bebidas", "Reposteria", "Panaderia"];
