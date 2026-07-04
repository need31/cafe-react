import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [autenticado, setAutenticado] = useState(false);

    const login = (correo, password) => {

        if (
            correo === "admin@cafearoma.com" &&
            password === "admin123"
        ) {
            setAutenticado(true);
            return true;
        }

        return false;
    };

    const logout = () => {
        setAutenticado(false);
    };

    return (
        <AuthContext.Provider
            value={{
                autenticado,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;