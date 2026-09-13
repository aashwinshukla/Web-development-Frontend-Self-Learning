import { useState, useEffect } from "react";
import ComponentC from "./ComponentC";

function ComponentB (props){
    
   
    
    return( <div className="box">
                <h1>ComponentB</h1>
                <ComponentC/>
            </div>);
}
export default ComponentB