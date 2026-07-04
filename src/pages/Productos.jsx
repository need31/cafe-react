import Layout from "../components/layout/Layout";
import CardProducto from "../components/productos/CardProducto";

function Productos() {
    const productos = [
        {
            id: 1,
            nombre: "Espresso",
            precio: 8,
            descripcion: "Café intenso y aromático.",
            imagen: "/imagenes/espresso.jpg"
        },
        {
            id: 2,
            nombre: "Cappuccino",
            precio: 12,
            descripcion: "Café con leche espumosa y sabor suave.",
            imagen: "/imagenes/cappuccino.jpg"
        },
        {
            id: 3,
            nombre: "Latte",
            precio: 10,
            descripcion: "Café cremoso con leche vaporizada.",
            imagen: "/imagenes/latte.jpg"
        },
        {
            id: 4,
            nombre: "Americano",
            precio: 9,
            descripcion: "Café clásico suave y equilibrado.",
            imagen: "/imagenes/americano.jpg"
        }
    ];

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

                </div>
            </section>
        </Layout>
    );
}

export default Productos;