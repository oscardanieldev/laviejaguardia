import React, { Fragment } from 'react';
import BarraNavegacion from './BarraNavegacion';


const Inicio = () => {
    return ( 
        <Fragment>
            <header className="bg-imagen-header">
                <BarraNavegacion />
            </header>
            <div className="borde-crema"></div>
            <div className="borde-blanco"></div>
            <div className="bg-imagen-info">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            Somos un grupo de apasionados por el boxeo. Promovemos el verdadero box…el bueno, el mexicano, el de barrio… el de la Vieja Guardia.
                            <br/>
                            <br/>
                            Único gimnasio en el mundo que tiene una alianza comercial con CLETO REYES.
                            <br/>
                            <br/>
                            Clases con Boxeadores profesionales, ranqueados y ex-campeones mundiales.
                            Equipo Profesional CLETO REYES y MYZONE, la mejor tecnología del mercado fitness.
                            <br/>
                            <br/>

                            Aqua bags con dispositivo de grúas para entrenamiento.
                        </div>
                        

                    </div>
                </div>
            </div>
        </Fragment>

     );
}
 
export default Inicio;