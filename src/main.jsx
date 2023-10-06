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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Service',
        element:<Services></Services>
      },
      {
        path:'/Portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/Packages',
        element:<Packages></Packages>
      },
      {
        path:'/Contact',
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
