import { createTheme } from "@mui/material/styles";
import {orange} from "@mui/material/colors";

export  const globalThemePalette = createTheme({
    palette: {
        primary: orange,
    },
})

export const defaultButtonProps = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "medium"
            },
            styleOverrides:{
                root: {
                    padding: '8px',
                    minWidth: '100px'
                },
            }
        }
    }
},globalThemePalette);