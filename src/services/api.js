import axios from "axios";

const api = axios.create({
  baseURL: "https://parkingapisenai.azurewebsites.net",
});

// Auth
export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);
export const getMe = () => api.get("/auth/me");

// Veículos
export const getVeiculoById = (id) => api.get(`/api/veiculos/id/${id}`);
export const getVeiculoByPlaca = (placa) => api.get(`/api/veiculos/placa/${placa}`);
export const getVeiculosAtivos = () => api.get("/api/veiculos");
export const registrarEntrada = (data) => api.post("/api/veiculos/entrada", data);
export const registrarSaida = (data) => api.post("/api/veiculos/saida", data);

export default api;