import Categorias from '../data/categorias.json'

const Filtros = ({setFiltros}) => {
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