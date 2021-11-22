import React from "react";
import s from './CounterContainer.module.css'
import {CounterBlock} from "./CounterBlock/CounterBlock";
import {Button} from "../Button";

type CounterContainerPropsType = {
    value: number
    maxValue: number
    startValue: number
    incValue: (value: number) => void
    resetValue: () => void
    errorMaxValue: string | null
    errorStartValue: string | null
}

export const CounterContainer = (props: CounterContainerPropsType) => {
    const incValueHandler = () => {
        props.incValue(props.value)
    }

    const resetValueHandler = () => {
        props.resetValue()
    }
    return (
        <div className={s.counter_container}>
            <CounterBlock
                value={props.value}
                maxValue={props.maxValue}
                errorMaxValue={props.errorMaxValue}
                errorStartValue={props.errorStartValue}
            />
            <div className={s.btn_block}>
                <Button title={'inc'} callBack={incValueHandler} disabled={props.value===props.maxValue}/>
                <Button title={'reset'} callBack={resetValueHandler}/>
            </div>

        </div>
    )
}
