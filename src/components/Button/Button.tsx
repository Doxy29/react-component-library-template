import React from "react"
import {ButtonProps} from "../../index.ts"

export const Button: React.FC<ButtonProps> = ({label, myVar="1"})=>{
    return(
        <button>{label} {myVar}</button>
    )
}