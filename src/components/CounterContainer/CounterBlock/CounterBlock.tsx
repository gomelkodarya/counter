import React from "react";
import s from './CounterBlock.module.css'


type CounterBlockPropsType = {
    value: number | string
    maxValue: number
    error: boolean
    isInitValue: boolean
}

export const CounterBlock = (props: CounterBlockPropsType) => {

    return (
        <>
            <div>{
                props.error
                    ? <div className={s.red_counter}>'Incorrect value!'</div>
                    : props.isInitValue
                        ? <div className={s.counter_block_for_set}>Enter values and press "set"</div>
                        : <div className={props.value === props.maxValue ? s.red_counter : s.counter_block}>{props.value}</div>
            }</div>
        </>
    )
}





