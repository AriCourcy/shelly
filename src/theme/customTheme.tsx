import { createTheme, ThemeProvider } from "@mui/material/styles"
import { createContext, useState, type ReactNode } from "react"

export const themes = {
  GREEN: createTheme({
    palette: {
      primary: {
        main: "#a6ca93",
      },
    },
  }),

  PINK: createTheme({
    palette: {
      primary: {
        main: "#d822ba",
      },
    },
  }),
}

export const ThemeContext = createContext<any>(null)

function CustomTheme({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"GREEN" | "PINK">("GREEN")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomTheme
