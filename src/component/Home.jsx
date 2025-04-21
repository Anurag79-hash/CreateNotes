import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import { addToPaste, updatePastes } from '../redux/pastSlice';
function Home(){
    const [title,setTitle]=useState('');
    const [value,setValue]=useState('');
    const [pass,setpass]=useState("");
    const [searchParam,setParam]=useSearchParams();
    const pasteId=searchParam.get("pasteId");
    
    console.log("hello param",searchParam);
    const dispatch=useDispatch();
    const allPastes=useSelector((state)=>state.paste.pastes);
    console.log(pasteId);
    useEffect(()=>{
        console.log("inside useEffect",allPastes);
       if(pasteId) {const paste=allPastes.find((p)=>p._id===pasteId);
       setTitle(paste.title);
        setValue(paste.content);
        
     console.log(paste.title);
     console.log(paste.content);
    }
      
    },[pasteId]);
    function creatPaste(){
        if(title.trim()===""||value.trim()===""){
            alert("Please fill in both Title and Content");
            return;
        }
        const paste={
            title:title,
            content:value,
            _id:pasteId||Date.now().toString(36),
            createdAt:new Date().toISOString(),
            ptr:pass
        }
        alert("Successfully Notes Created");
        if(pasteId){
            
            dispatch(updatePastes(paste));
        
        }
        else{
            dispatch(addToPaste(paste));
        }
        setTitle('');
        setValue('');
        setParam({});
    }
 
    return(
        <div className='  bg-orange-500'><div className=''>
            <input required
            className='hover:border-purple-500 mt-9
         rounded-md ml-3 border-blue-800 border-[3px]  m-2 h-9 w-[40%]' type="text" placeholder='Enter title here' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button className='p-2 border-blue-800 border-2 h-9 pt-1  ' onClick={creatPaste}>{pasteId?"Update Notes":"Creat Notes"}</button>
        </div>
        <div className='mx-auto h-screen max-w-[90%] min-w-[98%] '>
            <textarea required className='w-3/4  border-[3px] mt-1 ml-[1%]  rounded-md border-blue-700 h-[75%]'value={value} placeholder='Enter Content'
            onChange={(e)=>{setValue(e.target.value)}}/>
        </div>
        </div>
    )
}
export default Home;