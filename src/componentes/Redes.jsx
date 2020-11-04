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
                    <li><a className="btn-floating black" href="https://www.facebook.com/viejaguardiabox/?hc_ref=ART3qB4BFsFzOm5o1JCBIStyYtLf79rtfoI-iYe1YhBWvn-IwMeqlHoP9S54rowlicQ&fref=nf&__tn__=kC-R"><i className="material-icons amber-text text-lighten-3 "><FaFacebook /></i></a></li>
                    <li><a className="btn-floating black" href="https://www.instagram.com/laviejaguardiamx/?igshid=71hxnidulwyo"><i className="material-icons amber-text text-lighten-3"><FaInstagram /></i></a></li>
                    <li><a className="btn-floating black"><i className="material-icons amber-text text-lighten-3"><FaWhatsapp /></i></a></li>
                </ul>
            </div>
        </Fragment>
     );
}
 
export default Redes;