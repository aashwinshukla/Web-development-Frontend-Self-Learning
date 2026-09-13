import { useState, useEffect } from "react";


function MyComponent (){
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTNER ADDED");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTNER REMOVED");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;

    }, [width, height]);

    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTNER ADDED");

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return( <>
              <p>Window Width: {width}px</p>
              <p>Window Height: {height}px</p>  
            </>);
}
export default MyComponent