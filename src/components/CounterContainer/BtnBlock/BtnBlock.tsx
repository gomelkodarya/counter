import React from "react";
import s from './BtnBlock.module.css'


type BtnBlockPropsType = {
    value:number
    maxValue: number
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
            {/*<Button title={'inc'} callBack={incValueHandler}/>*/}
            {/*<Button title={'reset'} callBack={resetValueHandler}/>*/}

            <button
                className={s.button}
                disabled={props.value === props.maxValue}
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
