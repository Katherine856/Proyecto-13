import { useEffect, useState } from "react";
import Item from "./item";

const Listado = () => {

    const [productos, setProductos] = useState([])

    const hacerFech = async () => {
        const api = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductos(json))
        
    }

    useEffect(() =>{
        hacerFech()
    }) 

    return (
        <>
            {productos.map((product) =>
                <Item key={product.id} id={product.id} nombre={product.title} imagen={product.image} />
            )}
        </>
    )
}

export default Listado;