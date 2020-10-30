import React, { Fragment } from 'react';

const PrecioCamponente = (props) => {
    return ( 
        <Fragment>
                    <div className="center-align bg-crema py-1 tamaño-letra-precio">{props.nombrePaquete}</div>
                    <br/>
                        <div className="center-align my--1">Mensual</div>
                    <br/>
                        <span>{props.precio}</span>
                    <br/>
                        <span className="red-text">Horarios limitados</span>
                    <div className="linea-precio "></div>
                        <span className="py-1">{props.detalles}</span>
                    <br/>
                    
        </Fragment>
     );
}
 
export default PrecioCamponente;