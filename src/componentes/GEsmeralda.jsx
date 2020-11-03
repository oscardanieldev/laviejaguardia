import React from 'react';
import { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const GEsmeralda = () => {
    return ( 
        <Fragment>
            <div className="bg-esmeralda">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3 className="center-align sucursal-mt color-crema">Esmeralda</h3>
                        </div>
                    </div>
                    <div className="row "> 
                        <div className="col s12 m6 m-gimnasios borde-gimnasios sucursal center-align ">
                            <div className="p-3">
                                <span className="color-crema sucursal-size">Sucursal</span>
                                <br/>
                                Jorge Jimenez Cantú Mnz 1-A
                                Conjunto Urbano Lago Esmeralda
                                Atizapán de Zaragoza, México 52937
                            </div>
                        </div>
                        <div className="col s12 m6 m-gimnasios sucursal-borde contenedor-iframe sucursal-borde-r">
                            <iframe className="iframe-responsive borde-gimnasios" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8942.454019662919!2d-99.28978914906882!3d19.5485346089872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21b9cc71e40e7%3A0xb64a1ca539cf8b84!2sLa%20Vieja%20Guardia%20Zona%20Esmeralda!5e0!3m2!1ses!2smx!4v1604418885619!5m2!1ses!2smx" width="550" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Piedepagina />
        </Fragment>
     );
}
 
export default GEsmeralda;
