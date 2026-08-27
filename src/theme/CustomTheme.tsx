import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext, useState, useEffect, type ReactNode } from 'react'
import { useColorScheme } from '@mui/material/styles'

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
  const { mode } = useColorScheme()

  const [theme, setTheme] = useState<'GREEN' | 'PINK'>('GREEN')

  useEffect (() => {
    debugger
    document.documentElement.style.setProperty("--bg", themes[theme].colorSchemes[mode ?? 'light'].palette.background.default)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomTheme
