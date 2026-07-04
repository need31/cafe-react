import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../Context/CarritoContext";

function Navbar() {
    const { carrito } = useContext(CarritoContext);

    const cantidadProductos = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    return (
        <nav className="bg-[#4E342E] shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                    <h1 className="text-3xl font-bold text-[#C89B3C] mb-4 md:mb-0">
                        Café Aroma
                    </h1>

                    <ul className="flex flex-wrap justify-center gap-4 text-white font-semibold">

                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>

                        <li>
                            <NavLink to="/nosotros">Nosotros</NavLink>
                        </li>

                        <li>
                            <NavLink to="/productos">Productos</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>

                        <li>
                            <NavLink to="/carrito">
                                Carrito ({cantidadProductos})
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/login">
                                Administrador
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;