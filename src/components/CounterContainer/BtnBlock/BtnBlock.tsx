import React, {useState} from "react";
import s from './BtnBlock.module.css'

type BtnBlockPropsType = {
    value:number
    incValue: (value:number) => void
    resetValue: () => void
}

export const BtnBlock = (props: BtnBlockPropsType) => {
    const incValueHandler = () => {
        props.incValue(props.value)
    }

    const resetValueHandler = () => {
        props.resetValue()
    }

    return (
        <div className={s.btn_block}>
            <button
                className={s.button}
                disabled={props.value === 5}
                onClick={incValueHandler}
            >
                inc
            </button>
            <button
                disabled={props.value === 0 }
                onClick={resetValueHandler}
            >
                reset
            </button>
        </div>
    )
}
