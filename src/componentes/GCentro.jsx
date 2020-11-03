import React from 'react';
import { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const GCentro = () => {
    return ( 
        <Fragment>
            <div className="bg-centro">
                <div className="container">
                <   div className="row">
                        <div className="col s12">
                            <h3 className="center-align sucursal-mt color-crema">Centro</h3>
                        </div>
                    </div>
                    <div className="row "> 
                        <div className="col s12 m6 m-gimnasios borde-gimnasios sucursal center-align ">
                            <div className="p-3">
                                <span className="color-crema sucursal-size">Sucursal</span>
                                <br/>
                                Palmas esq. Anillo Periférico
                                Lomas de Chapultepec
                                CDMX, México 11000
                            </div>
                        </div>
                        <div className="col s12 m6 m-gimnasios sucursal-borde contenedor-iframe sucursal-borde-r">
                            <iframe className="iframe-responsive borde-gimnasios" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15050.245734907463!2d-99.21812079160162!3d19.43134620970714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c29e452e6b8ca96!2sLa%20Vieja%20Guardia%20Gimnasio%20de%20Box!5e0!3m2!1ses!2smx!4v1604417288278!5m2!1ses!2smx" width="550" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Piedepagina />
        </Fragment>
     );
}
 
export default GCentro;
