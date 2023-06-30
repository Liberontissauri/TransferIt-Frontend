import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from '@/Pages/Hero/Hero.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Upload from './Pages/Upload/Upload';

const router = createBrowserRouter([
  { path: "/", element: <Hero /> },
  { path: "/dashboard", element: <Home></Home>},
  { path: "/profile", element: <Profile></Profile>},
  { path: "/login", element: <Login></Login>},
  { path: "/upload", element: <Upload></Upload>}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
