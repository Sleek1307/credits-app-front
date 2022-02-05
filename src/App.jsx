import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./layouts/App-admins.layout";
import DashboardInt from "./layouts/App-internal";
import SolicitudesCredito from "./pages/admins/Solicitudes-creditos";
import SolicitudesProrroga from "./pages/admins/Solicitudes-prorroga";
import PayHistory from "./pages/admins/Pay-history";
import InternalUsers from "./pages/admins/Internals-Users";
import MyAcount from "./pages/admins/My-acount";
import MenuFinal from "./layouts/App-final.layout";
import NavFinal from "./pages/finals/navFinalUser";
import Creditos from "./pages/finals/creditos";
import SolicitarCredito from "./pages/finals/solicitarCredito";
import SimularPago from "./pages/finals/simularPagos" ;
import SolicitarPlazo from "./pages/finals/solicitarPlazo";
import GenerarCertificado from "./pages/finals/generarCertificado";
import { UserProvider, useUsuario } from "./providers/user.provider";

const RequireAdmin = ({ children }) => {
  let auth = useUsuario();
  if (auth.user != null) {
    let rol = auth.user.data.rol;
    console.log(auth);
    if (rol == "admin") {
      return children;
    }
    return <>Esta ruta no está permitida para ti</>;
  } else {
    return (
      <>
        <div>
          Haz click <Link to={"/"}> acá </Link> para iniciar sesion
        </div>
      </>
    );
  }
};

// const RequireFinal = ({ children }) => {
//   let auth = useUsuario();
//   let rol = auth.user.rol;
//   if (rol == "final") {
//     return children;
//   }
//   return <>Debes iniciar sesion antes</>;
// };

const RequireInt = ({ children }) => {
  let auth = useUsuario();

  if (auth.user !== null) {
    let rol = auth.user.data.rol;
    console.log(rol);
    if (rol == "int") {
      return children;
    }
    return <>Esta ruta no está permitida para ti</>;
  } else {
    return (
      <>
        <div>
          Haz click <Link to={"/"}> acá </Link> para iniciar sesion
        </div>
      </>
    );
  }
};

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          {/* Ruta para la raiz */}

          <Route path="/" element={<Home />} />

          {/* Rutas paea el admin */}
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />

          <Route
            path="/admin/credits"
            element={
              <RequireAdmin>
                <Dashboard page={<SolicitudesCredito />} />
              </RequireAdmin>
            }
          />

          <Route
            path="/admin/prorroga"
            element={
              <RequireAdmin>
                <Dashboard page={<SolicitudesProrroga />} />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/historypay"
            element={
              <RequireAdmin>
                <Dashboard page={<PayHistory />} />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/internals"
            element={
              <RequireAdmin>
                <DashboardInt page={<InternalUsers />} />
              </RequireAdmin>
            }
          />

          <Route
            path="/admin/myacount"
            element={
              <RequireAdmin>
                <Dashboard page={<MyAcount />} />
              </RequireAdmin>
            }
          />

          {/* Rutas para los usuarios internos */}
          <Route
            path="/internal/credits"
            element={
              <RequireInt>
                <DashboardInt page={<SolicitudesCredito />} />
              </RequireInt>
            }
          />
          <Route
            path="/internal/prorroga"
            element={
              <RequireInt>
                <DashboardInt page={<SolicitudesProrroga />} />
              </RequireInt>
            }
          />
          <Route
            path="/internal/historypay"
            element={
              <RequireInt>
                <DashboardInt page={<PayHistory />} />
              </RequireInt>
            }
          />
          <Route
            path="/internal/finals"
            // element={
            //   <RequireInt>

            //   </RequireInt>
            // }
          />
          <Route
            path="/internal/myacount"
            element={
              <RequireInt>
                <DashboardInt page={<MyAcount />} />
              </RequireInt>
            }
          />

          {/* Rutas del usuario final */}
          <Route path="/final" element={<MenuFinal page={<NavFinal />} />} />

          <Route
            path="/final/creditos"
            element={<MenuFinal page={<Creditos />} />}
          />
        

          <Route
            path="/final/creditos/solicitar"
            element={<MenuFinal page={<SolicitarCredito />} />}
          />
  
          <Route
            path="/final/creditos/pagar"
            element={<MenuFinal page={<SimularPago />} />}
          />

          <Route
            path="/final/prorroga"
            element={<MenuFinal page={<SolicitarPlazo />} />}
          />

          //En desarrollo

          <Route
            path="/final/documentos"
            element={<MenuFinal page={<GenerarCertificado />} />}
          /> 
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
