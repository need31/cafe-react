import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../components/Context/AuthContext";
import { obtenerProductos } from "../services/productoService";

import CardEstadistica from "../components/dashboard/CardEstadistica";
import TablaProductos from "../components/dashboard/TablaProductos";

function Dashboard() {

    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {

        const datos = await obtenerProductos();

        setProductos(datos);

    };

    const cerrarSesion = () => {

        logout();

        navigate("/login");

    };

    const totalProductos = productos.length;

    const precioPromedio = productos.length > 0
        ? (
            productos.reduce((suma, p) => suma + p.precio, 0) /
            productos.length
        ).toFixed(2)
        : 0;

    const productoMasCaro = productos.length > 0
        ? productos.reduce((mayor, actual) =>
            actual.precio > mayor.precio ? actual : mayor
        )
        : null;

    const productoMasBarato = productos.length > 0
        ? productos.reduce((menor, actual) =>
            actual.precio < menor.precio ? actual : menor
        )
        : null;

    return (

        <div className="min-h-screen bg-[#FFF8E7]">

            <header className="bg-[#4E342E] text-white py-5 px-8 flex justify-between">

                <h1 className="text-3xl font-bold">

                    Dashboard Café Aroma

                </h1>

                <button
                    onClick={cerrarSesion}
                    className="bg-red-600 px-5 py-2 rounded hover:bg-red-700"
                >

                    Cerrar sesión

                </button>

            </header>

            <div className="max-w-7xl mx-auto py-10 px-6">

                <h2 className="text-4xl font-bold text-[#4E342E] mb-8">

                    Bienvenido Administrador

                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <CardEstadistica
                        titulo="Productos"
                        valor={totalProductos}
                        
                    />

                    <CardEstadistica
                        titulo="Precio Promedio"
                        valor={`S/ ${precioPromedio}`}
                        
                    />

                    <CardEstadistica
                        titulo="Más Caro"
                        valor={productoMasCaro?.nombre}
                        
                    />

                    <CardEstadistica
                        titulo="Más Barato"
                        valor={productoMasBarato?.nombre}
                        
                    />

                </div>

                <TablaProductos
                    productos={productos}
                />

            </div>

        </div>

    );

}

export default Dashboard;