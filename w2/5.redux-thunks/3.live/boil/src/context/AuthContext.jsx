import axios from "axios";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const login = (creds) => {
    axios
      .post("https://reqres.in/api/login", creds)
      .then((d) => {
        setIsAuth(true);
        localStorage.setItem("token", d.token);
        if (state.from) {
          navigate(state.from, { replace: true });
        } else {
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e.message);
        setIsAuth(false);
        localStorage.removeItem("token");
      });
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
    localStorage.setItem("token", "");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsAuth(token);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
