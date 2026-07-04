function Footer() {
    return (
        <footer className="bg-[#4E342E] text-white py-10 mt-10">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-8">

                    <div>

                        <h2 className="text-3xl font-bold text-[#C89B3C]">
                             Café Aroma
                        </h2>

                        <p className="mt-4 text-gray-300">
                            Disfruta del auténtico sabor del café artesanal
                            preparado con ingredientes de la mejor calidad.
                        </p>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Enlaces
                        </h3>

                        <ul className="space-y-2">

                            <li>Inicio</li>

                            <li>Nosotros</li>

                            <li>Productos</li>

                            <li>Contacto</li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Contacto
                        </h3>

                        <p> Lima - Perú</p>

                        <p> 999 999 999</p>

                        <p> contacto@cafearoma.com</p>

                    </div>

                </div>

                <hr className="my-8 border-gray-500" />

                <p className="text-center text-gray-300">
                     2026 Café Aroma - Todos los derechos reservados.
                </p>

            </div>

        </footer>
    );
}

export default Footer;