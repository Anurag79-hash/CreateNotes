import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToPastes } from '../redux/pastSlice';

const Paste=()=>{
    const [searchTerm,setSearchTerm]=useState('');
const pastes=useSelector((state)=>state.paste.pastes);

const dispatch=useDispatch();

const filteredData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
function handleDelete(pasteId){
    dispatch(removeToPastes(pasteId));
   
}
    return(
        <div className='bg-indigo-400 w-full  p-1 min-h-screen mt-1 '>
          <input type='search' 
          placeholder='Search here' className='p-2 rounded-2xl  bg-pink-200 border-4 w-[80%]  m-2 md:max-w-md border-orange-500 ' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
          <div className='flex flex-col gap-5 '>
            {filteredData.length>0 &&filteredData.map((paste)=>{
                return(<div className='mb-0 '>
                    <div key={paste?._id}>
                        {paste.title}</div>
                        <div >
                        <button >
                        <a 
                         href={`/?pasteId=${paste?._id}`}
                        >Edit</a>
                        </button> 
                        <button className='m-1'>
                            <a href={`/pastes/${paste?._id}`}>View</a>
                            </button>
                            <button onClick={()=>{
                                navigator.clipboard.writeText(paste?.content)
                                alert('Copy to Clipboard')
                            }}>
                            Copy</button>
                            <button className='m-1' onClick={()=>{handleDelete(paste?._id)}}>
                            Delete</button> 
                            <button onClick={()=>{
                                const urlS=`${window.location.origin}/pastes/${paste._id}`
                                navigator.share({
                                    title:paste.title,
                                    context:paste.content,
                                    url:urlS,
                                }).then(()=>console.log("hello i share"))
                            }}>Share</button>
                        </div>
                        </div>
                
                )
            })}
          </div>
        </div>
    )
}
export default Paste;