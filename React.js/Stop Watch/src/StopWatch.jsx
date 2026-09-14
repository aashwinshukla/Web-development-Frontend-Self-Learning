import { useState, useEffect, useRef } from "react"

function StopWatch(){
    
    const [isRunning, setIsRunning] = useState(false);
    const [elapseTime, setElapsetime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsetime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])
    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapseTime;
    }

    function stop(){
        setIsRunning(false);

    }

    function reset(){
        setElapsetime(0);
        setIsRunning(false);
    }

    function formateTime(){

        

        return `00:00:00`;
    }


    return( <div className="stopwatch">
                <div className="display">{formateTime()}</div>
                <div className="constrols">
                    <button onClick={start} className="start-button">Start</button>
                    <button onClick={stop} className="stop-button">Stop</button>
                    <button onClick={reset} className="reset-button">Reset</button>
                </div>
            </div>);
}

export default StopWatch