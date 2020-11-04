import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Catalogoguante from './Catalogoguante';

const Tienda = () => {
    return ( 
        <Fragment>
            <div className="bgtienda">
                <div className="container">
                    <div className="row">
                        <div className="col s12 sucursal-mt">
                            <h3 className="color-crema center-align">
                                Tienda
                            </h3>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col l1 s0">

                        </div>
                        <Router>
                        <div className="col l10 bg-crema-tienda">
                            
                                <div className="col l3 s12">
                                    <Link to="/guates" replace>
                                        <h5 className="center-align white-text">Guantes</h5>
                                    </Link>
                                </div>
                                <div className="col l3 s12">
                                    <a href="#"><h5 className="center-align white-text">Equipo</h5></a>
                                </div>
                                <div className="col l3 s12">
                                    <a href="#"><h5 className="center-align white-text">Ropa y Calzado</h5></a>
                                </div>
                                <div className="col l3 s12">
                                    <a href="#"><h5 className="center-align white-text">Regalos</h5></a>
                                </div>
                        </div>

                        <Switch>
                            <Route path="/guates">
                                <Catalogoguante />
                            </Route>
                        </Switch>

                        </Router>
                        <div className="col l1 s0"></div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <h4 className="center-align color-crema">
                                ¡Los 10 más vendidos!
                            </h4>
                        </div>
                    </div>
                    <div className="row mb-0">
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                            
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                            
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                            
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                        </div>
                        <div className="col l3"></div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                        </div>
                        <div className="center-align col l3 s6">
                            <a href="#"><img className="responsive-img" src="imagenes/guantes.png" alt="guantes"/></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        <Piedepagina />
        </Fragment>
     );
}
 
export default Tienda;