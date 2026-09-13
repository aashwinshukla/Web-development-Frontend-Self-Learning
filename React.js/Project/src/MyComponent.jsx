import { useState, useEffect } from "react";


function MyComponent (){
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    //     document.title = `Count: ${count} `;
    
    // useEffect(() => {
    //     document.title = `Count: ${count} `;
    // }); 

    // useEffect(() => {
    //     document.title = `My Counter Program `;
    // }, []);

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count]);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // SOME CLEANUP CODE
        }
    }, [count, color]);


    function addCount(){
        setCount(c => c + 1);
    }

    function subCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green"? "red" : "green" );
    }

    return( <div>
                <p style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subCount}>Substract</button>
                <button onClick={changeColor}>Change Color</button>
            </div>);
}
export default MyComponent