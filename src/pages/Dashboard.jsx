import Loading from "../components/Loading";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import TableContainer from "../components/TableContainer";
import ProductFormContainer from "../components/ProductFormContainer";

export default function DashBoard(
    {products,
    loading,
    error,
    isOpen,
    submitError,
    successMessage,
    openModal,
    closeModal,
    onAddProduct,
    onUpdateProduct,
    onDeleteProduct}) {

    return (
        <div className=" bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 p-8">
            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-serif text-rose-900 mb-2">Gestión de Productos</h1>
                    <p className="text-rose-700 italic">Pastelería Artesanal</p>
                    <Modal title="Agregar Nuevo Producto" isOpen={isOpen} onClose={closeModal}>
                        <ProductFormContainer onSubmit={onAddProduct} submitError={submitError} />
                    </Modal>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl overflow-hidden border border-rose-100">
                    <div className="p-6 bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 flex justify-between items-center">
                        <h2 className="text-2xl font-serif text-rose-900">Nuestros Productos</h2>
                        <button
                            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                            onClick={openModal}
                            aria-label="Agregar Nuevo Producto"
                        ><i className="fa-solid fa-plus mr-2"></i>
                            Agregar Producto
                        </button>
                    </div>



                    <TableContainer products={products} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct} submitError={submitError} successMessage={successMessage} />
                    <div className="mt-6 text-center text-rose-700 text-sm italic">
                        {products.length} productos en el catálogo
                    </div>


                </div>
            </div>
        </div>
    );
}
