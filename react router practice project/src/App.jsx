import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';
import { 
  NavBar,
  Footer,
  About
} from './components/index.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
      </div>
    )
  },
  {
    path: '/about',
    element: (
      <div>
        <About />
      </div>
    )
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
        <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
