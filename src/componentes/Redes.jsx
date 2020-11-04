import React, { Fragment } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Redes = () => {
    return ( 
        <Fragment>
            <div className="fixed-action-btn ">
                <a className="btn-floating btn-large bg-crema-h pulse">
                     <i className="large material-icons black-text">send</i>
                </a>
                <ul>
                    <li><a className="btn-floating black"><i className="material-icons amber-text text-lighten-3 "><FaFacebook /></i></a></li>
                    <li><a className="btn-floating black"><i className="material-icons amber-text text-lighten-3"><FaInstagram /></i></a></li>
                    <li><a className="btn-floating black"><i className="material-icons amber-text text-lighten-3"><FaWhatsapp /></i></a></li>
                </ul>
            </div>
        </Fragment>
     );
}
 
export default Redes;