import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  month: yup.string().required("Debe seleccionar una opción"),
});

const SimularPago = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="p-0 fs-3 w-100 col-sm-12 d-block position-relative">
            <img
              src="http://localhost:3000/banco-caja-social-personas-creditos-credito-de-libre-inversion.jpeg"
              alt=""
              className="img-fluid"
            /> 
            <p className="fw-bold position-absolute bottom-0 end-0 text-light mx-4 text-end text-break">
                Simula el pago de la cuota de tu credito
              </p>
          </div>

          <div className="col-sm-12 my-4 p-0">
            <div className="d-flex justify-content-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <label for="typeId" className="form-label text-break">
                    Mes
                  </label>
                  <select {...register("month")} className="form-select">
                    <option value="">Seleccione una opcion</option>
                    <option value="1">Enero</option>
                    <option value="2">Febrero</option>
                    <option value="3">Marzo</option>
                    <option value="4">Abril</option>
                    <option value="5">Mayo</option>
                    <option value="6">Junio</option>
                    <option value="7">Julio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Septimebre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </select>
                  <p className="text-danger">{errors.month?.message}</p>
                </div>

                <div className="row">
                  <p className="form-label text-break">Tasa de interes</p>
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    placeholder="4.5%"
                  ></input>
                </div>

                <div className="my-2 d-flex justify-content-center">
                  <button className="btn btn-primary my-3" type="submit">
                    Simular
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimularPago;
