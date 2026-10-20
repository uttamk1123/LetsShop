import { useState } from 'react'
import { useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setdata] = useState([])
    console.log(`http://localhost:8000/${url}`);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`http://localhost:8000/${url}`);
            const prod = await response.json();

            setdata(prod);
        }
        getProducts();
    }, [url])
    return { data }

}
