import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Github, Home, Layout, Services } from './components/index.js';
import './index.css'
import getMyGithubInfo from './utils.js';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} ></Route>
      <Route path='about/:userid' element={<About />} ></Route>
      <Route
        loader={ getMyGithubInfo }
        path='github'
        element={<Github />} ></Route>
      <Route path='services' element={<Services />} ></Route>
      <Route path='contact' element={<Contact />} ></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
