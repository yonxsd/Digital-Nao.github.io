import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './components/Map';
import Salesgraph from './components/Salesgraph';
import Customersgraph from './components/Customersgraph';
import Dashboart from './components/Dashboart';
import Sidebar from './layouts/Sidebar';
import Recentsale from './components/Recentsale';


const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Sidebar />}>
              <Route index element={<Dashboart />} />
              <Route path='Customersgraph' element={<Customersgraph />} />
              <Route path='Salesgraph' element={<Salesgraph />}/>
              <Route path='Recentsale' element={<Recentsale />}/>
              <Route path='Map' element={<Map />}/>
           </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
