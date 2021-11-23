import React, {ChangeEvent} from "react";

type InputType = {
    type: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

export const Input = (props: InputType) => {

    return (
        <input type={props.type}
               value={props.value}
               onChange={props.onChange}
               className={props.className}/>
    )
}