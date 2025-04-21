import { createSlice } from "@reduxjs/toolkit";
const initialState={
    pastes:localStorage.getItem("pastes")
 ?JSON.parse(localStorage.getItem("pastes"))
 :[],
}
export const pasteSlice=createSlice({
    name:'paste',
    initialState,
    reducers:{addToPaste:(state,action)=>{
        const paste=action.payload;
        state.pastes.push(paste);
        // const passInuser=prompt("Enter New pass");
        // paste.ptr=passInuser;
        console.log("hello",paste.ptr);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        
    },
updatePastes:(state,action)=>{
    const paste=action.payload;
    // const index=state.pastes.findIndex
    // ((item)=>{
    //     item._id==pasteId;
        
        
    // })

    console.log("updatepaste",paste.ptr);
    const  index=state.pastes.findIndex((item)=>item._id===paste._id);
     const til=paste.title;
    
    const pasteId=action.payload;
    if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        alert("Update Successfully");
    }
},
resetToPastes:(state,action)=>{
    state.pastes=[];
    localStorage.removeItem("paste");
    
},
removeToPastes:(state,action)=>{
    const pasteId=action.payload;
    console.log(pasteId);
    
    const index=state.pastes.findIndex((item)=>item._id===pasteId);
    console.log(index);
    if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
      alert("Delete Successfully");
    }

}}
});

export const {addToPaste,updatePastes,resetToPastes,removeToPastes}=pasteSlice.actions;
export default pasteSlice.reducer;