const Item = (props) => {

    return(
        <>
            <h3>{props.nombre}</h3>
            <img src={props.imagen} alt={props.nombre} />
        </>
    )
}
 
export default Item;
