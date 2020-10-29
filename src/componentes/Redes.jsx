import React, { Fragment } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Redes = () => {
    return ( 
        <Fragment>
            <div className="fixed-action-btn ">
                <a className="btn-floating btn-large amber pulse">
                     <i className="large material-icons black-text">send</i>
                </a>
                <ul>
                    <li><a className="btn-floating black"><i className="material-icons amber-text"><FaFacebook /></i></a></li>
                    <li><a className="btn-floating black"><i className="material-icons amber-text"><FaInstagram /></i></a></li>
                    <li><a className="btn-floating black"><i className="material-icons amber-text"><FaWhatsapp /></i></a></li>
                </ul>
            </div>
        </Fragment>
     );
}
 
export default Redes;