import "./Card.css";
import { getAllMovies} from "../services/api";
import { useState, useEffect } from 'react';


export default function Card() {

  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("")

  // Obtener peliculas al montar el componente
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };
   
    return (
      <div className="Producto">
          <p className="title2">Search for your movie by name</p>
          <input
              type="search"
              placeholder="Search..."
              onChange={(e) => setText(e.target.value)}
          />

          {
              movies?.filter((movie) => movie.name.toLowerCase().includes(text.toLowerCase()))
              .map((mov) => (
                      <div key={mov._id} className="prod">
                          <img src={mov.image} alt={mov.name} className="Imagen_prod" />
                          
                          <h3 >Title: {mov.name}</h3>
                          <p className="year">Year: {mov.year}</p>
                          <p className="rating">Rating: {mov.rating}</p>
                          <p className="description-homepage">Description: {mov.description}</p>
                      </div>
                  ))
          }
          {!movies && movies.length === 0 && <p>No se encontraron peliculas.</p>}
      </div>
  )
}
