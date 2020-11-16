import React from 'react';

import profielfoto from '../../images/general/mathieu.jpg';
import curriculum_vitae from '../../downloads/cv_mathieu.pdf';

import './Hero.scss';

const Hero = () => {

    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center pr-lg-5">
                        <div className="profile__picture">
                            <img src={profielfoto} alt="Profielfoto Mathieu" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div class="jumbotron bg_dark mb-0">
                            <h1 class="display-4 text-light">Hoi! Mathieu is de naam.</h1>
                            <p class="lead text-light">Cupcake ipsum dolor sit amet soufflé wafer marshmallow. Oat cake muffin wafer. Cake gummi bears lemon drops jujubes tiramisu muffin tootsie roll jelly beans. Cupcake ipsum dolor sit amet soufflé wafer marshmallow. Oat cake muffin wafer. Cake gummi bears lemon drops jujubes tiramisu muffin tootsie roll jelly beans.</p>
                            <a class="btn btn-light btn-lg mt-4" href={curriculum_vitae} role="button">Download mijn CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;