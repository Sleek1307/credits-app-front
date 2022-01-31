import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./layouts/App-admins.layout";
import SolicitudesCredito from "./pages/admins/Solicitudes-creditos";
import SolicitudesProrroga from "./pages/admins/Solicitudes-prorroga";
import PayHistory from "./pages/admins/Pay-history";
import InternalUsers from "./pages/admins/Internals-Users";
import { UserProvider, useUsuario } from "./providers/user.provider";

const RequireAdmin = ({ children }) => {
  let auth = useUsuario();
  if (auth.user != null) {
    let rol = auth.user.data.rol;
    if (rol == "admin") {
      return children;
    }
    return <>Esta ruta no está permitida para ti</>;    
  }else{
    return <>
      <div>
      Haz click <Link to={'/'}> acá </Link>  para iniciar sesion
      </div>
    </>
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

// const requireInt = ({ children }) => {
//   let auth = useUsuario();
//   let rol = auth.user.rol;
//   if (rol == "int") {
//     return children;
//   }
//   return <>Debes iniciar sesion antes</>;
// };

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
                <Dashboard page={<InternalUsers />} />
              </RequireAdmin>
            }
          />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
