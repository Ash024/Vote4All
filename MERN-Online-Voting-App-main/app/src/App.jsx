import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Login from './Login';
import Register from './Register'
import CreatePoll from './Create';
import Dashboard from './Dashboard'
import Details from './Detail';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
function App() {
 
  const router=createBrowserRouter([
   
    
    {
      path:'/',
      element:    <><Register/></>
    },
    {
      path:'/login',
      element:    <><Login/></>
    },
    {
      path:'/dash',
      element:    <>
      <Navbar/>
      <Dashboard/>
        </>
    },
    {
      path:'/create',
      element:    <>
      <Navbar/>
      <CreatePoll/>
        </>
    },
    {
      path:'/poll/:id',
      element:    <><Details/></>
    },
   
  ])
  return (
    <>
      <AuthProvider>
      
   <RouterProvider router={router} />
   </AuthProvider>
    </>
  )
}

export default App
