import React from "react";
import s from './ValueContainer.module.css'
import {ValueBlock} from "./ValueBlock/ValueBlock";
import {SetBlock} from "./SetBlock/SetBlock";

type ValueContainerPropsType = {
    maxValue: number
    startValue: number
    value: number
    incValue: (value:number) => void
    resetValue: () => void
    addMaxValue: (value: number) => void
    addStartValue: (value: number) => void
}

export const ValueContainer = (props: ValueContainerPropsType) => {
    return (
        <div className={s.counter_container}>
            <ValueBlock
                maxValue={props.maxValue}
                startValue={props.startValue}
                addMaxValue={props.addMaxValue}
                addStartValue={props.addStartValue} />
            <SetBlock
                value={props.value}
                incValue={props.incValue}
                resetValue={props.resetValue}/>
        </div>
    )
}
