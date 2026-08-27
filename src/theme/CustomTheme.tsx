import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext, useState, type ReactNode } from 'react'

export const themes = {
  GREEN: createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#a6ca93',
          },
          background: { 
            default: '#ffffff',
            paper: '#ffffff',      
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#a6ca93',
          },
          background: { 
            default: '#000000',
            paper: '#000000',      
          },
        },
      },
    },
  }),

  PINK: createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#d822ba',
          },
          background: { 
            default: '#ffffff',
            paper: '#ffffff',      
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#d822ba',
          },
          background: { 
            default: '#000000',
            paper: '#000000',      
          },
        },
      },
    },
  }),
}

export const ThemeContext = createContext<any>(null)

function CustomTheme({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'GREEN' | 'PINK'>('GREEN')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomTheme
