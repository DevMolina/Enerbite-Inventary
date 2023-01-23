import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#53358e'
        },
        secondary: {
            main: '#ed7004'
        },
        error: {
            main: red.A400
        }
    }
})