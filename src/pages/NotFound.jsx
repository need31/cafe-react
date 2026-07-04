import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF8E7]">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-[#4E342E]">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4 text-[#4E342E]">
          Página no encontrada
        </h2>

        <p className="text-gray-600 mt-4">
          Lo sentimos, la página que buscas no existe.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-[#4E342E] text-white px-6 py-3 rounded-lg hover:bg-[#6F4E37] transition"
        >
          Volver al Inicio
        </Link>

      </div>

    </section>
  );
}

export default NotFound;