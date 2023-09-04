/* eslint-disable react/prop-types */
import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import eye from '../../assets/images/view.png';
import { useNavigate } from 'react-router-dom';

import close from '../../assets/images/close.png';

//import "react-table/react-table.css";

const RecentJobs = () => {
    const navigate = useNavigate();

    const tableData = [
        {
            id: 1,
            jobName: 'Job 1',
            status: 'In Progress',
            startTime: '4:00PM July 4th 2023',
            endTime: '--',
        },
        {
            id: 2,
            jobName: 'Job 2',
            status: 'In Progress',
            startTime: '7:00PM July 7th 2023',
            endTime: '--',
        },
        {
            id: 3,
            jobName: 'Job 3',
            status: 'In Progress',
            startTime: '8:00PM July 8th 2023',
            endTime: '--',
        },
        {
            id: 4,
            jobName: 'Job 4',
            status: 'In Progress',
            startTime: '6:00PM July 4th 2023',
            endTime: '--',
        },
        {
            id: 5,
            jobName: 'Job 5',
            status: 'Completed',
            startTime: '4:00PM July 4th 2023',
            endTime: '8:00PM July 4th 2023',
        },
    ];

    const columns = [
        {
            Header: 'S.No',
            accessor: 'id', // String-based value accessors!
        },
        {
            Header: 'Job Name',
            accessor: 'jobName', // String-based value accessors!
        },
        {
            Header: 'Status',
            accessor: 'status', // String-based value accessors!
        },
        {
            Header: 'Started Time',
            accessor: 'startTime',
        },
        {
            Header: 'End Time',
            accessor: 'endTime',
        },
        {
            Header: 'Action',
            // accessor: ''
            Cell: ({ row }) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={eye}
                            style={{ width: 30, height: 30, padding: 5 }}
                            onClick={() => navigate('/job-details')}
                        />

                        {row?.status != 'Completed' && (
                            <img
                                src={close}
                                style={{ width: 20, height: 20, padding: 5 }}
                            />
                        )}
                    </div>
                );
            },
        },
    ];

    return (
        <div className="recent-jobs-container">
            <b style={{ padding: 5 }}>Recent Jobs</b>
            {/* <ScrollArea> */}{' '}
            <ReactTable
                data={tableData}
                columns={columns}
                showPagination={false}
                defaultPageSize={
                    tableData?.length < 10 ? tableData?.length : 10
                }
                className="recent-jobs-container"
            />
            {/* </ScrollArea> */}
        </div>
    );
};
export default RecentJobs;
