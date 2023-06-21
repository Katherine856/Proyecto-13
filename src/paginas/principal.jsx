import { useEffect, useState } from "react"
import Filtros from "../componentes/filtros"
import Listado from "../componentes/listado"

const Principal = () => {

    const [productos, setProductos] = useState([])
    const [filtros, setFiltros] = useState(null)
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const hacerFech = async () => {
        const api = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductos(json))  
    }

    useEffect(() =>{
        hacerFech()
    },[]) 

    useEffect(()=>{
        let tem = productos?.filter(product => product.category === filtros)
        setProductosFiltrados(tem)
    },[filtros])
 
    return (
        <>
            <Filtros  setFiltros={setFiltros}/>
            <Listado productos={productosFiltrados.length !== 0 ? productosFiltrados : productos}/>
        </>
    )
}

export default Principal;