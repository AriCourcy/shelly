import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext, useState, useEffect, type ReactNode } from 'react'
import { useColorScheme, CssVarsProvider } from '@mui/material/styles'

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

function CustomThemeContent({ children }: { children: ReactNode }) {
  const { mode } = useColorScheme()

  const [theme, setTheme] = useState<'GREEN' | 'PINK'>('GREEN')

  useEffect (() => {
    document.documentElement.style.setProperty("--bg", (themes[theme] as any).colorSchemes[mode ?? 'light'].palette.background.default)
    console.log(document.querySelector('meta[name="theme-color"]').content)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

function CustomTheme({ children }: { children: ReactNode }) {
  return (
    <CssVarsProvider defaultMode="light">
      <CustomThemeContent>{children}</CustomThemeContent>
    </CssVarsProvider>
  )
}

export default CustomTheme
