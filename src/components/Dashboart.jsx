import React from 'react'

import "./style/Dashboart.css";
import Map from "../components/Map";



const Dashboart = () => {
    
  return (
    <div>
      <div className='vent'> 
        <br />
        <div className="stat-title vet1">Total Likes</div>
       <div className=" text-amber-600 vent2">25.6K</div>
       <div className="stat-desc vent3">21% more than last month</div>
       <div className="stat-figure text-amber-600 logv">
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m7.6 7.619c.763.235 1.714.381 2.9.381c6 0 6-3.75 6-3.75A2.25 2.25 0 0 0 23.75 16h-6.656a3.24 3.24 0 0 1 .904 2.25v.555l-.003.083a5.5 5.5 0 0 1-.154.99a6.1 6.1 0 0 1-.74 1.74M23.5 10.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5A2.25 2.25 0 0 1 17 18.25v.5S17 24 9.5 24S2 18.75 2 18.75z"></path></svg>
        </div>
      </div>
      <br />
       
      <div className='ent'> 
        <br />
        <div className="stat-title vet1">Total Likes</div>
       <div className=" text-amber-600 vent2">25.6K</div>
       <div className="stat-desc vent3">21% more than last month</div>
       <div className="stat-figure text-amber-600 logv">
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m7.6 7.619c.763.235 1.714.381 2.9.381c6 0 6-3.75 6-3.75A2.25 2.25 0 0 0 23.75 16h-6.656a3.24 3.24 0 0 1 .904 2.25v.555l-.003.083a5.5 5.5 0 0 1-.154.99a6.1 6.1 0 0 1-.74 1.74M23.5 10.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5A2.25 2.25 0 0 1 17 18.25v.5S17 24 9.5 24S2 18.75 2 18.75z"></path></svg>
        </div>
      </div>
      <br />
      <div >
        <Map /> 
      </div>
    </div>
  )
}

export default Dashboart
