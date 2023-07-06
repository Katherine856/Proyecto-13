import Categorias from '../data/categorias.json' //JSON con las categorias

const Filtros = ({setFiltros}) => { //Recibimos la funcion para setear el valor del filtro
     return (
        <>
            Categorias 
            <ul>
                {Categorias.map((categoria)=> 
                    <li key={categoria.nombre}>
                        <button onClick={()=>setFiltros(categoria.valor)}>
                            {categoria.nombre}
                        </button>
                    </li>
                )}
                <li><button onClick={()=>setFiltros(null)}>Todas las categorias</button></li> 
            </ul>
        </>
     )
}

export default Filtros;