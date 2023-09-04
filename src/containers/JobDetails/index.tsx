import BarChart from 'components/bar-chart/BarChart';
import PieChart from 'components/pie-chart/PieChart';
import Tile from 'components/tile/Tile';
import React from 'react';

const JobDetails = () => {
    return (
        <div className="job-details-container">
            <div className="header-text">Job 1 Details</div>
            <div className="flex-container">
                <Tile className="small-cards">
                    <div className="text-container">
                        <p>2000</p>
                        <p className="text-center">Records Auto merged</p>
                    </div>
                </Tile>
                <Tile className="small-cards">
                    <div className="text-container">
                        <p>1000</p>
                        <p className="text-center">Records 80% match</p>
                    </div>
                </Tile>
                <Tile className="small-cards">
                    <div className="text-container">
                        <p>500</p>
                        <p className="text-center">Records 50% match</p>
                    </div>
                </Tile>
            </div>

            <div className="flex-container graphs-container">
                <Tile className="graph-cards">
                    <PieChart />
                </Tile>
                <Tile className="graph-cards">
                    <BarChart />
                </Tile>
            </div>
        </div>
    );
};

export default JobDetails;
