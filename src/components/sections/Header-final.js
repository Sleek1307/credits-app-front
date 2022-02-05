import React from "react";
import { Link } from "react-router-dom";
import "jquery/dist/jquery.js";
import LogOut from "./../buttons/Logout";
import Acceso from "./../buttons/Acceso";
import {
  ReaderOutline,
  PersonOutline,
  ClipboardOutline,
  BagOutline,
  CardOutline,
  PricetagOutline,
  ReceiptOutline,
  MenuOutline,
} from "react-ionicons";

const showToggler = () => {
  console.log("hola mundo");
  const e = document.querySelector("#navbarTogglerExternalContent2");
  e.classList.remove("show");
};

const BurgerMenu = (props) => {
  return (
    <>
      <div className="col-12">
        <div class="container-fluid my-auto">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#listContent"
            aria-controls="listContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <MenuOutline height="40px" width="40px" />
          </button>
        </div>
        <div class="collapse" id="listContent">
          <div class="shadow-lg p-4 mt-2 w-100 d-flex justify-content-startn bg-light">
            <div>
              <Link
                to="/internal/credits"
                style={{ color: "black" }}
                className="fs-6 pl-3 pb-4 font-weight d-block border-0"
                onClick={showToggler}
              >
                <ReaderOutline
                  color={"black"}
                  height="30px"
                  width="30px"
                  className="p-2"
                />
                Solicitudes de credito
              </Link>

              <Link
                to="/internal/prorroga"
                style={{ color: "black" }}
                className="fs-6 pl-3 pb-4 font-weight d-block border-0"
                onClick={showToggler}
              >
                <ReaderOutline
                  color={"black"}
                  height="30px"
                  width="30px"
                  className="p-2"
                />
                Solicitudes de prorroga
              </Link>

              <Link
                to="/internal/historypay"
                style={{ color: "black" }}
                className="fs-6 pl-3 pb-4 font-weight d-block border-0"
                onClick={showToggler}
              >
                <ReaderOutline
                  color={"black"}
                  height="30px"
                  width="30px"
                  className="p-2"
                />
                Historial de pago
              </Link>

              <Link
                to="/internal/internals"
                style={{ color: "black" }}
                className="fs-6 pl-3 pb-4 font-weight d-block border-0"
                onClick={showToggler}
              >
                <ReaderOutline
                  color={"black"}
                  height="30px"
                  width="30px"
                  className="p-2"
                />
                Usuarios internos
              </Link>

              <Link
                to="/internal/myacount"
                style={{ color: "black" }}
                className="fs-6 pl-3 pb-4 font-weight d-block border-0"
                onClick={showToggler}
              >
                <ReaderOutline
                  color={"black"}
                  height="30px"
                  width="30px"
                  className="p-2"
                />
                Mi cuenta
              </Link>

              <LogOut />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <section className="w-100 p-0" style={{ height: "80px" }}>
        <nav className="w-100">
          <div
            className="p-0 w-100 shadow-sm row justify-content-between mx-0"
            style={{ height: "80px" }}
          >
            <div
              className="col-9 my-auto"
              style={{ display: props.img === undefined ? "none" : "block" }}
            >
              <img
                src={props.img}
                style={{
                  height: "65px",
                }}
              />
            </div>
            {props.img === undefined ? (
              <div id="burger-menu" className="my-auto col-12">
                <BurgerMenu button={props.button} />
              </div>
            ) : null}

            {props.img === undefined ? (
              <div
                id="log-out"
                className="my-auto col-12 pr-5 d-flex justify-content-end"
              >
                <LogOut />
              </div>
            ) : (
              <div className={`my-auto col-3 pr-5 d-flex justify-content-end`}>
                <Acceso />
              </div>
            )}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;