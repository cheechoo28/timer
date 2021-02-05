import React from "react";
import {TimeType} from "./App";

type PropsType = {
    time: TimeType
}
export function DisplayComponent(props: PropsType){
    return(
        <div>
            <span>{(props.time.h>=10) ? props.time.h : "0" + props.time.h}</span>
            :
            <span>{(props.time.m>=10) ? props.time.m: "0" + props.time.m}</span>
            :
            <span>{(props.time.s>=10) ? props.time.s : "0" + props.time.s}</span>
        </div>
    );
}
