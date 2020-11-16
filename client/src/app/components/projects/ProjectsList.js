import React from 'react';

import SectionTitle from '../general/SectionTitle';
import Project from './Project';

import projectData from '../../data/projects.json';

import './Project.scss';

const ProjectsList = () => {

    return (
        <div className="projects_list pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle title={"Recente projecten"} short={"Benieuwd wat ik doe?"} />
                    </div>
                    {projectData.map((project, i) => 
                        <Project key={i} data={project} />
                    )}
                </div>
            </div>
        </div>
    )
} 

export default ProjectsList;