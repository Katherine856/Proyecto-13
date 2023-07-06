import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Detalles = () => {
    
    let { id } = useParams()
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})

    const hacerFetch = async () => { //Funcion asincrona 
        const api = await fetch('https://fakestoreapi.com/products') //Hacer fetch 
        .then(res=>res.json()) //Convertir la respuesta en json
        .then(json=>setProductos(json)) //Seteamos el valor de productos 
    }

    useEffect(() =>{
        hacerFetch() //Ejecucion de la funcion
        let tem = productos?.filter(product => product.id === parseInt(id)) //Fitran los producto que necesitamos utilizando el id
        let tem2 = tem[0] //La posicion 0 del arreglo para obtener el objeto
        setProducto(tem2) //Seteamos el valor de producto
        
    }, [id, productos]) //Cada vez que cambie el id o productos

    return (
        <> 
           <h1> { producto?.title } </h1>
           
        </>
    )
}

export default Detalles; 