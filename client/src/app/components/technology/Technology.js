import React from 'react';

import './Technology.scss';

const Technology = ({ data }) => {

    return (
        <div className="col-12 col-md-4 col-lg-4">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-4 card-img card_tech-img">
                        {data.icon}
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title mb-0">{data.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;