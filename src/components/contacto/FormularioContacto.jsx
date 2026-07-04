import { useState } from "react";

function FormularioContacto() {

    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            formulario.nombre === "" ||
            formulario.correo === "" ||
            formulario.telefono === "" ||
            formulario.mensaje === ""
        ) {
            alert("Complete todos los campos.");
            return;
        }

        alert("Mensaje enviado correctamente.");

        setFormulario({
            nombre: "",
            correo: "",
            telefono: "",
            mensaje: ""
        });

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8"
        >

            <div className="mb-5">

                <label className="block mb-2 font-semibold">
                    Nombre
                </label>

                <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    placeholder="Ingrese su nombre"
                />

            </div>

            <div className="mb-5">

                <label className="block mb-2 font-semibold">
                    Correo
                </label>

                <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    placeholder="correo@ejemplo.com"
                />

            </div>

            <div className="mb-5">

                <label className="block mb-2 font-semibold">
                    Teléfono
                </label>

                <input
                    type="text"
                    name="telefono"
                    value={formulario.telefono}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    placeholder="999999999"
                />

            </div>

            <div className="mb-5">

                <label className="block mb-2 font-semibold">
                    Mensaje
                </label>

                <textarea
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={handleChange}
                    rows="5"
                    className="w-full border rounded-lg p-3"
                    placeholder="Escriba su mensaje"
                ></textarea>

            </div>

            <button
                type="submit"
                className="w-full bg-[#4E342E] text-white py-3 rounded-lg hover:bg-[#6F4E37] transition"
            >
                Enviar
            </button>

        </form>

    );

}

export default FormularioContacto;