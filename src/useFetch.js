import { useState, useEffect } from "react";
import db from '../src/config/firebase.js'
import { collection, getDocs } from 'firebase/firestore';

export default function useFetch(formData) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const productsCollection = collection(db, "productos")
            const productsSnapShot = await getDocs(productsCollection)
            const productsList = productsSnapShot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))
            setData(productsList)
          } catch (error) {
            setError(error.message);
            console.error("Error fetchind products:", error)
          }
        }
    
        fetchProducts()
      }, [formData])

    return { data, loading, error }; // Devuelve también el error
}
