import './Card.css'
import useFetch from '../services/api'
import Button from '../Button';
import { useState } from 'react';


export default function Card() {
  const { data: productos, loading, error }  = useFetch();
    //producto trae 5 objetos
    const [text, setText] = useState("")
   
    return (
      <div className="Producto">
          <p className="title">Search for your product by name</p>
          <input
              type="search"
              placeholder="Search..."
              onChange={(e) => setText(e.target.value)}
          />

          {
              productos?.filter((prod) => prod.title.toLowerCase().includes(text.toLowerCase()))
              .map((prod) => (
                      <div key={prod.id} className="prod">
                          <img src={prod.image} alt={prod.title} className="Imagen_prod" />
                          <div className="colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#a81a1a" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#083e77" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#d2d53f" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#309929" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                          </div>
                          <p className="title">{prod.title}</p>
                          <p className="price">Price: {prod.price}</p>
                          <p className="category">Sku: {prod.sku}</p>
                          <p className="description">Description: {prod.description}</p>
                          <Button />
                      </div>
                  ))
          }
          {!loading && productos && productos.length === 0 && <p>No se encontraron productos.</p>}
      </div>
  )
}
