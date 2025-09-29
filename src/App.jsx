
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Browse from './components/Browse.jsx'
import Login from './components/Login.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/browser",
    element:<Browse/>
  }
])

function App() {
  

  return (
  
     <RouterProvider router={appRouter}/>

          
    
  )
}

export default App
