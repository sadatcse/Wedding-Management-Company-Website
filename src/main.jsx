import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './componenents/root';
import Home from './componenents/Home';
import Login from './componenents/Login';
import Registration from './componenents/Registration';
import Contact from './componenents/Page/Contact';
import Packages from './componenents/Page/Packages';
import Portfolio from './componenents/Page/Portfolio';
import About from './componenents/Page/About';
import Services from './componenents/Page/Services/Services';
import Error404 from './componenents/Page/Error404';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
        element:<Portfolio></Portfolio>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
