/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import imagen from '../assets/logo.png';
import imag from '../assets/Chart_fill.png';
import image from '../assets/Chat.png';
import im from '../assets/User.png';
import li from '../assets/Calendar.png'; 
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    {/*const Menus = [
        { title: "Dashboard", src: {imag} },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];  */}  
  return (
    
     <div className="flex">
        <div
         className={` ${
          open ? "w-72" : "w-20 "
         } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
          <div className="flex gap-x-4 items-center">
            <img
            src={imagen}
            className={`cursor-pointer duration-500 ${
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
              <img src= {image} />
              <li className={`${
              !open && "scale-0"
            }`}>dashboart</li>
            </li>
          
        </ul>
      </div>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={() => setOpen(!open)} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    Content
  </div> 
  
</div>
      
    </div>
    
  )
}

export default Sidebar

