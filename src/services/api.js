// api.js estará encargado de ejecutar las funciones del backend
import axios from "axios";

const BASE_URL_API = "https://backend-production-237b.up.railway.app/movies";
//fetch("/api/movies")
// Obtener todos los estudiantes
const getAllMovies = async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Agregar un estudiante
const addMovie = async (student) => {
  try {
    const response = await axios.post(BASE_URL_API, student);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Modificar un estudiante
const updateMovie = async (id, student) => {
  try {
    const response = await axios.patch(`${BASE_URL_API}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Eliminar un estudiante
const deleteMovie = async (id) => {
  try {
    await axios.delete(`${BASE_URL_API}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export { getAllMovies, addMovie, updateMovie, deleteMovie };
