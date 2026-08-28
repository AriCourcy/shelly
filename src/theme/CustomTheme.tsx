import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext, useState, useEffect, type ReactNode } from 'react'
import { useColorScheme, CssVarsProvider } from '@mui/material/styles'
import { saveTheme, getTheme, saveMode, getMode } from '../services/preferences'

export type Theme = Extract<'GREEN' | 'PINK', string>
export type Mode = 'light' | 'dark'

const DEFAULT = 'GREEN'
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
  const { mode, setMode } = useColorScheme()

  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    async function initializeColor() {
      setTheme(await getTheme())
      setMode(await getMode())
    }

    initializeColor()
  }, [])

  useEffect(() => {
    async function setColor() {
      if (!theme) return

      await saveTheme(theme as Theme)
      await saveMode(mode as Mode)

      const color = (themes[theme] as any).colorSchemes[mode ?? "light"].palette.background.default
      document.documentElement.style.setProperty("--bg", color)

      const metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null

      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", color)
      }
    }

    setColor()
  }, [theme, mode])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme?? DEFAULT]}>
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
