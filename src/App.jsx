import React,{useState} from "react";
import Button from "./Button";
import Display from "./Display";

function App(){
    const[cnt,setCnt] =useState(0);
  
    function handleclick(){
      setCnt(cnt+1);
  }
  return(
    <>
   <Button onInc={handleclick}/>
   <Display msg={cnt}/>
    </>
  )
  }
  export default App;