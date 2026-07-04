import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import CarritoProvider from "./components/Context/CarritoContext";
import AuthProvider from "./components/Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <AuthProvider>

        <CarritoProvider>
            <App />
        </CarritoProvider>

        </AuthProvider>

    </React.StrictMode>
);