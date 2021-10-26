import React from "react";
import s from './SetBlock.module.css'

type SetBlockPropsType = {
    value: number
    incValue: (value:number) => void
    resetValue: () => void
}

export const SetBlock = (props: SetBlockPropsType) => {
    const onClickSetHandler = () => {
        let value = Number(localStorage.getItem('startValue'))
        props.incValue(value-1)
    }

    return (
        <div className={s.set_block}>
            <button onClick={onClickSetHandler}>
                set
            </button>
        </div>
    )
}
