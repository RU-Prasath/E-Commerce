import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from './pages/Add/Add'
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Login from './Components/Login/Login';
// import UserAuthContext, { AuthContext } from './context/AuthContext';


const App = () => {
  const url = "https://kakeapp.houseofwebsites.com"
  return (
    // <AuthContext>
      <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          {/* <Route path='/' element={<Login url={url}/>}/> */}
          <Route path="/admin/add" element={<Add url={url}/>}/>
          <Route path="/admin/list" element={<List url={url}/>}/>
          <Route path="/admin/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
      
    </div>
    // </AuthContext>
  )
}

export default App
