import React from "react";
import s from './ValueContainer.module.css'
import {ValueBlock} from "./ValueBlock/ValueBlock";
import {SetBlock} from "./SetBlock/SetBlock";

type ValueContainerPropsType = {
    maxValue: number
    startValue: number
    value: number
    incValue: (value:number) => void
    addMaxValue: (value: number) => void
    addStartValue: (value: number) => void
    error: string | null
}

export const ValueContainer = (props: ValueContainerPropsType) => {
    return (
        <div className={s.counter_container}>
            <ValueBlock
                maxValue={props.maxValue}
                startValue={props.startValue}
                addMaxValue={props.addMaxValue}
                addStartValue={props.addStartValue}
                error={props.error}
            />
            <SetBlock
                value={props.value}
                maxValue={props.maxValue}
                startValue={props.startValue}
                incValue={props.incValue}
                error={props.error}
            />
        </div>
    )
}
