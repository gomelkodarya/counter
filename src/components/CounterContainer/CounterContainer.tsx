import React from "react";
import s from './CounterContainer.module.css'
import {CounterBlock} from "./CounterBlock/CounterBlock";
import {BtnBlock} from "./BtnBlock/BtnBlock";

type CounterContainerPropsType = {
    value: number
    incValue: (value: number) => void
    resetValue: () => void
}

export const CounterContainer = (props: CounterContainerPropsType) => {
    return (
        <div className={s.counter_container}>
            <CounterBlock value={props.value}/>
            <BtnBlock
                value={props.value}
                incValue={props.incValue}
                resetValue={props.resetValue}
            />
        </div>
    )
}
