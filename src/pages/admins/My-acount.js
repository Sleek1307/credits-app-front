import React, { useState } from "react";
import { useUsuario } from "./../../providers/user.provider";
import { useForm } from "react-hook-form";

const MyAcount = () => {
  const auth = useUsuario();
  const { handleSubmit } = useForm();

  const [userData, setUserData] = useState({
    nombre: auth.user.data.name,
    apellido: auth.user.data.lastName,
    email: auth.user.data.email,
    documento: auth.user.data.doc_id,
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log(userData);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-12 mt-4">
            <h1 className="text-center">Datos Personales</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-100">
                <div className="w-100 row mt-2 mx-0">
                  <div className="col-6 d-flex justify-content-center flex-column">
                    <label className="mb-0 font-weight-bold">Nombres:</label>
                    <input
                      onChange={handleChange}
                      value={userData.nombre}
                      type="text"
                      name="nombre"
                    />
                  </div>
                  <div className="col-6 d-flex justify-content-center flex-column">
                    <label className="mb-0 font-weight-bold">Apellidos:</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={userData.apellido}
                      name="apellido"
                    />
                  </div>
                </div>
                <div className="w-100 row mt-4 mx-0">
                  <div className="col-6 d-flex justify-content-center flex-column">
                    <label className="mb-0 font-weight-bold">
                      Tipo de identificacion:
                    </label>
                    <select name="" id="">
                      <option value="C.C">Cedula de ciudadania</option>
                      <option value="C.E">Cedula extranjera</option>
                      <option value="P">Pasaporte</option>
                    </select>
                  </div>
                  <div className="col-6 d-flex justify-content-center flex-column">
                    <label className="mb-0 font-weight-bold">
                      No.Identificación:
                    </label>
                    <input
                      type="text"
                      name="documento"
                      value={userData.documento}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-100 row mt-4 mx-0">
                  <div className="col-6 d-flex justify-content-center flex-column">
                    <label className="mb-0 font-weight-bold">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary" style={{height:'38px'}}>
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <hr />
          </div>

          <div className="col-12">
            <h2 className="text-center">Creditos</h2>
            <div>
              <h3 className="mt-4"> Creditos aprovados:</h3>
              <div
                className="d-flex justify-content-center p-3"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "250px",
                }}
              >
                <table
                  className="w-75"
                  style={{ borderRadius: "10¿px", border: "1px solid #ccc" }}
                >
                  <thead>
                    <th className="text-center">ID. Credito</th>
                    <th className="text-center">Cliente</th>
                    <th className="text-center">Fecha</th>
                    <th className="text-center">Estado</th>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="mt-4">Creditos rechazados:</h3>
              <div
                className="d-flex justify-content-center p-3"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "250px",
                }}
              >
                <table
                  className="w-75"
                  style={{ borderRadius: "10px", border: "1px solid #ccc" }}
                >
                  <thead>
                    <th className="text-center">ID. Credito</th>
                    <th className="text-center">Cliente</th>
                    <th className="text-center">Fecha</th>
                    <th className="text-center">Estado</th>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAcount;
