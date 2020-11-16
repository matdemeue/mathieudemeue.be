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
                            <h1 class="display-4 text-light mb-4">It's-a Me, Mario... <br></br> Ugh I mean Mathieu.</h1>
                            <p class="lead text-light">Hello there! <br></br> Ik ben Mathieu De Meue. Als ik een goede persoonlijke omschrijving moet geven kan ik dit verkorten tot volgende drie woorden: leergierig, teamspeler en oplossingsgericht. <br></br> <br></br >Werk gerelateerd hecht ik veel belang aan de netheid en precisie van mijn code. Bovendien ben ik zeer gedisciplineerd en kan ik goed omgaan met strikte deadlines. 
                            </p>
                            <a class="btn btn-light btn-lg mt-4" href={curriculum_vitae} role="button">Download mijn CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;