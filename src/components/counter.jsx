import { useState } from "react";

export function Counter(){
    const[counter, setCounter] = useState(0);

    const handleChange=(value)=>{
        setCounter(counter+value)
    };

    const handleMult=(value)=>{
        setCounter(counter*value)
    }

     return (
         <div>
             <h1>Counter:{counter} </h1>
            <button className="counter" onClick={()=>{
                handleChange(1)
            }}>
                
                Add 1</button>

                <button className="counter" onClick={()=>{
                    if(counter>=1){
                        handleChange(-1)
                    }
                   
                }}>
                
                Sub 1</button>
                <button className="counter" onClick={()=>{
                   
                        handleMult(2)
                    
                   
                }}>
                
                Mult 1</button>
                
                <button className="counter" onClick={()=>{
                   if(counter>=2){
                    handleMult(1/2)
                   }
                 
               
              
           }}>
           
           Div 1</button>
                
         </div>
     )
}