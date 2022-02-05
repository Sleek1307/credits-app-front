import React, { useEffect, useState } from "react";

const PayHistory = () => {
  const [pagos, setPagos] = useState([]);

  // useEffect(()=>{

  // })

  return (
    <>
      <h1 className="mt-2 text-center">Historial de pago</h1>
      <div
        className="py-2 d-flex justify-content-center"
        style={{
          height: "500px",
        }}
      >
        <div className="w-75 border">
          <div className="my-3 mx-0">
            <form action="">
              <div className="row mx-0">
                <div className="col-8 col-lg-4">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-4 p-0">
                  <button type="submit" className="btn btn-primary">
                    Buscar
                  </button>
                </div>
              </div>
              <hr />
            </form>
          </div>
          <div className="p-1 overflow-auto">
            <table className="table border">
              <thead>
                <th>#</th>
                <th>Credito N°</th>
                <th>Pago N°</th>
                <th>Fecha de pago</th>
                <th>Valor pagado</th>
                <th>Valor restante</th>
              </thead>
              <tbody>
                {/* {
                  pagos.map((e, i) =>{
                    return<>
                      <tbody>
                        <th>
                          {i++}
                        </th>
                        <th>
                          {e.idCredit}
                        </th>
                        <th>
                          {e.idpay}
                        </th>
                        <th>
                          {e.datePay}
                        </th>
                        <th>
                          {e.payValuea}
                        </th>
                        <th>
                          {e.restValue}
                        </th>
                      </tbody>
                    </>
                  })
                } */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayHistory;
