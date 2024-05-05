/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
/*import imagen from '../assets/capas.png';
import imag from '../assets/tablero.png';
import imt from "../assets/grafico-de-barras.png";
import image from '../assets/grafico.png';
import im from '../assets/mesa.png';
import int from "../assets/asistente-personal.png";
import man from "../assets/Chart_fill.png";*/
import icon from "../assets/group.png";
import "./Sidebar.css"
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Dashboart from "../components/Dashboart";
import Customersgraph from "../components/Customersgraph";
import Salesgraph from "../components/Salesgraph";
import Recentsale from "../components/Recentsale";
import ManageTeam from "../components/ManageTeam";
import { SidebarData } from '../data/Data';
import soports from "../assets/servicio-al-cliente.png";



const Sidebar = () => {
    
    const [selected, setSelected] = useState(0);
    
  return (
    
    <div >
      <div className="box">
        {/* primer capa */}
       <div className="BG" />
        {/** */}
        {/*icon de salir */}
       <div className='fluent-power'>
          <img className='group' src={icon} alt="Group"  />
       </div>
       {/** */}
       <div className='group'>
          <div className ="Sidebar">
            
  

               {/*los datos están contenido en el archivo "data" aquí se muestra con este código  para que aparezca en el sidebar que sea menos código*/} 
               <div className="menu">
                  {SidebarData.map((item, index) => {
                     return (
                       <div
                         className={selected === index ? "menuItem active" : "menuItem"}
                         key={index}
                         onClick={() => setSelected(index)}
                       >
                          <item.icon />
                          <span><Link >{item.heading}</Link></span>
                       </div>
                     );
                   })}
               
               </div>

               {/*soport*/}
               <div className="soport">
                   <h1>Customer Support</h1>
                   <p>Ask you query , place
                       requests or important
                       issues. Our support 
                       team will contact 24/7 
                       to you. 
                   </p>
                   <div className="Assistant">
                       <div className="lgosoport">
                        <img src={soports} alt="" />    
                        <a href=""><p>Connect Now</p></a>
                       </div>
                      
                   </div> 

                   <div className="priv">
                      <p>Terms & Services  <p> Privacy Policy</p> </p>    
                   </div>   
               </div>
          </div>
       </div>
        
       
        <div className='box'>
          {/*segunda capa */}
         <div className='rectangle' >
            {/*perfil icon de mensajes barras de busqueda */}
           <div className="form-control fixed bus">
             <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto " />
            </div>
            <button className="btn btn-ghost btn-circle fixed nr">
            <div className="indicator ">
              <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5" viewBox="0 0 1024 1024"><path fill="white" d="M464 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0m200 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0m-400 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0m661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.4 444.4 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.4 445.4 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.5 444.5 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7"></path></svg>              <span className="badge badge-xs bg-error indicator-item"></span>
            </div>
            </button>
            <button className="btn btn-ghost btn-circle fixed nt">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs bg-error indicator-item"></span>
            </div>
            </button>
            <div className="avatar online ellipse">
            <div className="w-12 rounded-full perf">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>
            {/** */}
            {/*rautes para que pueda visualisar en el panel */}
            <Routes>
               <Route path='/' element={<Dashboart />}/>
               <Route path='/Customersgraph' element={<Customersgraph />}/>
               <Route path='/Salesgraph' element={<Salesgraph />}/>
               <Route path='/Recentsale' element={<Recentsale />}/>
               <Route path='/ManageTeam' element={<ManageTeam />}/>
            </Routes>
         </div>

        </div>
      </div>
    </div>
    
  )
}

export default Sidebar

