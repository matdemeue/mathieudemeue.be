import React from 'react';

import SectionTitle from '../general/SectionTitle';
import Technology from './Technology';

import { GrGraphQl, GrHtml5, GrReactjs, GrSpotify, GrNode, GrGithub, GrWordpress } from 'react-icons/gr';
import { DiCss3, DiJavascript1, DiNpm, DiSass } from 'react-icons/di';
import { SiVisualstudiocode, SiNetlify } from 'react-icons/si';

const TechnologyList = () => {

    const technologies = [
        {
            "icon": <SiVisualstudiocode />,
            "name": "VS Code"
        },
        {
            "icon": <GrSpotify />,
            "name": "Spotify"
        },
        {
            "icon": <GrNode />,
            "name": "Node.js"
        },
        {
            "icon": <DiNpm />,
            "name": "NPM"
        },
        {
            "icon": <GrHtml5 />,
            "name": "HTML"
        },
        {
            "icon": <DiCss3 />,
            "name": "CSS"
        },
        {
            "icon": <DiSass />,
            "name": "SASS / SCSS"
        },
        {
            "icon": <DiJavascript1 />,
            "name": "Javascript"
        },
        {
            "icon": <GrGithub />,
            "name": "Github"
        },
        {
            "icon": <GrReactjs />,
            "name": "React"
        },
        {
            "icon": <GrGraphQl/>,
            "name": "GraphQL"
        },
        {
            "icon": <GrWordpress/>,
            "name": "Wordpress"
        }
    ]

    return (
        <div className="tech_list pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                            <SectionTitle title={"Tech & Tools"} short={"Wat staat er op mijn computer..."} />
                    </div>
                    {technologies.map((tech, i) => 
                        <Technology key={i} data={tech} />
                    )};
                </div>
            </div>
        </div>
    )
}

export default TechnologyList;