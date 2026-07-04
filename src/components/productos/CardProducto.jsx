import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";

function CardProducto({ id, nombre, precio, descripcion, imagen }) {

    const { agregarAlCarrito } = useContext(CarritoContext);

    const agregarProducto = () => {

        agregarAlCarrito({
            id,
            nombre,
            precio,
            descripcion,
            imagen
        });

        alert(`${nombre} fue agregado al carrito.`);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <img
                src={imagen}
                alt={nombre}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <h3 className="text-2xl font-bold text-[#4E342E]">
                    {nombre}
                </h3>

                <p className="text-gray-600 mt-3 text-justify">
                    {descripcion}
                </p>

                <p className="text-[#C89B3C] text-2xl font-bold mt-4">
                    S/ {precio}
                </p>

                <button
                    onClick={agregarProducto}
                    className="mt-5 w-full bg-[#4E342E] text-white py-3 rounded-lg hover:bg-[#6F4E37] transition"
                >
                    Agregar al carrito
                </button>

            </div>

        </div>
    );
}

export default CardProducto;