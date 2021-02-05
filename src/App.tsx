import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {DisplayComponent} from "./DisplayComponent";



export type TimeType = {
    s: number
    m: number
    h: number
}

function App() {
    const [time, setTime] = useState<TimeType>({
            s: 0,
            m: 0,
            h: 0
        }
    );
    const [spacing, setSpacing] = useState<NodeJS.Timeout>({} as NodeJS.Timeout);    //<NodeJS.Timeout>({} as NodeJS.Timeout);
    const [status, setStatus] = useState<0 | 1 | 2>(0);

    const start = () => {
        run();
        setStatus(1);
        setSpacing(setInterval(run, 1000))

    }

    let updateS = time.s, updateM = time.m, updateH = time.h;

    const run = () => {
        if (updateM === 60) {
            updateH++;
            updateM = 0;
        }
        if (updateS === 60) {
            updateM++;
            updateS = 0;
        }
        updateS++;
        return setTime({s: updateS, m: updateM, h: updateH});
    };

    const pause = () => {
        clearInterval(spacing);
        setStatus(2);
    }

    const reset = () => {
        clearInterval(spacing);
        setStatus(0);
        setTime({s: 0, m: 0, h: 0});
    }

    const resume = () => start();
    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayComponent time={time}/>
                    <ButtonComponent status={status} resume={resume} reset={reset} pause={pause} start={start}/>
                </div>
            </div>
        </div>
    );
}

export default App;

