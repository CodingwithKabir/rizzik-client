import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Registration from './components/access/Registration';
import Login from './components/access/login';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Cart from './components/Cart';
import PrivateRoute from './Routs/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/update-product",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
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
