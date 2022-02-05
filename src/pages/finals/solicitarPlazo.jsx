import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  id: yup.string().required('Campo requerido'),
  cuotas: yup.number().required('Campo requerido'),
  motivo: yup.string().required('Campo requerido').max(200,'Solo se acepta un maximo de 200 caracteres')
}).required()

const SolicitarPlazo = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) =>{
    console.log(data);
  }

  return (
    <>
        <div className="h-100 d-flex align-items-center">
          <div class="row">
            <div class="col-6 d-flex justify-content-center">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h1>Solicitar prórroga</h1>

                <div class="row">
                  <div className="col-sm-6">
                    <label htmlFor="productId">Producto</label>
                    <input
                      {...register('id',{required:true})}
                      id="productId"
                      type="text"
                      className="form-control"
                    />
                    <p className="text-danger">{errors.id?.message}</p>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="cuotAmoun">Cuotas a aplazar</label>
                    <input
                      {...register('cuotas',{required:true})}
                      id="cuotAmount"
                      type="number"
                      className="form-control"
                    />
                    <p className="text-danger">{errors.cuotas?.message}</p>
                  </div>
                </div>

                <div class="row">
                  <label>Motivo</label>
                  <textarea
                    {...register('motivo',{required:true})}
                    rows="4"
                    cols="50"
                    className="form-control"
                  />
                  <p className="text-danger">{errors.motivo?.message}</p>
                </div>
                <div className="mt-4 justify-content-center d-flex">
                  <div>
                    <button type="submit" className='btn btn-primary'>
                      Solicitar prorroga
                    </button>
                  </div>

                </div>
              </form>
            </div>

            <div class="col-6 d-flex justify-content-center">
              <img
                src="https://retos-directivos.eae.es/wp-content/uploads/2017/12/iStock-540376942-e1514130352114.jpg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
          </div>
        </div>
    </>
  );
};

export default SolicitarPlazo;
