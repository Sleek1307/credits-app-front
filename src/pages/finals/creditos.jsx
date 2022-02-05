import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Creditos = () => {
  return (
    <Fragment>
      <div className="h-100 d-flex justify-content-around align-items-center">
     
          <div class="card">
            <h5 class="card-header">Solicitar creditos</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                className="mb-3 btn btn-primary"
                to="/final/creditos/solicitar"
              >
                Solicitar
              </Link>
            </div>
          </div>

          <div class="card">
            <h5 class="card-header">Simular pagos</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                className="mb-3 btn btn-primary"
                to="/final/creditos/pagar"
              >
                Simular
              </Link>
            </div>
          </div>
        </div>

    </Fragment>
  );
};

export default Creditos;
