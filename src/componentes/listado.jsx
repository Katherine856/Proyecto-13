import { useEffect, useState } from "react";
import Item from "./item";

const Listado = ({productos}) => {

    return (
        <>
            {productos.map((product) =>
                <Item key={product.id} id={product.id} nombre={product.title} imagen={product.image} />
            )}
        </>
    )
}

export default Listado;