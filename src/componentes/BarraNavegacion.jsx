import React from 'react';
import { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import GymAire from './GymAire';
import Inicio from './Inicio';
import Redes from './Redes';
const BarraNavegacion = () => {
    return (
    <Fragment>
        <span className="posicion-redes">
              <Redes />
        </span>
        <Router>
            <div className="navbar-fixed">    
                <nav className="nav-extended barradenavegacion">
                    <div className="nav-wrapper">
                        <Link to="/">
                            <div className="brand-logo logonavbar margendeescritorio">
                                <img className="responsive-img " src="logo-header.png" alt=""/>
                            </div>
                        </Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a className='dropdown-trigger waves-effect waves-light tamaño-ancla-inicio' href='#' data-target='dropdown1'>Gimnasios</a>

                                        <ul id='dropdown1' className='dropdown-content'>
                                            <li><a href="#!" className="black-text">Palmas</a></li>
                                            <li><a href="#!" className="black-text">Esmeralda</a></li>
                                            <li><a href="#!" className="black-text">Roma</a></li>
                                            <li><a href="#!" className="black-text">Centro</a></li>

                                        </ul>
                            </li>

                            <li>
                                <Link to="/gymaire">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">GYM Aire</span>
                                </Link>
                            </li>                           
                            <li>
                                <Link to="/precio">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Precio</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reservatu">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Reserva tú</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/zona">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Zona</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/salo">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Saló</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/gymactiv">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">GymActiv</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/tienda">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio">Tienda</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/contacto">
                                    <a className="waves-effect waves-light tamaño-ancla-inicio">Contacto</a>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/galeria">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio">Galería</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/acerca">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio">Acerca</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>

                    <Route path="/gymaire">
                        <GymAire />
                    </Route>
                    <Route path="/">
                        <Inicio />
                    </Route>
                </Switch>
     
            </div>
        </Router>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>

    </Fragment> );
}
 
export default BarraNavegacion;