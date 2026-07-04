import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

import PrivateRoute from "./PrivateRoute";

function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/nosotros" element={<Nosotros />} />

                <Route path="/productos" element={<Productos />} />

                <Route path="/carrito" element={<Carrito />} />

                <Route path="/contacto" element={<Contacto />} />

                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRouter;