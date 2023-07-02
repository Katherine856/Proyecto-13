import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Detalles = () => {
    
    let { id } = useParams()
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})

    const hacerFech = async () => {
        const api = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductos(json))   
    }

    useEffect(() =>{
        hacerFech() 
        console.log(productos)
        let tem = productos?.filter(product => product.id === parseInt(id)) 
        let tem2 = tem[0]
        setProducto(tem2) 
        console.log(producto)
    })  

    return (
        <> 
           <h1> { producto?.title } </h1>
        </>
    )
}

export default Detalles; 