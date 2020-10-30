import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const Contacto = () => {
    return ( 
        <Fragment>
            <div className="bg-contacto">
                <div className="container">
                    <div className="row">
                        <div className="col m6 m-reservatu">
                            <h2 className="color-crema center-align">Contacto</h2>
                            <div className="borde-crema-contacto">
                                <div className="color-crema center-align p-contacto fuente-contacto">
                                    Si tienes alguna pregunta, no dudes en llamarnos, visitarnos o enviarnos un correo.
                                    <br/>
                                    <br/>
                                    PALMAS: (55) 7650.6979
                                    <br/>
                                    <br/>
                                    ventas@viejaguardia.mx
                                </div>
                            </div>
                        </div>
                        <div className="col m6 m-mapa center-align">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120361.83640381071!2d-99.27206089547782!3d19.485406671840995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sa%20vijea%20guardia!5e0!3m2!1ses!2smx!4v1604099236548!5m2!1ses!2smx" width="550" height="350" frameborder="0" className="mapa" allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Piedepagina />

        </Fragment>
     );
}
 
export default Contacto;