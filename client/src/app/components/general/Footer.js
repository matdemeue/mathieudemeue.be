import React from 'react';

import './Footer.scss';


const Footer = () => {

    const dateObject = new Date();
    const yearAtTheMoment = dateObject.getFullYear();

    return (
        <div className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer_content d-flex justify-content-center">
                            <p className="text-light text-uppercase mb-0">{yearAtTheMoment === '2020' ? yearAtTheMoment : `2020 - ${yearAtTheMoment}`} - Made with ❤️ by Mathieu De Meue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;