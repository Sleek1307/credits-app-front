import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EllipsisVerticalCircleOutline } from "react-ionicons";

const solicutesdPlazo = () => {
  // const [prorrogas, setProrroga] = useState([]);

  // useEffect(()=>{

  // }, [])

  return (
    <>
      <div
        className="modal fade"
        id="solicitud"
        tab-index="-1"
        aria-labelledby="solicitud"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h1 className="text-center modal-title">Solicitud de plazo</h1>
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <p className="font-weight-bold">Solicitud:{} </p>
                  </div>
                  <div>
                    <p className="font-weight-bold">
                      Fecha de la solicitud:{}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="font-weight-bold">Cliente: {}</p>
                </div>
                <div>
                  <p className="font-weight-bold">Identificacion: {}</p>
                </div>
              </div>
              <div>
                <div
                  className="mx-auto"
                  style={{ width: "475px", height: "200px" }}
                >
                  <p className="mb-1 font-weight-bold">Motivos:</p>
                  <div
                    className="w-100 shadow-lg"
                    style={{ height: "80%", background: "white" }}
                  ></div>
                </div>
              </div>

              <div className="d-flex flex-column">
                <div>
                  <p className="font-weight-bold">Monto: {}</p>
                </div>
                <div>
                  <p className="font-weight-bold">Cuotas:{}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <div>
                  <button
                    className="btn btn-primary mr-2"
                    style={{ width: "100px" }}
                  >
                    Aceptar
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-primary ml-2"
                    style={{ width: "100px" }}
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center">Solicitudes de plazo</h1>
      <div className="rounded-3">
        <table
          className="border table mx-auto w-auto"
          style={{ borderRadius: "20px" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Registro N°</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th className="text-primary">
                <a
                  class="btn btn-light btn-me d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#solicitud"
                >
                  <EllipsisVerticalCircleOutline
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {prorrogas.map((item, index) =>{
              return(
                <tr>
                  <th>
                    {(index++)}
                  </th>
                  <th>
                    {item.user}
                  </th>
                  <th>
                    {item.date1}
                  </th>
                  <th>
                    <button className="btn btn-primary">
                      ver mas...
                    </button>
                  </th>
                </tr>
              )
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default solicutesdPlazo;
