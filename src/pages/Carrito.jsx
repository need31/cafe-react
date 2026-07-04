import { useContext } from "react";
import Layout from "../components/layout/Layout";
import { CarritoContext } from "../components/Context/CarritoContext";

function Carrito() {
    const { carrito, eliminarProducto, aumentarCantidad, disminuirCantidad, total } =
        useContext(CarritoContext);

    return (
        <Layout>
            <section className="bg-[#FFF8E7] min-h-screen py-10 overflow-x-hidden">
                <div className="max-w-6xl mx-auto px-4">

                    <h1 className="text-4xl md:text-5xl font-bold text-[#4E342E] text-center mb-10">
                        Mi Carrito
                    </h1>

                    {carrito.length === 0 ? (
                        <p className="text-center text-xl text-gray-600">
                            Tu carrito está vacío.
                        </p>
                    ) : (
                        <>
                            <div className="space-y-6">
                                {carrito.map((producto) => (
                                    <div
                                        key={producto.id}
                                        className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 w-full"
                                    >
                                        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full md:w-auto">
                                            <img
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                                className="w-28 h-28 object-cover rounded-lg"
                                            />

                                            <div>
                                                <h2 className="text-2xl font-bold text-[#4E342E]">
                                                    {producto.nombre}
                                                </h2>

                                                <p className="text-gray-600">
                                                    S/ {producto.precio}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => disminuirCantidad(producto.id)}
                                                className="bg-gray-300 px-3 py-1 rounded"
                                            >
                                                -
                                            </button>

                                            <span className="font-bold">
                                                {producto.cantidad}
                                            </span>

                                            <button
                                                onClick={() => aumentarCantidad(producto.id)}
                                                className="bg-gray-300 px-3 py-1 rounded"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <p className="font-bold text-xl text-[#C89B3C]">
                                            S/ {producto.precio * producto.cantidad}
                                        </p>

                                        <button
                                            onClick={() => eliminarProducto(producto.id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 text-center md:text-right">
                                <h2 className="text-3xl font-bold text-[#4E342E]">
                                    Total: S/ {total}
                                </h2>

                                <button className="mt-5 bg-[#4E342E] text-white px-8 py-3 rounded-lg hover:bg-[#6F4E37]">
                                    Finalizar Compra
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default Carrito;