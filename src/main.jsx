import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Page/Contact';
import Packages from './components/Page/Packages';
import Portfolio from './components/Page/Portfolio';
import About from './components/Page/About';
import Services from './components/Page/Services/Services';
import Error404 from './components/Page/Error404';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Registration from './components/Registration';
import Root from './components/Root';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/Registration',
        element:<Registration></Registration>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/service',
        element:<Services></Services>
      },
      {
        path:'/portfolio',
        element:<PrivateRoute><Portfolio></Portfolio></PrivateRoute>
      },
      {
        path:'/packages',
        element:<Packages></Packages>
      },
      {
        path:'/contact',
        element:<Contact></Contact> 
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)