
import React,{ useState } from "react";




//let counter = 43;

function App() {
  let [counter,setcounter] = useState(12);

  const addvalue = () => {
     console.log("value added",counter);
   
     setcounter(counter => counter+1);
     setcounter(counter => counter+1);   // this is callback it takes prev val of counter 
                           // and update +1 from prev value otherwise if we write according to 
                           // prev vals it likely to does not respond with all this
     setcounter(counter => counter+1);
     setcounter(counter => counter+1);

}

const removeval =() => {
   console.log("value removed",counter);
   if(counter>0)  counter = counter -1;
     setcounter(counter);
}
  
  return (
    <>
       <h2>myy app</h2>

       <h2>     count the num: {counter}</h2> 

       <button onClick = {addvalue}>add count {counter}</button>
       <br />
       <br/>
       <button onClick={removeval}>remove count {counter}</button>

       <p>footer : {counter}</p>
       </>

  );
}

export default App;
