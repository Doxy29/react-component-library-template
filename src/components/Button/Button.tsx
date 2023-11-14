import React, {memo, useMemo} from "react"
import {ButtonProps} from "../../index.ts"
import {Button as MuiButton} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {defaultButtonProps} from "../../muiDefaults";


const Button: React.FC<ButtonProps> = (
    {
        children,
        ...props
    }
)=>{
    
    return(
        <ThemeProvider theme={defaultButtonProps}>
            <MuiButton  {...props} >
                {children}
            </MuiButton>
        </ThemeProvider>
    )
}

export default memo(Button)