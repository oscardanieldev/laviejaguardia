import React, { Fragment } from 'react';
import Piedepagina from './Piedepagina';
import PrecioCamponente from './PrecioComponente';

const Precio = () => {
    return ( 
        <Fragment>
            <div className="bg-imagen-precios">
                <div className="container">
                    <div className="row">
                        <div className="col s12 sucursal-mt">
                            <h4 className="center-align color-crema">Precios</h4>
                        </div>
                    </div>
                    <div className="row">
                        <span className="col l4 s12 m-precios1">
                            <div className="center-align">
                                <div className="precio-componente-borde ppb-1">

                                    <PrecioCamponente   nombrePaquete="CLETO REYES"
                                                        precio="$2,800" 
                                                        detalles="Clases ilimitadas"
                                    />
                                    <br/>
                                    <div className="pt-1">
                                        <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>
                                    </div>
                                </div>    
                                
                            </div>    
                        </span>

                        <span className="col  l4 s12 m-precios1">
                            <div className="center-align">
                                <div className="precio-componente-borde ppb-2">
                                
                                    <PrecioCamponente   nombrePaquete="KNOCK OUT"
                                                        precio="1,700" 
                                                        detalles="Clases ilimitadas dentro de los horarios de 10:00 a 15:00 hrs."
                                    />
                                    <div className="pt-1">
                                    <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>
                                    </div>
                                </div>    
                            </div>    

                        </span>
                        <span className="col  l4 s12 m-precios1">
                            <div className="center-align">
                                <div className="precio-componente-borde ppb-3">

                                    <PrecioCamponente   nombrePaquete="PAQUETE LABOBRAL"
                                                        precio="1,600"
                                                        detalles="Antes, en tu break o después de trabajar
                                                        Clases ilimitadas en horarios de 6:00 y 14:00 hrs." 
                                    />
                                    <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>

                                </div>    
                            </div>    
                        </span>
                        
                    </div>
                    <div className="row">
                        <span className="col  l4 s12 m-precios1">
                                <div className="center-align">
                                    <div className="precio-componente-borde ppb-1">

                                        <PrecioCamponente   nombrePaquete="PAQUETE DE 8 CLASES"
                                                            precio="$1,500" 
                                                            detalles="8 clases con vigencia de 1 mes"
                                        />
                                        <br/>
                                        <div className="pt-1">
                                            <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>
                                        </div>
                                    </div>    
                                    
                                </div>    
                            </span>
                            <span className="col  l4 s12 m-precios1">
                                <div className="center-align">
                                    <div className="precio-componente-borde ppb-1">

                                        <PrecioCamponente   nombrePaquete="PAQUETE DE 5 CLASES"
                                                            precio="$1,150" 
                                                            detalles="5 clases con vigencia de 1 mes"
                                        />
                                        <br/>
                                        <div className="pt-1">
                                            <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>
                                        </div>
                                    </div>    
                                    
                                </div>    
                            </span>
                            <span className="col  l4 s12 m-precios1">
                                <div className="center-align">
                                    <div className="precio-componente-borde ppb-3">

                                        <PrecioCamponente   nombrePaquete="PAQUETE BOX KIDS"
                                                            precio="$1,150" 
                                                            detalles="Clases ilimitadas en horarios de 4pm
                                                            Niños y niñas de 4 a 12 años"
                                        />
                                        <br/>
                                        <div className="">
                                            <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>
                                        </div>
                                    </div>    
                                    
                                </div>    
                            </span>
                    </div>
                    <div className="row mb-0 pb-2">
                        <span className="col l4 offset-l4 s12 m-precios1">
                            <div className="center-align">
                                <div className="precio-componente-borde ppb-1">

                                    <PrecioCamponente   nombrePaquete="PAQUETE TEENS"
                                                        precio="$1,750" 
                                                        detalles="Clases ilimitadas con horario ilimitado
                                                        Adolescentes de 13 a 17 años"
                                    />
                                    <br/>
                                    <div className="pt-1">
                                        <span className="btn red white-text btn-radio waves-effect waves-light">Comprar</span>
                                    </div>
                                </div>    
                                
                            </div>    
                        </span>
                    </div>

                </div>

 
            </div>
            <Piedepagina />
        </Fragment>
     );
}
 
export default Precio;