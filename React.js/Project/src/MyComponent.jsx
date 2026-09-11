import React, {useState} from 'react'

function MyComponent (){

    const[name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }
    
    const updateName = () => {
        setName("Aashwin");
        
    }

    const updateAge = () => {
        setAge(age + 1);
        
    }

    return(<div>
                <p>Name: {name}</p>
                <button onClick = {updateName}>Set name</button>

                <p>Age: {age}</p>
                <button onClick = {updateAge}>Increase age</button>

                <p>Employement Status: {(isEmployed ? "Employed" : "Not Employed") }</p>
                <button onClick = {updateIsEmployed}>Change Status</button>
            </div>);
}

export default MyComponent