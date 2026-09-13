import { useState, useEffect, useRef } from "react";


function MyComponent (){
    
    // let [number, setNumber] = useState(0);
    
    const ref = useRef(0);

    console.log(ref);

    useEffect(() => {
        console.log("COMPONENET RENDERED");

        // IF NOW WE RUN THE PROGRAM AND REMOVE STRICT MODE FROM MAIN.JSX 
        // WE WILL SEE IN CONSOLE EVERYTIME WE CLICK THE BUTTON THE WEBSITE RENDERS 
        // WHICH WE DONT WANT EVERYTIME 
        // THATS WHY WE WILL USE USEREF THAT WILL REMEBER BUT NOT RENDER 

    }, [])

    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }
    
    return( <button onClick={handleClick}>
                Click me!
                
            </button>);
}
export default MyComponent