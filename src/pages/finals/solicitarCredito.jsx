import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup
  .object({
    valor: yup.string().required("Campo requerido").min(5, 'ingresa minimo 5 digitos'),
    cuotas: yup
      .string()
      .required("Campo requerido")
  })
  .required();

const SolicitarCredito = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
    console.log(data);
  };

  return (
    <>
        <div className="container h-100 d-flex align-items-center">
          <div class="row">
              <div class="col-6 d-flex justify-content-center">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h1>Solicitar crédito</h1>
                <div class="row">
                  <div class="col-sm-6">
                    <label htmlFor="valor">Valor solocitado</label>
                    <input
                      {...register("valor", { required: true })}
                      type="number"
                      id="valor"
                      className="form-control"
                    />
                    <p className="text-danger">{errors.valor?.message}</p>
                  </div>
                  <div class="col-sm-6">
                    <label htmlFor="cuotas">Número de cuotas</label>
                    <input
                      id="cuotas"
                      {...register("cuotas", { required: true })}
                      type="number"
                      className="form-control"
                    />
                    <p className="text-danger">{errors.cuotas?.message}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Generar
                    </button>
                  </div>
                </div>
                </form>
              </div>
            

            <div class="col-6 d-flex justify-content-center">
              <img
                src="https://gestion.pe/resizer/ml7IA6qY1GXWPUZzukZe7mIohAM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5FDOFYHKIFDMLBVARLRMUBLPPI.jpg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
          </div>
        </div>
    </>
  );
};

export default SolicitarCredito;
