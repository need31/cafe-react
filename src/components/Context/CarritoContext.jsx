import { createContext, useState } from "react";

export const CarritoContext = createContext();

function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const existe = carrito.find(item => item.id === producto.id);

        if (existe) {
            const nuevoCarrito = carrito.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );

            setCarrito(nuevoCarrito);
        } else {
            setCarrito([
                ...carrito,
                {
                    ...producto,
                    cantidad: 1
                }
            ]);
        }
    };

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    const aumentarCantidad = (id) => {
        setCarrito(
            carrito.map(item =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const disminuirCantidad = (id) => {
        setCarrito(
            carrito.map(item =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ).filter(item => item.cantidad > 0)
        );
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const total = carrito.reduce(
        (acumulado, item) => acumulado + item.precio * item.cantidad,
        0
    );

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                eliminarProducto,
                aumentarCantidad,
                disminuirCantidad,
                vaciarCarrito,
                total
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
}

export default CarritoProvider;