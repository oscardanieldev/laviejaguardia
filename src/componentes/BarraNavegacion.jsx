import React from 'react';
import { Fragment } from 'react';

const BarraNavegacion = () => {
    return (
    <Fragment>
        <div className="navbar-fixed">    
            <nav className="nav-extended barradenavegacion">
                <div className="nav-wrapper ">
                    <a href="#!" class="brand-logo logonavbar margendeescritorio">
                        <img className="responsive-img " src="logo-header.png" alt=""/>
                    </a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light" href="sass.html">Gimnasio</a></li>
                        <li><a className="waves-effect waves-light" href="badges.html">GYM Aire</a></li>
                        <li><a className="waves-effect waves-light" href="collapsible.html">Precio</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Reserva tú</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Zona</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Saló</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">GymActiv</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Tienda</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Contacto</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Galería</a></li>
                        <li><a className="waves-effect waves-light" href="mobile.html">Acerca</a></li>

                    </ul>
                </div>
            </nav>
            </div>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>

    </Fragment> );
}
 
export default BarraNavegacion;