import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { DataProvider } from './context/DataContext'



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
import Root from './components/Root';
import Register from './components/Register/Register'
import Detailsservice from './components/Page/Services/Detailsservice';




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
        path: '/register',
        element: <Register></Register>
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
      },
      {
        path: '/service/:id',
        element:<Detailsservice></Detailsservice>, 
        loader: () => fetch('/ServiceData.json') 
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>

 
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </React.StrictMode>
      </DataProvider>,
)