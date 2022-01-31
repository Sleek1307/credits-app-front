import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsuario } from "../../providers/user.provider";

const schema = yup
  .object({
    email: yup.string().required("Campo requerido"),
    password: yup
      .string()
      .required("Campo requerido")
      .min(8, "minimo 8 caracteres"),
    rol: yup.string().required("Campo requerido"),
  })
  .required();

const usersType = [
  ["Administrador", "admin"],
  ["Cliente", "final"],
];

const Acceso = () => {

  const { signin, user, getUser } = useUsuario();
  const history = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form) => {
    await signin(form);
    let info = user.data;
    console.log(info);
    if (info.rol == 'admin') {
      history('/admin/credits');
    }else if(info.rol == 'int'){
      history('/internal/credits')
    }else if(info.rol == 'final'){
      history('/final')
    }
  };

  return (
    <section>
      <OverlayTrigger
        key="bottom"
        placement="left"
        trigger={"click"}
        overlay={
          <Popover id="popover">
            <Popover.Header>
              <div className="w-100 d-flex justify-content-center">
                <h3 className="my-auto">Acceder</h3>
              </div>
            </Popover.Header>
            <Popover.Body>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="floatingInput">Email address</label>
                  <input
                    {...register("email", { required: true })}
                    type="string"
                    className="form-control form-floating"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <p className="text-danger">{errors.mail?.message}</p>
                </div>

                <div>
                  <label htmlFor="floatingRol">Tipo de usuario</label>
                  <select
                    {...register("rol", { required: true })}
                    type="string"
                    className="form-control form-floating"
                    id="floatingRol"
                    placeholder="Rol"
                  >
                    {usersType.map((e) => {
                      return <option value={e[1]}>{e[0]}</option>;
                    })}
                  </select>
                  <p className="text-danger">{errors.rol?.message}</p>
                </div>

                <div>
                  <label htmlFor="floatingPassword">Password</label>

                  <input
                    {...register("password")}
                    type="password"
                    className="form-control form-floating"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <p className="text-danger">{errors.pass?.message}</p>
                </div>

                <div className="mt-3 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    iniciar sesion
                  </button>
                </div>

                <div className="d-flex justify-content-center">
                  <Link to="/register" className="">
                    crear una cuenta
                  </Link>
                </div>
              </form>
            </Popover.Body>
          </Popover>
        }
      >
        <Button className="bg-primary" variant="secondary" id="sesion">
          Acceder
        </Button>
      </OverlayTrigger>
    </section>
  );
};

export default Acceso;
