import React from "react";
import Header from "../components/sections/Header";
import Foot from "../components/sections/Footer";
import SideBar from "../components/sections/Sidebar-admin";
import LogOut from "../components/buttons/Logout";

const Dashboard = (props) => {
  return (
    <section className="h-100">
      <div className="row h-100 w-100 m-0">
        
        <SideBar />
       

        <div className="col-12 col-lg-9 p-0 m-0 container-fluid">
          <Header button={<LogOut/>}/>

          <div
            id='main-container'
            className="m-3"
            >
            {props.page}
            </div>

          <Foot />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
