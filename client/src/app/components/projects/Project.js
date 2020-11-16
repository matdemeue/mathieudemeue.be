import React from 'react';

import './Project.scss';

const Project = ({ data }) => {

    return (
        <div className="col-12 col-md-6 col-lg-6">
            <div className="card card_project bg_light">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{data.title}</h5>
                    <div className="card_project-categories mb-3">
                        {data.techUsed.map((tech, i) =>
                            <span className="badge badge-dark" key={i}>{tech}</span>
                        )}
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{data.projectClient}</h6>
                    <p className="card-text flex-grow-1">{data.description}</p>
                    <div className="card-links">
                        {data.website ? <a href={data.website} className="card-link text-dark" target="_blank" rel="noreferrer">Bekijk website</a> : ''}
                        {data.ghrepo ? <a href={data.ghrepo} className="card-link text-dark" target="_blank" rel="noreferrer">Bekijk Github repo</a> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;