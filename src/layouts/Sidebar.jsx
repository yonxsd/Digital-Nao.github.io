import React from 'react'
import {Outlet, Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
         <div className="navbar bg-base-100">
             {/* Sidebar y sus secciones  */}
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
               <label htmlFor="my-drawer" className="icon-[heroicons-outline--menu-alt-2] cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7"></path></svg></label>
               
              </div> 
              <div className="drawer-side ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
                  <li><Link as={Link} to="/"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"></path></svg>Dashboard</Link></li>
                   <li>
                      <details open>
                     <summary>Graph Number of customers and <br/>
                      Sales current campaign</summary>
                     <ul>
                       <li><Link as={Link} to="/Customersgraph" >Customersgraph</Link></li>
                       <li><Link as={Link} to="/Salesgraph" >Salesgraph</Link></li>
                       
                     </ul>
                     <li><Link as={Link} to="/Recentsale">Recent sale</Link></li> 
                     <li><Link as={Link} to="/Map">Sales in countries</Link></li>
                      </details>
                   </li>
                   <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/><br/>
                     <br/>
                      {/* Customer Sopport */}
                     <h1 className='flex justify-center'>Customer Support</h1>
                     <h2 className=' grid grid-cols-1.2 gap-1 place-content-center h-48'>Ask you query , place
                        requests or important
                        issues. Our support 
                        team will contact 24/7 
                        to you. 
                      </h2>
                     <button className="btn glass">Glass button</button>
                     {/*----- */}
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     {/* politica y privacidad */}
                     <h3 className='cursor-default' >Terms & Services</h3>
                     <h3 className='cursor-default'>Privacy Policy</h3>
                     {/*----------- */}
                </ul>
                
              </div>
            </div>
            {/*buscador */}
            <label className="input input-bordered flex items-center gap-2  ">
              <input type="text" className="grow" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
             {/*-------- */}
             {/* iconos de mensajes y notificacion como tambien el perfil del cliente que tambien contien sus seccion*/}
           <div className="flex-none gap-2 ">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.4em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M924.3 338.4a447.6 447.6 0 0 0-96.1-143.3a443.1 443.1 0 0 0-143-96.3A443.9 443.9 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.1 444.1 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.9 449.9 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.7 447.7 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6M312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48"></path></svg>
                      <span className="badge badge-xs  bg-error indicator-item"></span>
                    </div>
               </button>
               <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                      <span className="badge badge-xs  bg-error indicator-item"></span>
                    </div>
               </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                      <div className="w-15 rounded-full right-0">
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
            
         </div> 
          {/*------------ */}
          {/*para que se pueda visualisar */}       
         <section>
            <Outlet></Outlet>
         </section>
         {/*----------- */}
    </>
  )
}

export default Sidebar;
