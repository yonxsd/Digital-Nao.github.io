import React from 'react';
import { Provider } from 'react-redux';
import store from './App/store';
import Sidebar from "./layout/Sidebar";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSelice';
import Login from "./form/Login"



const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}; 

const AppContent = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <Sidebar /> : <Login />}
    </div>
  );
};

export default App;
