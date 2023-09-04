import Tile from 'components/tile/Tile';
import ChatInterface from 'containers/ChatInterface';
import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <Tile className="full-screen-cards">
                <div className="summary-card">
                    <div>
                        <p className="records-count-text">25</p>
                        <p className="text-center">Jobs Completed</p>
                    </div>
                    <div>
                        <p className="records-count-text">5</p>
                        <p className="text-center">Jobs in Progress</p>
                    </div>
                    {/* <div>
                        <p className="records-count-text">1500</p>
                        <p>Records 50% matching</p>
                    </div> */}
                </div>
            </Tile>

            <div className="flex-container">
                <Tile className="small-cards"> +Create Job </Tile>
                <Tile className="small-cards">
                    <div className="text-container">
                        <p>2</p>
                        <p className="text-center">Jobs in Progress</p>
                    </div>
                </Tile>
            </div>
            <p>
                Previous Job is ready to review -
                <span className="link-text">Click here to View</span>
            </p>
            <Tile className="full-screen-cards">
                <div className="summary-card">
                    <div>
                        <p className="records-count-text">2000</p>
                        <p className="text-center">Records auto merged</p>
                    </div>
                    <div>
                        <p className="records-count-text">5000</p>
                        <p className="text-center">Records 80% matching</p>
                    </div>
                    <div>
                        <p className="records-count-text">1500</p>
                        <p className="text-center">Records 50% matching</p>
                    </div>
                </div>
            </Tile>

            <ChatInterface />
        </div>
    );
};

export default Home;
