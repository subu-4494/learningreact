
import React,{ useState } from "react";




//let counter = 43;

function App() {
  let [counter,setcounter] = useState(12);

  const addvalue = () => {
     console.log("value added",counter);
    if(counter<=19) counter = counter +1;
     setcounter(counter);
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
