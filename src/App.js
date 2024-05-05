import React from 'react';

import Sidebar from "./layout/Sidebar";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSelice';
import Login from "./form/Login"


const App = () => {
  const user = useSelector(selectUser);
  return (
    <div >
      {user ? <Sidebar /> : <Login />}
    
    </div>
    
  )
}  
export default App;
