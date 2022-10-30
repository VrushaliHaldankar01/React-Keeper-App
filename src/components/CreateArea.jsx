import React, { useState } from "react";

function CreateArea(props) {

  const[setnote,adddetail]=useState({
    title :"",
    content:""
  });

  function handlechange(event){
    const{name,value}=event.target;
  
    adddetail((prevValue)=>{
      return{
      ...prevValue,
      [name]:value
      };
    
  });
    
 

  }
function submitnote(event){
  props.additem(setnote);
  adddetail({
    title :"",
    content:""
  });
  event.preventDefault();
   


}
  return (
    <div>
      <form>
        <input  onChange={handlechange}
        name="title" 
        placeholder="Title"
        value={setnote.title} 
        />
        <textarea onChange={handlechange}
        name="content" 
        value={setnote.content} 
        placeholder="Take a note..." rows="3" />
        <button onClick={submitnote}
      
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
