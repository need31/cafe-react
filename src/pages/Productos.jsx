import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import CardProducto from "../components/productos/CardProducto";
import { obtenerProductos } from "../services/productoService";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const datos = await obtenerProductos();
            setProductos(datos);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        } finally {
            setCargando(false);
        }
    };

    if (cargando) {
        return (
            <Layout>
                <div className="min-h-screen flex justify-center items-center">
                    <h2 className="text-3xl font-bold text-[#4E342E]">
                        Cargando productos...
                    </h2>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className="bg-[#FFF8E7] py-20 min-h-screen">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center text-[#4E342E]">
                        Nuestros Productos
                    </h1>

                    <p className="text-center text-gray-600 mt-5 mb-14 text-lg">
                        Descubre nuestra selección de cafés preparados con ingredientes de alta calidad.
                    </p>

                    {productos.length === 0 ? (

                        <p className="text-center text-xl text-gray-600">
                            No hay productos disponibles.
                        </p>

                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {productos.map((producto) => (

                                <CardProducto
                                    key={producto.id}
                                    id={producto.id}
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    descripcion={producto.descripcion}
                                    imagen={producto.imagen}
                                />

                            ))}

                        </div>

                    )}

                </div>

            </section>
        </Layout>
    );
}

export default Productos;