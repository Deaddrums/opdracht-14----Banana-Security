import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider ({children}) {
    const [isAuth, toggleIsAuth] = useState(false)
    const navigate = useNavigate();

    function login () {
        toggleIsAuth(true)
        navigate('/profile')
        console.log("Eeey je bent ingelogd!")
    }

    function logout () {
        toggleIsAuth(false)
        navigate('/')
        console.log("Ewa G, t'is je meui gelukt met uitloggen")
    }

const contextData = {
    isAuth: isAuth,
    login: login,
    logout: logout,
}

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;