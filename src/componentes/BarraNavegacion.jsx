import React from 'react';
import { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Galeria from './Galeria';
import GCentro from './GCentro';
import GEsmeralda from './GEsmeralda';
import GPalmas from './GPalmas';
import GRoma from './GRoma';
import GymAire from './GymAire';
import Inicio from './Inicio';
import Precio from './Precio';
import Redes from './Redes';
import Reservatu from './Reservatu';
import Salon from './Salon';
import Tienda from './Tienda';
import ZonaFitness from './ZonaFintess';
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
                                <img className="responsive-img" src="logo-header.png" alt="logo"/>
                            </div>
                        </Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons color-crema">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a className='dropdown-trigger waves-effect waves-light tamaño-ancla-inicio' href='#' data-target='dropdown1'>Gimnasios</a>

                                        <ul id='dropdown1' className='dropdown-content'>
                                            <li>
                                                <Link to="/palmas">
                                                    <span className="black-text">Palmas</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/esmeralda">
                                                    <span className="black-text">Esmeralda</span>
                                                </Link>
                                            </li>                                  
                                            <li>
                                                <Link to="/roma">
                                                    <span className="black-text">Roma</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/centro">
                                                    <span className="black-text">Centro</span>
                                                </Link>
                                            </li>
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
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Reserva Tú</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/zonafitness">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Zona Fitness</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/salon">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Salón</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/gymactiv">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">GymActive</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/tienda">
                                    <span className="waves-effect waves-light tamaño-ancla-inicio px-1">Tienda</span>
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
                                    <span className="waves-effect waves-light tamaño-ancla-inicio">Acerca de</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/tienda">
                        <Tienda />
                    </Route>
                    <Route path="/galeria">
                        <Galeria />
                    </Route>
                    <Route path="/salon">
                        <Salon />
                    </Route> 
                    <Route path="/palmas">
                        <GPalmas />
                    </Route> 
                    <Route path="/esmeralda">
                        <GEsmeralda />
                    </Route> 
                    <Route path="/roma">
                        <GRoma />
                    </Route> 
                    <Route path="/centro">
                        <GCentro />
                    </Route> 
                    <Route path="/acerca">
                        <AcercaDe />
                    </Route> 
                    <Route path="/contacto">
                        <Contacto />
                    </Route> 
                    <Route path="/zonafitness">
                        <ZonaFitness />
                    </Route>
                    <Route path="/reservatu">
                        <Reservatu />       
                    </Route>
                    <Route path="/gymaire">
                        <GymAire />
                    </Route>
                    <Route path="/precio">
                        <Precio />
                    </Route>
                    <Route path="/">
                        <Inicio />
                    </Route>
                    
                </Switch>
     
            </div>
                <ul className="sidenav barradenavegacion" id="mobile-demo">
                    
                    <li>
                        <h4 className="center-align white-text">La Vieja Guardia</h4><hr/>
                    </li>
                    <li>
                        <h5 className="center-align white-text">Sucursales</h5>
                    </li>
                    <li>
                        <Link to="/palmas">
                                <div className="waves-effect waves-light tamaño-ancla-inicio color-crema">Palmas</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/esmeralda">
                                <div className="waves-effect waves-light tamaño-ancla-inicio color-crema">Esmeralda</div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/roma">
                                <div className="waves-effect waves-light tamaño-ancla-inicio color-crema">Roma</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/centro">
                                <div className="waves-effect waves-light tamaño-ancla-inicio color-crema">Centro</div>
                        </Link>
                    </li>
                    <li class="divider" tabindex="-1"></li>

                    <li>
                        <Link to="/gymaire">
                            <div className="waves-effect waves-light tamaño-ancla-inicio color-crema">GYM Aire</div>
                        </Link>
                    </li>                           
                    <li>
                        <Link to="/precio">
                            <div className="waves-effect waves-light tamaño-ancla-inicio color-crema">Precio</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reservatu">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Reserva Tú</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/zonafitness">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Zona Fitness</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/salon">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Salón</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/gymactiv">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">GymActive</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tienda">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Tienda</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Contacto</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/galeria">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Galería</span>
                        </Link>
                    </li> 
                    <li>
                        <Link to="/acerca">
                            <span className="waves-effect waves-light tamaño-ancla-inicio color-crema">Acerca de</span>
                        </Link>
                    </li>       
                     
                </ul>
            </Router>

    </Fragment> );
}
 
export default BarraNavegacion;