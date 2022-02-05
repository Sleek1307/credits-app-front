import React, { useEffect, useState } from "react";
import { login, get } from "./../services/users.services";
import { useNavigate } from "react-router-dom";

let UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      getUser(localStorage.rol);
    }
  }, []);

  const signin = async (form) => {
    const { data } = await login(form);

    if (data.token) {
      localStorage.token = data.token;
      localStorage.rol = form.rol;

      const sesion = await get(form.rol);
   
      setUser(sesion.data.item);

      let info = sesion.data.item;

      if (info.data.rol == "admin") {
        history("/admin/credits");
      } else if (info.data.rol == "int") {
        history("/internal/credits");
      } else if (info.data.rol == "final") {
        history("/final");
      }
    }
  };

  const signout = () => {
    localStorage.clear();
    setUser(null);
  };

  let getUser = async (rol) => {
    const { data } = await get(rol);
    setUser(data.item);
  };

  let value = { user, signin, getUser, signout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUsuario = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("El usuario debe estar dentro del proveedor UserContext");
  }
  return context;
};

export { useUsuario, UserProvider };
