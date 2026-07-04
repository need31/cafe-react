function Hero() {
  return (
    <section className="bg-[#FFF8E7] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

        {/* Texto */}
        <div className="md:w-1/2">

          <h1 className="text-5xl font-bold text-[#4E342E] leading-tight">
            Bienvenido a
            <span className="text-[#C89B3C]"> Café Aroma</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            Disfruta del auténtico sabor del café artesanal preparado con
            ingredientes de la mejor calidad.
          </p>

          <button className="mt-8 bg-[#4E342E] text-white px-6 py-3 rounded-lg hover:bg-[#6F4E37] transition">
            Ver Productos
          </button>

        </div>

        {/* Imagen */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">

          <img
  src="/images/hero.jpg"
  alt="Café Aroma"
  className="w-96"
/>

        </div>

      </div>
    </section>
  );
}

export default Hero;