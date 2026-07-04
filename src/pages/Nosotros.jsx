import Layout from "../components/layout/Layout";

function Nosotros() {
  return (
    <Layout>

      <section className="bg-[#FFF8E7] py-16 min-h-screen">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-[#4E342E] mb-12">
            Sobre Café Aroma
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-3xl font-bold text-[#4E342E] mb-4">
                Nuestra Historia
              </h2>

              <p className="text-gray-700 leading-8 text-justify">
                Café Aroma nació con la pasión de ofrecer una experiencia única
                a los amantes del café. Seleccionamos cuidadosamente nuestros
                granos y elaboramos cada bebida con dedicación, brindando un
                ambiente cálido y acogedor para nuestros clientes.
              </p>

            </div>

            <div>

              <img
                src="/src/assets/images/nosotros.jpg"
                alt="Nosotros"
                className="rounded-xl shadow-lg"
              />

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-white rounded-xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4E342E] mb-4">
                Misión
              </h2>

              <p className="text-gray-700">
                Ofrecer productos de excelente calidad y una atención
                personalizada que haga sentir a cada cliente como en casa.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4E342E] mb-4">
                Visión
              </h2>

              <p className="text-gray-700">
                Ser reconocidos como una cafetería líder por la calidad de
                nuestros productos, innovación y compromiso con nuestros
                clientes.
              </p>

            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Nosotros;