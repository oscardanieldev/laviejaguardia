import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';


const Inicio = () => {
    return ( 
        <Fragment>
            <header className="bg-imagen-header">
            </header>
            <div className="borde-crema"></div>
            <div className="borde-blanco"></div>
            <div className="bg-imagen-info">
                <div className="container pb-4">
                    <div className="row ">
                        <div className="col s12 mci">
                            <h2 className="center-align texto-blanco">¿Qué es la vieja guardia?</h2>
                        </div>
                    </div>
                    <div className="row mb-0 pb-">
                        <div className="col s8">
                            <ul>
                                <li>
                                    <i className="material-icons left amber-text text-lighten-2">star</i>
                                    <div className="justificar mt-1">
                                        <span className="texto-inicio">
                                            Somos un grupo de apasionados por el boxeo. Promovemos el verdadero box…el bueno, el mexicano, el de barrio… el de la Vieja Guardia.
                                        </span>
                                    </div>
                                </li>
                                <br/>
                                <br/>
                                <li>
                                    <i className="material-icons left amber-text text-lighten-2">star</i>
                                    <div className="justificar">
                                        <span className="texto-inicio">
                                            Único gimnasio en el mundo que tiene una alianza comercial con CLETO REYES.
                                        </span>
                                    </div>
                                </li>
                                <br/>
                                <br/>
                                <li>
                                    <i className="material-icons left amber-text text-lighten-2">star</i>
                                    <div className="justificar">
                                        <span className="texto-inicio">
                                            Clases con Boxeadores profesionales, ranqueados y ex-campeones mundiales.
                                            Equipo Profesional CLETO REYES y MYZONE, la mejor tecnología del mercado fitness.
                                        </span>
                                    </div>
                                </li>
                                <br/>
                                <br/>
                                <li>
                                    <i className="material-icons left amber-text text-lighten-2">star</i>
                                    <div className="justificar">
                                        <span className="texto-inicio">
                                            Aqua bags con dispositivo de grúas para entrenamiento.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>  
                        <div className="col 4 logo-inicio">
                            <img className="responsive-img logo-inicio-posicion" src="imagenes/logo-about.png" alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <Piedepagina />
        </Fragment>

     );
}
 
export default Inicio;