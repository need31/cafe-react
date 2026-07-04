import CardProducto from "../productos/CardProducto";

function ProductosDestacados() {

    const productos = [
        {
            id: 1,
            nombre: "Espresso",
            precio: 8,
            imagen: "/images/espresso.jpg"
        },
        {
            id: 2,
            nombre: "Cappuccino",
            precio: 12,
            imagen: "/images/cappuccino.jpg"
        },
        {
            id: 3,
            nombre: "Latte",
            precio: 10,
            imagen: "/images/latte.jpg"
        }
    ];

    return (

        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center text-[#4E342E] mb-10">
                    Productos Destacados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {productos.map((producto) => (
                        <CardProducto
                            key={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    ))}

                </div>

            </div>

        </section>

    );
}

export default ProductosDestacados;