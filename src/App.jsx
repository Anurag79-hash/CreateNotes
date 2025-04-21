import {useMemo,useState} from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar'
import Paste from './component/Paste';
import ViewPast from './component/ViewPast';


const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {path:'/paste',
      element:<div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:'/pastes/:id',
      element:<div>
        <Navbar/>
        <ViewPast/>
      </div>
    }
  ]
)
function App(){

  return(
    <div className='pt-10' >
    <RouterProvider router={router}/>   
    </div>
  )

}
export default App;