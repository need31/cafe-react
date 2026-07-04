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

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="text-3xl font-bold text-[#C89B3C]">
                     Café Aroma
                </h1>

                <ul className="flex gap-8 text-white font-semibold">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#C89B3C]"
                                    : "hover:text-[#C89B3C] transition"
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#C89B3C]"
                                    : "hover:text-[#C89B3C] transition"
                            }
                        >
                            Nosotros
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/productos"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#C89B3C]"
                                    : "hover:text-[#C89B3C] transition"
                            }
                        >
                            Productos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#C89B3C]"
                                    : "hover:text-[#C89B3C] transition"
                            }
                        >
                            Contacto
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/carrito"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#C89B3C]"
                                    : "hover:text-[#C89B3C] transition"
                            }
                        >
                             Carrito ({cantidadProductos})
                        </NavLink>
                    </li>

                    <li>
    <NavLink
        to="/login"
        className={({ isActive }) =>
            isActive
                ? "text-[#C89B3C]"
                : "hover:text-[#C89B3C] transition"
        }
    >
        Administrador
    </NavLink>
</li>

                </ul>

            </div>

        </nav>
    );
}

export default Navbar;