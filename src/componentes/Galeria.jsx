import React, { Fragment } from 'react';
import Gallery from 'react-photo-gallery';
import Piedepagina from './Piedepagina';
const Galeria = () => {

    const photos = [
        {
          src: 'imagenes/g25.png',
          width: 2,
          height: 3,
          className: 'borde-galeria'
        },
        {
          src: 'imagenes/g24.png',
          width: 5,
          height: 3,
          className: 'borde-galeria'
        },
        {
            src: 'imagenes/g23.png',
            width: 2,
            height: 3,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g22.png',
            width: 3,
            height: 2,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g21.png',
            width: 2,
            height: 3,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g20.png',
            width: 4,
            height: 3,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g18.png',
            width: 3,
            height: 3,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g17.png',
            width: 3,
            height: 3,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g16.png',
            width: 2,
            height: 1,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g15.png',
            width: 1,
            height: 1,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g14.png',
            width: 1,
            height: 1,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g13.png',
            width: 2,
            height: 1,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g12.png',
            width: 3,
            height: 2,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g11.png',
            width: 1,
            height: 2,
            className: 'borde-galeria'
        },
        {
            src: 'imagenes/g10.png',
            width: 3,
            height: 2,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g9.png',
            width: 5,
            height: 3,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g8.png',
            width: 3,
            height: 2,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g7.png',
            width: 2,
            height: 3,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g6.png',
            width: 2,
            height: 2,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g5.png',
            width: 2,
            height: 2,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g4.png',
            width: 3,
            height: 2 ,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g3.png',
            width: 2,
            height: 2,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g2.png',
            width: 2,
            height: 3,
            className: 'borde-galeria'
        },        {
            src: 'imagenes/g1.png',
            width: .25,
            height: .5,
            className: 'borde-galeria'
        },
      ]
  
    return ( 
        <Fragment>
            <div className="bg-galeria">
                <div className="container">
                    <div className="row ">
                        <div className="col s12 sucursal-mt">
                            <h3 className="color-crema center-align">Galería</h3>
                        </div>
                        <div className="col s12">
                            <Gallery photos={photos} />
                        </div>
                    </div>
                </div>
            </div>
            <Piedepagina />
        </Fragment>
     );
}
 
export default Galeria;