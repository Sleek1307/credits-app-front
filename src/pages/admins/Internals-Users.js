import React from 'react';

const InternalUsers = () =>{
    return <>
        <div className='border d-flex justify-content-center'
            style={{
                height: "500px",
            }}
        >
            <div className="w-75 my-2 p-2 border overflow-auto">
                <table className='table border'>
                    <thead>
                        <th>
                            #
                        </th>
                        <th>
                            Id.Usuario
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Detalles
                        </th>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default InternalUsers;