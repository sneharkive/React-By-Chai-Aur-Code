import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import ParamComp from './Components/ParamComp'
import Course from './Components/Course'
import NotFound from './Components/NotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <div>
      <Navbar />
      <Home />
    </div>,
  },

  {
    path: 'about',
    element: 
    <div>
    <Navbar />
    <About />
  </div>,
  },

  {
    path: 'dashboard',
    element: 
    <div>
      <Navbar />
      <Dashboard />
    </div>,
    children: [
      {
        path: 'course',
        element: <Course />
      },
    ]
  },

  {
    path: 'student/:id',
    element: 
    <div>
    <Navbar />
    <ParamComp />
  </div>,
  },

  {
    path: '*',
    element: <NotFound />
  }
])

function App() {

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
