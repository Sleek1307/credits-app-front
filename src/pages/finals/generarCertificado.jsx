import React from "react";

const generarCertificado = () => {
  return (
    <>
        <div className="container h-100 d-flex align-items-center">
          <div class="row">
            <div class="col-sm-6">
              <h1>Generar certificados</h1>
              <div class="row">
                <div class="col-sm-9">
                  <label>Producto</label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-9">
                  <button type="button" className="mt-2 form-control btn btn-primary">
                    Generar
                  </button>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <img
                src="https://unexplicamx.com/wp-content/uploads/2021/05/Solicitud-de-Credito-Formato-Word.jpg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
          </div>
        </div>
    </>
  );
};

export default generarCertificado;
