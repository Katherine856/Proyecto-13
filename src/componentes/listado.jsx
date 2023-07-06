import { useEffect, useState } from "react";
import Item from "./item";

const Listado = ({productos}) => { //recibimos el arreglo con todos los productos ya filtrados

    return (
        <>
            {productos.map((product) =>
                <Item key={product.id} id={product.id} nombre={product.title} imagen={product.image} />
            )}
        </>
    )
}

export default Listado;