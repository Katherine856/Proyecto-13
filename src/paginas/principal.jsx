import { useEffect, useState } from "react"
import Filtros from "../componentes/filtros"
import Listado from "../componentes/listado"

const Principal = () => {

    const [productos, setProductos] = useState([])
    const [filtros, setFiltros] = useState(null)
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [query, setQuery] = useState('');
    const [buscados, setBuscados] = useState(filtros)

    const hacerFetch = async () => { //Funcion asincrona 
        const api = await fetch('https://fakestoreapi.com/products') //Hacer fetch 
            .then(res => res.json()) //Convertir la respuesta en json
            .then(json => setProductos(json)) //Seteamos el valor de productos
    }

    useEffect(() => {
        hacerFetch() //Ejecucion de la funcion
    }, []) //Apenas se inicializa la pagina

    useEffect(() => {
        if (!filtros) {
            setProductosFiltrados(productos)
        } else {
            let tem = productos?.filter(product => product.category === filtros) //Fitran los productos por categoria
            setProductosFiltrados(tem) //Seteamos el valor de los productos filtrados
        }
    }, [filtros, productos]) //Cada vez que cambie el filtros o productos

    useEffect(() => { 
        if(query !== ''){
            let temp = productosFiltrados.filter(obj => obj.title.includes(query)); //Busca en los titulos que incluyan la palabra de la busqueda
            setBuscados(temp)
        }else{
            setBuscados(productosFiltrados) //Seteamos el valor de los productos buscados
        }
    },[query, productosFiltrados])  //Cada vez que cambie el query o filtros

    return (
        <>
            <Filtros setFiltros={setFiltros} />
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <Listado productos={buscados !== null ? buscados : productosFiltrados} /> 
        </>
    )
}

export default Principal;