import React from "react";
import s from './ValueContainer.module.css'
import {ValueBlock} from "./ValueBlock/ValueBlock";
import {SetBlock} from "./SetBlock/SetBlock";



export const ValueContainer = () => {
    return (
        <div className={s.counter_container}>
            <ValueBlock />
            <SetBlock />
        </div>
    )
}
