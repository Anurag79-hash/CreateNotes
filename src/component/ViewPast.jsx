import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPast=()=>{
    const {id}=useParams();
    const allPastes=useSelector((state)=>state.paste.pastes);
    const paste=allPastes.filter((p)=>p._id===id)[0];
    console.log(paste);
    console.log("hello i am view");

    return(
        <div className=' space-y-4 mb-0 bg-pink-300 h-screen  p-10' ><div>
        <input type="text" disabled className='w-[80%] mb-3 border-blue-800 border-4 rounded-xl p-2 'placeholder='Enter title here' value={paste.title} onChange={(e)=>setTitle(e.target.value)}/>
     
    </div>
    <div className='h-[90%]' >
        <textarea className='w-[80%] bg-white h-4/5 border-blue-600 border-4 rounded-xl'disabled value={paste.content} placeholder='Enter Content'
        onChange={(e)=>setValue(e.target.value)}/>
    </div>
    
    </div>
)
}
export default ViewPast;