import React from 'react'
import { Chart } from "react-google-charts";
import "./style/Map.css"
const Map = () => {
    const data = [
      
        ["Country", "Sales"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 1700],
        ["Mexico",1600],
        ["China",1500],
        ["Chile", 100],
        ["Argentina", 200],
        ["Ecuador",20],
    ];
  return (
    <div className='map'>
          
        {/* Graph map */}
        <h1>Sales in countries</h1>
        <Chart
           chartEvents={[
             {
               eventName: "select",
               callback: ({ chartWrapper }) => {
                 const chart = chartWrapper.getChart();
                 const selection = chart.getSelection();
                 if (selection.length === 0) return;
                 const region = data[selection[0].row + 1];
                 console.log("Selected : " + region);
               },
             },
           ]}
           chartType="GeoChart"
           width="65%"
           height="300px"
           data={data}
        />
    </div>
  )
}

export default Map
