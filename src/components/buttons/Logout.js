
import React from "react";
import { Link } from "react-ionicons";
import { useUsuario } from "../../providers/user.provider";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { signout } = useUsuario();
  const history = useNavigate();

  const onClick = async() => {
    await signout();
    history('/');
  }

  return (
    <>
      <button onClick={onClick} className="btn btn-primary">
        Cerrar sesion
      </button>
    </>
  );
};

export default LogOut;
