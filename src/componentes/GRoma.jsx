import React from 'react';
import { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const GRoma = () => {
    return ( 
        <Fragment>
            <div className="bg-roma">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3 className="center-align sucursal-mt color-crema">Roma</h3>
                        </div>
                    </div>
                    <div className="row "> 
                        <div className="col s12 m6 m-gimnasios borde-gimnasios sucursal center-align ">
                            <div className="p-3">
                                <span className="color-crema sucursal-size">Sucursal</span>
                                <br/>
                                Orizaba 118
                                <br/>
                                La Roma Norte
                                <br/>
                                CDMX, México 06700
                            </div>
                        </div>
                        <div className="col s12 m6 m-gimnasios sucursal-borde contenedor-iframe sucursal-borde-r">
                         
                            <iframe className="iframe-responsive borde-gimnasios" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.874441547942!2d-99.16170108587063!3d19.417830246186277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9110f25db3%3A0x321dda14630965a1!2sLa%20Vieja%20Guardia%20Roma!5e0!3m2!1ses!2smx!4v1604418695936!5m2!1ses!2smx" width="550" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>    
            </div>
            <Piedepagina />
        </Fragment>
     );
}
 
export default GRoma;
