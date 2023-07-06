import { Link } from "react-router-dom";

const Item = (props) => { //recibimos los datos desde listado

    return(
        <>
            <Link to={'/detalles/' + props.id} > {/* Nos redirige a cada detalle */}
                <h3>{props.nombre}</h3>
                <img src={props.imagen} alt={props.nombre} />
            </Link>
        </>
    )
}
 
export default Item;
