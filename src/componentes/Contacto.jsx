import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const Contacto = () => {
    return ( 
        <Fragment>
            <div className="bg-contacto">
                <div className="container">
                    <div className="row">
                        <div className="col m6 m-reservatu">
                            <h3 className="color-crema center-align">Contacto</h3>
                            <div className="borde-crema-contacto">
                                <div className="color-crema center-align">
                                    Hola
                                </div>
                            </div>
                        </div>
                        <div className="col m6 m-reservatu ">
                        </div>
                    </div>
                </div>
            </div>
            <Piedepagina />

        </Fragment>
     );
}
 
export default Contacto;