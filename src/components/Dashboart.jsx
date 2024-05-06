import React from 'react'

import "./style/Dashboart.css";
import Map from "../components/Map";



const Dashboart = () => {
    
  return (
    <div>
      <div className='vent'> 
        <br />
        <div className="stat-title vet1">Customers</div>
       <div className=" text-amber-600 vent2">25.6K</div>
       <div className="stat-desc vent3">21% more than last month</div>
       <div className="stat-figure text-amber-600 logv">
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m7.6 7.619c.763.235 1.714.381 2.9.381c6 0 6-3.75 6-3.75A2.25 2.25 0 0 0 23.75 16h-6.656a3.24 3.24 0 0 1 .904 2.25v.555l-.003.083a5.5 5.5 0 0 1-.154.99a6.1 6.1 0 0 1-.74 1.74M23.5 10.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5A2.25 2.25 0 0 1 17 18.25v.5S17 24 9.5 24S2 18.75 2 18.75z"></path></svg>
        </div>
      </div>
      <br />
       
      <div className='ent'> 
        <br />
        <div className="stat-title vet1">Sales</div>
       <div className=" text-amber-600 vent2">25.6K</div>
       <div className="stat-desc vent3">21% more than last month</div>
       <div className="stat-figure text-amber-600 logv">
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M30 6V4h-3V2h-2v2h-1c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h4v2h-6v2h3v2h2v-2h1c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-4V6zm-6 14v2h2.586L23 25.586l-2.292-2.293a1 1 0 0 0-.706-.293H20a1 1 0 0 0-.706.293L14 28.586L15.414 30l4.587-4.586l2.292 2.293a1 1 0 0 0 1.414 0L28 23.414V26h2v-6zM4 30H2v-5c0-3.86 3.14-7 7-7h6c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5 5 0 0 0 15 20H9c-2.757 0-5 2.243-5 5zm8-14a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></path></svg>
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
