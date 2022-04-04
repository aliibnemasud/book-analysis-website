import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, PieChart, Pie } from 'recharts';

const Dashboard = () => {
    const [chartdata, setChartdata] = useState({});
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartdata(data));
    }, [])

    return (
        <section>
            <div className='container my-5 d-flex justify-content-between'>
                <LineChart className='mr-5' width={600} height={400} data={chartdata}>
                    <Line type="monotone" dataKey={"investment"} stroke="#8884d8"></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={""}></YAxis>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Tooltip></Tooltip>
                </LineChart>
                <BarChart width={600} height={400} data={chartdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"investment"} fill="#8884d8" />
                    <Bar dataKey={"revenue"} fill="#82ca9d" />
                </BarChart>
            </div >
            <div className='container my-5 d-flex justify-content-between'>
                <PieChart width={600} height={400}>
                    <Pie data={chartdata} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={chartdata} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
                <LineChart width={600} height={400} data={chartdata}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line name="Investment of pages" type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line name="Revenue of pages" type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
        </section>
    );
};

export default Dashboard;