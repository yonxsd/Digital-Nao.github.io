/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import imagen from '../assets/capas.png';
import imag from '../assets/tablero.png';
import imt from "../assets/grafico-de-barras.png";
import image from '../assets/grafico.png';
import im from '../assets/mesa.png';
import "./Sidebar.css"
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Dashboart from "../components/Dashboart";
import Customersgraph from "../components/Customersgraph";
import Salesgraph from "../components/Salesgraph";
import Recentsale from "../components/Recentsale";



const Sidebar = () => {
    const [open, setOpen] = useState(true);
    
  return (
    
     <div className="flex">
        <div
         className={` ${
          open ? "w-72" : "w-20 "
         } bg-secondary-content h-screen p-5  pt-8 relative duration-300`}
        >
          <div className="flex gap-x-4 items-center">
            <img
            src={imagen}
            className={`duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt='logo'
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
              <img src= {imag} />
              <li className={`${!open && "scale-0"}`}><Link as={Link} to="/" >dashboart </Link></li>
              
            </li>
            <li className="flex  rounded-md p-2 pt-6 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
              <img src= {imt} />
              <li className={`${!open && "scale-0"}`}><Link as={Link} to="/Customersgraph">Customers Graph</Link></li>
            </li>
            <li className="flex  rounded-md p-2 pt-6 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
              <img src= {image} />
              <li className={`${!open && "scale-0"}`}><Link as={Link} to="/Salesgraph">Sales Graph</Link></li>
            </li>
            <li className="flex  rounded-md p-2 pt-6 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
              <img src= {im} />
              <li className={`${!open && "scale-0"}`}><Link as={Link} to="/Recentsale">Recent sale</Link></li>
            </li>
        </ul>
      </div>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-secondary-content">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={() => setOpen(!open)} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
       <div className="flex-1 px-2 mx-2">
          <div className="form-control">
           
           <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-black" />
          </div>
       </div>
        <div className='pe-4'>
         <button className=" btn btn-ghost  btn-circle">
            <div className="indicator ">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeWidth={1.5} d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"></path></svg>
             <span className="badge badge-xs bg-error indicator-item "></span>
            </div>
          </button>
        </div>
        <div className='pe-4'>
         <button className=" btn btn-ghost  btn-circle">
            <div className="indicator ">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
             <span className="badge badge-xs  bg-error indicator-item "></span>
            </div>
          </button>
        </div>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
        <div className="w-10 rounded-full  ">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    
    </div>
    {/* Page content here */}
    <div className='relative h-32 w-132  bg-white conted'>
      <div className='absolute inset-0'>
        
           <Routes>
             <Route path='/' element={<Dashboart />}/>
             <Route path='/Customersgraph' element={<Customersgraph />}/>
             <Route path='/Salesgraph' element={<Salesgraph />}/>
             <Route path='/Recentsale' element={<Recentsale />}/>
           </Routes>
        
      </div>
  </div>
  </div> 
  
</div>
      
    </div>
    
  )
}

export default Sidebar

