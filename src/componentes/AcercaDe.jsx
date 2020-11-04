 import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';

const AcercaDe = () => {
    return ( 
        <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m-zonafitness">
                            <h3 className="center-align">
                                Un espacio que brinda <span className="color-crema">TODO</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="bg-imagen-acerca1 py-4">
                    <div className="container">
                        <div className="row border-acerca-gris">
                            <div className="col s12">
                                <h5 className="color-crema center-align px-2">
                                     El boxeo ha mostrado excelentes y rápidos resultados para aquellos que buscan ponerse en forma. Aquí mujeres y hombres de cualquier nivel, desde principiantes hasta experimentados, conocerán, aprenderán y se apasionarán del boxeo verdadero.
                                </h5>
                            </div>
                        </div>
                        <div className="row border-acerca-crema">
                            <div className="col s12">
                                <h5 className="white-text center-align px-2">
                                    Está comprobado que practicar boxeo brinda grandes beneficios para la salud, pero es importante hacerlo de la mano de profesionales que han dedicado su vida a conocer la disciplina evitando lesiones, y sacando el mayor provecho de las ventajas que conlleva la práctica de este deporte.
                                </h5>
                            </div>
                        </div>
                        <div className="row border-acerca-gris mb-0">
                            <div className="col s12">
                                <h5 className="color-crema center-align px-2 mb-0">
                                    En la Vieja Guardia contamos con entrenadores, boxeadores y ex campeones del mundo quienes se encargarán de entrenar y enseñar a los participantes, desde principiantes hasta experimentados, los secretos del deporte que más glorias ha dado a México. Aprenderán así a boxear poniéndose en forma de un modo entretenido, dinámico y diferente.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-imagen-acerca2 py-4">
                    <div className="container ">
            
                        <div className="row ">
                            <div className="borde-left-acerca"></div>
                            <h5 className="col m4 white-text center-align">
                                En la Vieja Guardia, reconocemos y apoyamos el valor que muestran los boxeadores profesionales cada que se suben al ring, brindándoles un gimnasio de primer h5el con todo el equipo de entrenamiento que este exigente deporte demanda.
                                
                            </h5>
                            <h3 className="col m4 offset-m4 white-text center-align">
                                    Boxeadores
                                    <div className="borde-top-acerca"></div>
                                    Profesionales                        
                            </h3>
                        </div>
                        <div className="row center-align ">
                            <div className="col s12 ">
                                    <h4 className="color-crema m-acerca1 border-acerca-blanco">
                                        Dedicarse al boxeo como profesión es algo digno de admirarse.
                                    </h4>
                            </div>
                        </div>
                        <div className="row">
                            <h5 className="col m4 offset-m8 white-text center-align borde-right-acerca">
                                Merecen entrenar en las mejores condiciones, aquí les ofrecemos instalaciones de primer nivel y dónde encontrar la promoción de su talento.
                            </h5>
                        </div>
                        <br/>
                        <div className="row black-text">
                            
                            <div className="col s12">
                                <h3 className="white-text center-align">Talento</h3>
                            </div>
                            <div className="col s12 m4 ">
                                <div className=" mx-1">
                                    <h5 className="center-align borde-talento  py-2-8 bg-gris">
                                        En México existe un gran talento boxístico que necesita ser apoyado para impulsarlo como se debe.
                                    </h5>
                                </div>
                            </div>
                            <div className=" col s12 m4 ">
                                <div className="mx-1">
                                    <h5 className="center-align borde-talento p-1 bg-gris">
                                        De esta forma la Vieja guardia contribuye a fortalecer el talento que representa a nuestro país en este deporte que tanto nos apasiona.
                                    </h5>
                                </div>
                            </div>
                            <div className="col s12 m4 ">
                                <div className="mx-1 ">
                                    <h5 className="center-align borde-talento p-1 bg-gris">
                                        Nuestro país es cuna de campeones, queremos dar el impulso, asesoría y ser el escaparate que los boxeadores profesionales y amateur necesitan.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Piedepagina />
        </Fragment>
     );
}
 
export default AcercaDe;