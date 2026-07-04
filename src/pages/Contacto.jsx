import Layout from "../components/layout/Layout";
import FormularioContacto from "../components/contacto/FormularioContacto";

function Contacto() {
  return (
    <Layout>
      <section className="bg-[#FFF8E7] py-16 min-h-screen">

        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-[#4E342E]">
            Contáctanos
          </h1>

          <p className="text-center text-gray-600 mt-4 mb-10">
            ¿Tienes alguna consulta? Completa el siguiente formulario y nos pondremos en contacto contigo.
          </p>

          <FormularioContacto />

        </div>

      </section>
    </Layout>
  );
}

export default Contacto;