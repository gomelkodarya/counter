import React from "react";
import s from './CounterContainer.module.css'
import {CounterBlock} from "./CounterBlock/CounterBlock";
import {BtnBlock} from "./BtnBlock/BtnBlock";

type CounterContainerPropsType = {
    value: number
    maxValue: number
    startValue: number
    incValue: (value: number) => void
    resetValue: () => void
    error: string | null
}

export const CounterContainer = (props: CounterContainerPropsType) => {
    return (
        <div className={s.counter_container}>
            <CounterBlock
                value={props.value}
                maxValue={props.maxValue}
                error={props.error}
            />
            <BtnBlock
                value={props.value}
                maxValue={props.maxValue}
                startValue={props.startValue}
                incValue={props.incValue}
                resetValue={props.resetValue}
            />
        </div>
    )
}
