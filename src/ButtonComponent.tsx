import React from "react";

type PropsType = {
    status: number
    resume: () => void
    reset: () => void
    pause:() => void
    start:() => void
}

 export function ButtonComponent(props: PropsType){

    return(
        <div className="btn-box">
            {(props.status===0) ? <button className="stopwatch-btn stopwatch-btn-black" onClick={props.start}>Start</button> : ""}
            {(props.status===1) ?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-black" onClick={props.pause}>Pause</button><button className="stopwatch-btn stopwatch-btn-black" onClick={props.reset}>Reset</button></div> : ""}
            {(props.status===2)?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-black" onClick={props.resume}>Resume</button><button className="stopwatch-btn stopwatch-btn-black" onClick={props.reset}>Reset</button></div> : ""}
        </div>
    );
}

