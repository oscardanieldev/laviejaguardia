import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const Reservatu = () => {
    return ( 
        <Fragment>
            <div className="bg-imagen-reservatu">
                <div className="container">
                    <div className="row">
                        <div className="col m7 white-text m-reservatu">
                            <h2>Reserva tu clase</h2>
                            <h4 className="">
                            Adquiere tu paquete y reserva tu clase
                            </h4>
                            <br/>
                            <h5 className="justificar">
                            Aquí podrás registrarte como cliente, adquirir paquetes de clases y realizar tus reservaciones. Una vez hayas adquirido tus clases podrás reservar el día y hora a la que entrenarás.
                            <br/>
                            <br/>
                            Por favor lee cuidadosamente nuestros <span className="color-crema">Términos y Condiciones </span>antes de adquirir paquetes, afiliarte o reservar una clase.
                            </h5>
                        </div>
                        <div className="col m5 m-reservatu ">
                                <div className="borde-formulario white-text"> Formulario </div>
                        </div>
                    </div>
                </div>
            </div>
            <Piedepagina />
        </Fragment>
     );
}
 
export default Reservatu;