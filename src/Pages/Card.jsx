import './Card.css'
import useFetch from '../useFetch'
import Button from '../Button';

export default function Card() {
    const {producto, loading}  = useFetch('https://fakestoreapi.com/products/?limit=5');
    //producto trae 5 objetos

   
  return (
    <>
    <div className="Producto">
        
      {/* Este es un comentario en JSX */}
    
      {loading && <p>Loading.....</p>} 
      {!loading && producto && ( // me aseguro que el producto no sea null o undefined
      producto.map(producto =>(
        <div key={producto.id} className='prod'>
          
          <img src={producto.image} alt={producto.title} className="Imagen_prod" />
          
          <div className='colors'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#a81a1a" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#083e77" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#d2d53f" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#309929" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
          </div>
          

          <p className='title'>{producto.title}</p>
          <p className='price'>Price: {producto.price}</p>
          <p className='category'>Category: {producto.category}</p>
          <p className='description'>Description: {producto.description}</p>
        

          <Button />
        
        
        </div>
        ))
      )}
      {!loading && !producto && <p>No hay producto disponible.</p>}


    </div>
    </>
  )
}
