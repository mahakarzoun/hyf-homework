import  { useState , useEffect} from "react";

function Counter () {
    
    const [counter, setCounter] = useState(0);
  
    const increment = () => {
      setCounter(prev => prev +1)
    };
    useEffect(() => {
        setTimeout( () => {
        increment()}
        ,1000)
    });
    return (
        <div>
        <h3>you have used {counter} seconds on this websites </h3>
        </div>
    )
    
}

export default Counter
  
