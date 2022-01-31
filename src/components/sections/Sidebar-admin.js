import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  PersonOutline,
  PeopleOutline,
  MailOutline,
  ReaderOutline,
} from "react-ionicons";

const MenuAdmin = () => {
  return (
    <Fragment>
      <div id="sidebar-container" className="bg-primary p-0 col-lg-3">
        <div className="logo">
          <img
            id="logo"
            src="http://localhost:3000/caja-social-white.png"
            alt=""
            style={{ height: "60px" }}
          />
          <hr className="mx-1 bg-light my-1" />
        </div>

        <div className="menu w-100 mt-3">

          <div className="ho d-flex align-items-center" style={{height: '55px'}}>
            <Link
              to="/admin/credits"
              className="w-100 fs-6 pl-3 font-weight d-block text-light border-0"
            >
              <MailOutline
                color={"#00000"}
                height="30px"
                width="30px"
                className="p-2"
              />
              Solicitudes de credito
            </Link>
          </div>

          <div className="ho d-flex align-items-center" style={{height: '55px'}}>
            <Link
              to="/admin/prorroga"
              className="w-100 fs-6 pl-3 font-weight d-block text-light border-0"
            >
              <MailOutline
                color={"#00000"}
                height="30px"
                width="30px"
                className="p-2"
              />
              Solicitudes de prorroga
            </Link>
          </div>

          <div className="ho d-flex align-items-center" style={{height: '55px'}}>
            <Link
              to="/admin/historypay"
              className="w-100 fs-6 pl-3 font-weight d-block text-light border-0"
            >
              <ReaderOutline
                color={"#00000"}
                height="30px"
                width="30px"
                className="p-2"
              />
              Historial de pago
            </Link>
          </div>

          <div className="ho d-flex align-items-center" style={{height: '55px'}}>
            <Link
              to="/admin/internals"
              className="w-100 fs-6 pl-3 font-weight d-block text-light border-0"
            >
              <PeopleOutline
                color={"#00000"}
                height="30px"
                width="30px"
                className="p-2"
              />
              Usuarios internos
            </Link>
          </div>

          <div className="ho d-flex align-items-center" style={{height: '55px'}}>
            <Link
              to="/admin/internos"
              className="w-100 fs-6 pl-3 font-weight d-block text-light border-0"
            >
              <PeopleOutline
                color={"#00000"}
                height="30px"
                width="30px"
                className="p-2"
              />
              Usuarios finales
            </Link>
          </div>

          <div className="ho d-flex align-items-center" style={{height: '55px'}}>
            <Link
              to="/admin/usuariosfinales"
              className="w-100 fs-6 pl-3 font-weight d-block text-light border-0"
            >
              <PersonOutline
                color={"#00000"}
                height="30px"
                width="30px"
                className="p-2"
              />
              Mi cuenta
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuAdmin;
