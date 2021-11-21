import React, {useState} from "react";
import s from './SetBlock.module.css'
import {Button} from "../../Button";

type SetBlockPropsType = {
    value: number
    startValue: number
    maxValue: number
    incValue: (value:number) => void
    error: string | null
}

export const SetBlock = (props: SetBlockPropsType) => {

    const onClickSetHandler = () => {
        let value = Number(localStorage.getItem('startValue'))
        props.incValue(value-1)
    }

    return (
        <div className={s.set_block}>
            <Button title={'set'} callBack={onClickSetHandler}/>
        </div>
    )
}
