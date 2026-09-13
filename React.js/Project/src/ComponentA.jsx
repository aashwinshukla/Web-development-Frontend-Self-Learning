import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA (){
    
   const [user, setUser] = useState("Aashwin");
    
    return( <div className="box">
                <h1>ComponentA</h1>
                <h2>Hello {user}</h2>
                <ComponentB user = {user}/>
            </div>);
}
export default ComponentA