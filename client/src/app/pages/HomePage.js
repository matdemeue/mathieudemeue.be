
import React, { } from 'react';

import Hero from '../components/general/Hero';
import ProjectsList from '../components/projects/ProjectsList';

import './HomePage.scss';

const HomePage = ({children}) => {
  return (
    <div className="page page__home">
        <div className="bg_dark">
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
        </div>
    </div>
  );
};

export default HomePage;