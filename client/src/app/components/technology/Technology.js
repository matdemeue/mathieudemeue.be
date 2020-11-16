import React from 'react';

import './Technology.scss';

const Technology = ({ data }) => {

    return (
        <div className="col-12 col-md-4 col-lg-4">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-4 card-img card_tech-img">
                        {data.icon}
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title mb-0">{data.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;