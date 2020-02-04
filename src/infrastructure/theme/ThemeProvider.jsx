import * as React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F4F4',
    },
    primary: {
      main: '#282c34',
      contrastText: '#fff',
    },
    secondary: { main: '#d2c5ee' },
  },
})

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
