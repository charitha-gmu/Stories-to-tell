import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
    ['Records', 'Merge Status'],
    ['Auto merged', 2000],
    ['80% Match', 1000],
    ['50% Match', 500],
    ['No Match', 1000], // CSS-style declaration
];

export const options = {
    title: 'Job 1 Records Statistics',
    pieHole: 0.4,
    is3D: false,
};

const PieChart = () => {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
        />
    );
};

export default PieChart;
