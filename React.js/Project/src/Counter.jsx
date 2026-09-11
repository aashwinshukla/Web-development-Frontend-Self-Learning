import React, {useState} from 'react'

function Counter (){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
        
    }

    const decrement = () => {
        setCount(count-1);
        
    }

    const reset = () => {
        setCount(0);
        
    }

    return <div className='counter-container'>
                <p className='count-display'>{count}</p>
                <button className = 'dec' onClick={ decrement}>Decrease</button>
                <button className = 're' onClick={reset}>Reset</button>
                <button className = 'inc' onClick={ increment}>Increase</button>
            </div>
}

export default Counter