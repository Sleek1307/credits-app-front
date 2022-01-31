import React, { useEffect, useState } from "react";
import { login, get } from "./../services/users.services";

let UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  let [user, setUser] = useState(null);

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
      console.log(sesion)
      setUser(sesion.data.item);
    }
  };

  let getUser = async (rol) => {
    const { data } = await get(rol);
    setUser(data.item);
  };

  let value = { user, signin, getUser };
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
