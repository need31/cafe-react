function CardEstadistica({ titulo, valor, icono }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="text-4xl mb-3">
                {icono}
            </div>

            <h3 className="text-lg font-semibold text-gray-600">
                {titulo}
            </h3>

            <p className="text-3xl font-bold text-[#4E342E] mt-2">
                {valor}
            </p>

        </div>

    );

}

export default CardEstadistica;