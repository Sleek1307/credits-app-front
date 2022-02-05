import React from "react";

const SolicitudesCreditos = (props) => {
  return (
    <>
      <h1 className="text-center">Solicitudes de credito</h1>

      <div className="overflow-auto p-2" style={{ height: "430px" }}>
        <div className="border rounded-1 px-3">
          <div>
            <div className="row border-bottom">
              <div className="col-2">
                <h2>Cliente:</h2>
              </div>

              <div className="col-3 my-auto">
                <p className="fs-5 my-0">Nombres:{}</p>
              </div>
              <div className=" col-3 my-auto">
                <p className="fs-5 my-0">Apellidos:{}</p>
              </div>
              <div className=" col-3 my-auto">
                <p className="fs-5 my-0">Identificacion:{}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h2>Monto:{}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h2>Cuotas:{}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex py-4">
                <button className="btn btn-primary mr-2">Aceptar</button>
                <button className="btn btn-primary ml-2">Rechazar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudesCreditos;
