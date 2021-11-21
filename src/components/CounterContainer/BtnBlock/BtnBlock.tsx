import React from "react";
import s from './BtnBlock.module.css'
import {Button} from "../../Button";


type BtnBlockPropsType = {
    value: number
    maxValue: number
    startValue: number
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
            <Button title={'inc'} callBack={incValueHandler}/>
            <Button title={'reset'} callBack={resetValueHandler}/>
        </div>
    )
}
