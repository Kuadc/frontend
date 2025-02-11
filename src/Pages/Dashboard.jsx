import { useEffect, useState } from "react";
import { getAllMovies, addMovie, updateMovie, deleteMovie } from "../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  
  const InitialFormData ={
    name: "",
    year: "",
    rating: "",
    description: "",
    image: ""
  }

  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState(InitialFormData);
  const [editingId, setEditingId] = useState(null); // Para saber si estamos editando

  
  // Obtener peliculas al montar el componente
  useEffect(() => { 
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario para agregar/modificar
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateMovie(editingId, formData);
    } else {
      await addMovie(formData);
    }
    setFormData(InitialFormData);  // Limpiar formulario
    setEditingId(null);
    fetchMovies();
  };

  // Cargar datos en el formulario para editar
  const handleEdit = (movie) => {
    setFormData({ name: movie.name, year: movie.year, rating: movie.rating, description: movie.description, image: movie.image });
    setEditingId(movie._id);
  };

  // Eliminar una pelicula
  const handleDelete = async (id) => {
    if (confirm("¿Estas seguro que quieres borrar a la pelicula?")) {
      await deleteMovie(id);
      fetchMovies();
    }
  };

  return (
    <>
    
      <section className="section">
        <div className="container">
          <h1 className="">Dashboard of Movies</h1>

          {/* Formulario para agregar/modificar */}
          <div className="box">
            <h2 className="subtitle">{editingId ? "Edit Movie" : "Add Movie"}</h2>
            <form onSubmit={handleSubmit}>

              {/* field of name */}
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>

              {/* field of year  */}
              <div className="field">
                <label className="label">Year</label>
                <div className="control">
                  <input className="input" type="number" name="year" value={formData.year} onChange={handleChange} required />
                </div>
              </div>

              {/* field of rating  */}
              <div className="field">
                <label className="label">Rating</label>
                <div className="control">
                  <input className="input" type="number" name="rating" value={formData.rating} onChange={handleChange} required />
                </div>
              </div>

              {/* field of description  */}
              <div className="field">
                <label className="label">Descripción</label>
                <div className="control">
                  <textarea
                    className="textarea description"
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>


              {/* field of image  */}
              <div className="field">
                <label className="label">image</label>
                <div className="control">
                  <input className="input" type="text" name="image" value={formData.image} onChange={handleChange} required />
                </div>
              </div>

              <div className="control">
                <button type="submit" className={`button ${editingId ? "is-warning" : "is-primary"}`}>
                  {editingId ? "Actualizar" : "Agregar"}
                </button>
              </div>
            </form>
          </div>

          {/* Tabla de estudiantes */}
          {movies.length > 0 ? (
            <table className="table is-fullwidth is-striped is-hoverable mt-4">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.name}</td>
                    <td>{movie.year}</td>
                    <td>{movie.rating}</td>
                    <td>
                      <button className="button is-small is-warning mr-2" onClick={() => handleEdit(movie)}>Editar</button>
                      <button className="button is-small is-danger" onClick={() => handleDelete(movie._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="has-text-centered mt-4">No hay peliculas registradas.</p>
          )}
        </div>
      </section>
    </>
  );
};

export { Dashboard };