import React from 'react'
import './Dashboard.css'
import { useState } from 'react';
import useFetch from '../useFetch';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"
import db from '../config/firebase.js'
import { data } from '../assets/data';

export default function Dashboard() {

    

    const initialFormData = {
        title: "",
        price: 0,
        description: "",
        sku: 0,
        image: ""
      }
    
      const [formData, setFormData] = useState(initialFormData)
      const [trigger, setrigger] = useState(false)
      const [editMode, setEditMode] = useState(false)
      const [editProductId, setEditProductId] = useState(null)

      const { data: productos, loading, error }  = useFetch(trigger)

      const handleSubmit = async (event) => {
        event.preventDefault()
        const productsForm = new FormData(event.target);
        const newProducts = {
            title: productsForm.get("title"),
            price: productsForm.get("price"),
            description: productsForm.get("description"),
            sku: productsForm.get("sku"),
            image: productsForm.get("image")
        }
        
        
        try {
          if (editMode) {
            const productRef = doc(db, "productos", editProductId)
            await updateDoc(productRef, formData)
            alert("Producto actualizado correctamente...")
            setEditMode(false)
            setEditProductId(null)
            setFormData(initialFormData)
            setrigger(!trigger)
          } else {
            await addDoc(collection(db, "productos"), newProducts)
            alert("Producto agregado exitosamente...")
            setFormData(!trigger)
            event.target.reset()

            
          }
        } catch (error) {
          console.error("Error al guardar el producto:", error)
        }
        
      }

      const handleEdit = (product) => {
        setFormData({
          title: product.title,
          price: product.price,
          description: product.description,
          sku: product.sku,
          image: product.image
        })
        setEditMode(true)
        setEditProductId(product.id)
        setrigger(!trigger)
        console.log(formData)
      }
    
    
      const handleDelete = async (productId) => {
        try {
          await deleteDoc(doc(db, "productos", productId))
          alert("Producto borrado con éxito...")
          setrigger(!trigger)
        } catch (error) {
    
        }
      }

      const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData({ ...formData, [name]: event.target.value })
      }

  return (
    <>
        <h3>Load new products or make changes</h3>
            
        <form action="" className='productsform' onSubmit={handleSubmit}>
                <h3>Product</h3>
                
                <label>Title</label>
                <input type="text" name="title" id="title" value={formData.title} placeholder='Enter title' required onChange={handleChange} />
                
                <label>Price</label>
                <input type="number" name="price" id="price" value={formData.price} placeholder='Enter price' required onChange={handleChange}/>
                
                <label>Description of Product</label>
                <textarea id="description" name="description" value={formData.description} placeholder="Write a description of the product..." rows="6"  cols="50" maxLength="1000"  required onChange={handleChange}
                ></textarea>

                <label>Sku</label>
                <input type="number" name="sku" id="sku" value={formData.sku} placeholder='enter sku' required onChange={handleChange}/>

                <label>Image</label>
                <input type="text" name="image" id="image" value={formData.image} placeholder='link image' required onChange={handleChange}/>
                
                <button type="submit" className='button'>Save or Modify changes</button>
        </form>
            



        <table className='tableProducts'>
            <thead className='titlesProducts'>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Descripción</th>
                <th>sku</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {productos?.map((product) => (
                <tr key={product.id}>
                <td><img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} /></td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.sku}</td>
                <td>
                    <button className="buttonSmallDanger" onClick={() => handleEdit(product)}>
                    Modify
                    </button>
                    <button className="buttonSmallOk" onClick={() => handleDelete(product.id)}>
                    Delete
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

    
    </>
  )
}
