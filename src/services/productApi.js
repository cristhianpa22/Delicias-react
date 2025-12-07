// src/services/animalsApi.js
import axios from "axios";


// ---- Config ----
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!BASE_URL) {
  console.warn(
    "API base URL is not set. Please configure the BASE_URL variable."
  );
}

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10s
});


export const getProducts = async() => {
  const url = `/productos`;
  const response = await http.get(url);
  return response.data; // array
}

export async function createProduct(payload) {
  const res = await http.post(`/productos`, payload);
  return res.data; // created object (with id)
}

/** Partial update (PATCH) — optional for later weeks */
export async function updateProduct(id, patch) {
  if (!id) throw new Error("Missing product id");
  const res = await http.put(`/productos/${id}`, patch);
  return res.data;
}

/** Delete — optional for later weeks */
export async function removeProduct(id) {
  if (!id) throw new Error("Missing product id");
  const res = await http.delete(`/productos/${id}`);
  return res.data;
}