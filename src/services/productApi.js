// src/services/animalsApi.js
import axios from "axios";

// ---- Config ----
const BASE_URL = "http://localhost:3000";
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
  const res = await http.put(`/products/${id}`, patch);
  return res.data;
}

/** Delete — optional for later weeks */
export async function removeProduct(id) {
  if (!id) throw new Error("Missing product id");
  const res = await http.delete(`/products/${id}`);
  return res.data;
}