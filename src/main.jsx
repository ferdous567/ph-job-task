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
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Todo from './components/Todo/Todo';
import CreateTask from './components/CreateTask/CreateTask';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children:[
          {
            index: true,
            element: <Todo></Todo>
          },
          {
            path: 'createTask',
            element: <CreateTask></CreateTask>
          }

        ]
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
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
