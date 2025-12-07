import { useState } from "react";
import Table from "./Table";


export default function useTable({ products, onUpdateProduct, onDeleteProduct, submitError, successMessage}){

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});


    const startEdit = (produc) => {
        setEditingId(produc.id);
        setEditForm(produc);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditForm({});
    };

    const saveEdit = () => {
        onUpdateProduct(editingId, editForm);
        cancelEdit();
    };

    const deleteItem = (id) => {
        onDeleteProduct(id); 
    };

    return( 
        <Table
        products={products}
        submitError={submitError}
        successMessage={successMessage}
        editingId={editingId}
        editForm={editForm}
        startEdit={startEdit}
        cancelEdit={cancelEdit}
        saveEdit={saveEdit}
        deleteItem={deleteItem}
        />
    );

}