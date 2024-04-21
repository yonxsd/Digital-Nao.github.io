import React from 'react'
import Chart from "react-apexcharts";
import "./Salesgraph.css";

const Salesgraph = () => {
  const data = {
    series: [{
      name: 'current campaign sales',
      data: [31, 40, 28, 51, 42, 109, 100]
    },],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  };
  
  return (
    <div>
      <h1 className='text-2xl cus z-40'>Current campaign sales</h1>
      <div className='salt'><Chart options={data.options} series={data.series} type="area" /></div>
    </div>
  )
}

export default Salesgraph
