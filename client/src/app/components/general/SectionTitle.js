import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ title, short }) => {

  return (
    <div className="section_title">
        <span className="text-light">{short}</span>
        <h1 className="text-light">{title}</h1>
    </div>
  );
};

export default SectionTitle;