
import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar(){
    return(
        <div className="top-0 mb-0 z-50 w-full fixed bg-purple-700 h-11 p-2 text-xl">
            <NavLink className='focus:outline-none  hover:text-green-500  text-pink-200  'to="/">
            Home
            </NavLink>
            <NavLink to='/paste' className=' hover:text-orange-400 text-pink-200 ml-[40%]'>
             Notes
            </NavLink>
        </div>
    )
}
export default Navbar