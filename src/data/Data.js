import { Link } from "react-router-dom";

import{
    MdDashboard,
    MdDiversity3,

    MdAirportShuttle,
    MdShoppingBag,
    
}from "react-icons/md";
// icons y heading que están aquí se muestra pero en el menu de  sidebar 
export const SidebarData = [
   {
    icon: MdDashboard,
    heading: <Link as={Link} to="/">Dashboard</Link>,
   },
   {
    icon: MdDiversity3,
    heading: <Link as={Link} to="/Customersgraph">Customers Graph</Link>,
   },
   {
    icon: MdShoppingBag,
    heading: <Link as={Link} to="/Salesgraph">Sales Graph</Link>,
   },
   {
    icon: MdAirportShuttle,
    heading: <Link as={Link} to="/Recentsale">Recentsale</Link>,
   },
   {
    icon:  MdDiversity3,
    heading: <Link as={Link} to="/ManageTeam">ManageTeam</Link>,
   },
  
];