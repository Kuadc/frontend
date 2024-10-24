import {useState, useEffect } from "react"


export default function useFetch(url) {
    const [producto, setproducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        fetch(url)
                    .then(res=>res.json())
                    .then((json) => setproducto(json))
                    .finally(() => setLoading(false));

    }, []);
    return {producto, loading};
  
}
