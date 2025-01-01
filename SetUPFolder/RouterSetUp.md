# To Set Up React Router

## createBrowserRouter at 'App.jsx' (here '*' is to handel error)  and   

``` jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />

  },

  {
    path: 'about',
    element: <About />

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

```