import React from 'react';
import { Chart } from 'react-google-charts';

export const options = {
    chart: {
        title: 'Job 1 Records Statistics',
    },
};

export const data = [
    ['Merge Status', 'Records'],
    ['Auto merged', 2000],
    ['80% Match', 1000],
    ['50% Match', 500],
    ['No Match', 1000], // CSS-style declaration
];

const BarChart = () => {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
};

export default BarChart;
