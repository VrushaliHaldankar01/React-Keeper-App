import React, { useState } from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const[newnote,addnewnote]=useState([]);

  function addtolist(setnote){
   addnewnote(prevValues=>{
    return[...prevValues,setnote];
    
    
   });

  }
function deletenote(id){


  console.log(id);
  addnewnote(prevValues=>{
    return  prevValues.filter((newnote,index)=>{
      return index !== id;
      
    });
  });
/*addnewnote((prevValues)=>{
  
   return prevValues.filter((newnote,index)=>{
      return
         index !== id;
      
    });    
  });*/
}

  return (
    <div>
      <Header />
      <CreateArea  additem={addtolist} />
   
     
       {newnote.map((displayitem,index)=>{
         return(
         <Note
         key={index} id={index} 
        title={displayitem.title} 
        content={displayitem.content}
        
        onChecked={deletenote} />
         )
       })}

      <Footer />
    </div>
  );
}

export default App;
