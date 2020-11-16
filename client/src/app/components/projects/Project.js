import React from 'react';

import './Project.scss';

const Project = ({ data }) => {

    return (
        <div className="col-12 col-md-6 col-lg-6">
            <div class="card card_project bg_light">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{data.title}</h5>
                    <div className="card_project-categories mb-3">
                        {data.techUsed.map((tech, i) =>
                            <span class="badge badge-dark" key={i}>{tech}</span>
                        )}
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">{data.projectClient}</h6>
                    <p class="card-text flex-grow-1">{data.description}</p>
                    <div className="card-links">
                        {data.website ? <a href={data.website} class="card-link text-dark">Bekijk website</a> : ''}
                        {data.ghrepo ? <a href={data.techUsed} class="card-link text-dark">Bekijk Github repo</a> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;