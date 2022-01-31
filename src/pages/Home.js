import React from "react";
import Header from "../components/sections/Header";
import Foot from "../components/sections/Footer";
import Acceso from "../components/buttons/Acceso";

const Home = () => {
    return (
        <>
            <Header
                button={<Acceso />}
                img={"http://localhost:3000/caja-social-logo.png"}
            />
            <section className="container-fluid p-0">
                <div className="w-100 container-content d-flex justify-content-start">
                    <div id="card" className="card text-light mb-3 my-auto">
                        <div className="card-header">
                            <h1 className="card-title">Credito leasing</h1>
                        </div>
                        <div className="card-body fs-5">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                                consequuntur, optio facere cumque voluptates aperiam saepe
                                corrupti. Ut, maiores minus, deleniti eligendi facilis rem
                                placeat sunt corporis provident accusamus molestias. Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Totam non
                                veritatis facere excepturi nihil, dignissimos quas voluptatem
                                iure aut quis alias libero earum? Tempora consectetur harum
                                atque facere non dignissimos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Foot />
        </>
    );
};

export default Home;