import React from "react";

type ButtonType = {
    title: string
    callBack: () => void
    disabled?: any
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled}>{props.title}</button>
    )
}