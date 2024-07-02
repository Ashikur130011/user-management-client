import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import User from './Components/Auth/User.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/user',
        element: <User/>,
        loader: () => fetch('http://localhost:5000/user')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />  
    </AuthProvider>
  </React.StrictMode>,
)
