import React from "react";

type ButtonType = {
    title: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    )
}