import React from "react";
import s from './CounterBlock.module.css'

type CounterBlockPropsType = {
    value: number
    maxValue: number
}

export const CounterBlock = (props: CounterBlockPropsType) => (
    <div className={props.value === props.maxValue ? s.red_counter : s.counter_block}>
        {props.value}
    </div>
)
