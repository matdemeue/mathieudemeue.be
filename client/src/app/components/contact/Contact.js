import React from 'react';

import SectionTitle from '../general/SectionTitle';

import { GrPhone, GrMailOption } from 'react-icons/gr';

import './Contact.scss';

const Contact = () => {

    return (
        <div className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                            <SectionTitle title={"Contacteer mij"} short={"Teamwork makes the dreamwork!"} />
                    </div>
                </div>
                <div className="row contact">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <div className="contact_title mb-4">
                            <div className="text-dark text-center">
                                <h2 className="mb-1">Overtuigd? Let's meet!</h2>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="contact_method mb-2">
                                <div className="contact_icon">
                                    <GrPhone />
                                </div> 
                                <a className="ml-3 text-dark" href="tel:+32497642021">0497 64 20 21</a>
                            </div>
                            <div className="contact_method">
                                <div className="contact_icon">
                                    <GrMailOption />
                                </div> 
                                <a className="ml-3 text-dark" href="mailto:demeuem@gmail.com">demeuem@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;