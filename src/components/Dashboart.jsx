import React from 'react'

import "./style/Dashboart.css"
import Chart from "react-apexcharts";


const Dashboart = () => {
  const data = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
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
        <div className="stats shadow num">
          
          <div className="stat w-80 h-64">
            <div className="stat-figure text-primary  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="em" height="2em" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3.029 2.886c-.777.54-.971 1.063-.971 1.306c0 .446.362.808.808.808h6.384a.808.808 0 0 0 .808-.808c0-.244-.194-.767-.971-1.306C7.792 9.875 6.719 9.5 5.5 9.5c-1.218 0-2.292.375-3.029.886M0 11.692C0 9.846 2.475 8 5.5 8c1.18 0 2.278.281 3.177.734A5.671 5.671 0 0 1 11.5 8c2.475 0 4.5 1.538 4.5 3.077A1.923 1.923 0 0 1 14.077 13h-3.483c-.416.604-1.113 1-1.902 1H2.308A2.308 2.308 0 0 1 0 11.692m10.991-.192h3.086c.234 0 .423-.19.423-.423c0-.103-.096-.472-.688-.89c-.554-.393-1.375-.687-2.312-.687c-.517 0-.999.09-1.42.236c.526.534.854 1.146.911 1.764M12.5 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clipRule="evenodd"></path></svg>
            </div>
            <div className="stat-title text-2xl font-bold">Number Customers</div>
            <div className="stat-value text-white ">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
  
          <div className="stat w-80">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title text-2xl font-bold">Sales</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
  
          <div className="stat w-80">
            <div className="stat-title text-2xl font-bold">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
           
        </div>
         
        

        <div className='das'>
          <h1 className='most'>most selled products</h1>
          <Chart options={data.options} series={data.series} type="area" />
        </div>
       
        <div className="overflow-x-auto dr">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                      <img src="https://cdn.midjourney.com/502c7888-e369-437f-a6fe-9f30f057d9b9/0_0.webp" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br/>
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://cdn.midjourney.com/b66edbdc-bd31-4d03-9d78-7c0c7e2bf5ed/0_1.webp" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br/>
                  <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://cdn.midjourney.com/b62baba6-7750-49f4-aee0-3d95291be4ea/0_2.webp" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br/>
                  <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://cdn.midjourney.com/76941c37-47a9-41da-a5f1-243e5e881849/0_3.webp" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
            
          </table>
       </div>
    </div>
  )
}

export default Dashboart
