function TablaProductos({ productos }) {

    return (

        <div className="bg-white rounded-xl shadow-lg mt-10 p-6">

            <h2 className="text-2xl font-bold text-[#4E342E] mb-6">
                Productos Registrados
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="py-3 text-left">ID</th>

                        <th className="text-left">Producto</th>

                        <th className="text-left">Precio</th>

                    </tr>

                </thead>

                <tbody>

                    {productos.map((producto) => (

                        <tr
                            key={producto.id}
                            className="border-b"
                        >

                            <td className="py-3">
                                {producto.id}
                            </td>

                            <td>
                                {producto.nombre}
                            </td>

                            <td>
                                S/ {producto.precio}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default TablaProductos;