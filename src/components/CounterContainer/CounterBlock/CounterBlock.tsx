import React from "react";
import s from './CounterBlock.module.css'
import {start} from "repl";

type CounterBlockPropsType = {
    value: number | string
    maxValue: number
    error: string | null
}

export const CounterBlock = (props: CounterBlockPropsType) => {
    return props.error
        ? <div className={s.red_counter}>{props.error}</div>
        : <div className={props.value === props.maxValue ? s.red_counter : s.counter_block}>{props.value}</div>}
        // <div
        //     className={props.value === props.maxValue ? s.red_counter : s.counter_block}>
        //     {props.value}
        //     {props.error && <div>props.error</div>}
        //
        // </div>
//     )
// }
