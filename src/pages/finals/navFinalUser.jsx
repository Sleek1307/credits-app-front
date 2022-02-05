import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavFinal = () => {
  return (
    <>
      <div className="h-100 d-flex justify-content-around align-items-center">
        <div class="card" style={{ width: "18rem" }}>
          <img src="http://localhost:3000/prorroga.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/final/prorroga" className="btn btn-primary">
              Prorroga
            </Link>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="http://localhost:3000/creditos.jpg" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/final/creditos" className="btn btn-primary">
              Creditos
            </Link>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="http://localhost:3000/documentos.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/final/documentos" className="btn btn-primary">
              Documentos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavFinal;
