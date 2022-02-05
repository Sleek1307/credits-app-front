import Header from "../components/sections/Header";
import Foot from "../components/sections/Footer";
import LogOut from "../components/buttons/Logout";

const MenuFinal = (props) => {
  return (
    <>
      <div>
        <Header
          img="http://localhost:3000/caja-social-logo.png"
        />
      </div>

      <div id="main-container">
        {props.page}
      </div>

      <div>
        <Foot />
      </div>
    </>
  );
};

export default MenuFinal;
