import React from "react";
import s from './CounterBlock.module.css'


type CounterBlockPropsType = {
    value: number | string
    maxValue: number
    errorMaxValue: string | null
    errorStartValue: string | null
}

export const CounterBlock = (props: CounterBlockPropsType) => {
    return (
            <div
                className={props.value === props.maxValue ? s.red_counter : s.counter_block}>
                {props.value}
            </div>
    )
}





