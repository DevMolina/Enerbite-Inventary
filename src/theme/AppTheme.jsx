import { CssBaseline, ThemeProvider } from '@mui/material'
// import { ThemeProvider } from 'styled-components'
import { colorTheme } from './'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
