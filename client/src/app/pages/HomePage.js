import React from 'react';

import Hero from '../components/general/Hero';
import ProjectsList from '../components/projects/ProjectsList';
import TechnologyList from '../components/technology/TechnologyList';
import Contact from '../components/contact/Contact';
import Footer from '../components/general/Footer';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="page page__home">
        <div className="bg_dark">
            <div className="container">
                <Hero />
                <ProjectsList />
                <TechnologyList />
                <Contact />
                <Footer />
            </div>
        </div>
    </div>
  );
};

export default HomePage;