import React, {ChangeEvent} from "react";
import s from './ValueBlock.module.css'

type ValueBlockPropsType = {
    maxValue: number
    startValue: number
    addMaxValue: (value: number) => void
    addStartValue: (value: number) => void
}

export const ValueBlock = (props: ValueBlockPropsType) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.addMaxValue(+e.currentTarget.value)
    }

    const onchangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.addStartValue(+e.currentTarget.value)
    }

    return (
        <div className={s.value_block}>
            <div className={s.value}>
                max value: <input type={"number"} value={props.maxValue} onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.value}>
                start value: <input type={"number"} value={props.startValue} onChange={onchangeStartValueHandler}/>
            </div>
        </div>
    )
}