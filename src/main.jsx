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
import Faq from './components/Page/Faq';
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
        element:<Home></Home>,
        loader: () => fetch('/ServiceData.json')
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
        element:<Services></Services>,
        loader: () => fetch('/ServiceData.json') 
      },
      {
        path:'/portfolio',
        element:<PrivateRoute><Portfolio></Portfolio></PrivateRoute>
      },
      {
        path:'/faq',
        element:<PrivateRoute><Faq></Faq></PrivateRoute>,
        loader: () => fetch('/FaqData.json') 

      },
      {
        path:'/contact',
        element:<Contact></Contact> 
      },
      {
        path: '/service/:id',
        element:<PrivateRoute><Detailsservice></Detailsservice></PrivateRoute>, 
        loader: () => fetch('/ServiceData.json') 
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