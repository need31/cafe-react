import { useContext, useState } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const iniciarSesion = (e) => {

        e.preventDefault();

        const acceso = login(correo, password);

        if (acceso) {

            navigate("/dashboard");

        } else {

            alert("Correo o contraseña incorrectos.");

        }

    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-[#FFF8E7]">

            <form
                onSubmit={iniciarSesion}
                className="bg-white shadow-xl rounded-xl p-10 w-96"
            >

                <h2 className="text-3xl font-bold text-center text-[#4E342E] mb-8">
                    Login Administrador
                </h2>

                <input
                    type="email"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="border w-full p-3 rounded mb-5"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border w-full p-3 rounded mb-6"
                />

                <button
                    type="submit"
                    className="bg-[#4E342E] text-white w-full py-3 rounded hover:bg-[#6F4E37] mb-4"
                >
                    Iniciar sesión
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="w-full border-2 border-[#4E342E] text-[#4E342E] py-3 rounded hover:bg-[#4E342E] hover:text-white transition"
                >
                    Volver al Inicio
                </button>

            </form>

        </div>

    );

}

export default Login;