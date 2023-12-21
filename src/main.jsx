import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home.jsx';
import Layout from './layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './Login/Login';
import Register from './Register/Register';
import AutProvider from './Provider/AutProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutProvider>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </AutProvider>
  </React.StrictMode>,
)
