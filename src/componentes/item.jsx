import { Link } from "react-router-dom";

const Item = (props) => {

    return(
        <>
            <Link to={'/detalles/' + props.id} >
                <h3>{props.nombre}</h3>
                <img src={props.imagen} alt={props.nombre} />
            </Link>
        </>
    )
}
 
export default Item;
