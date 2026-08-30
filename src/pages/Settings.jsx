import { useContext } from 'react'
import { ThemeContext } from '../theme/CustomTheme' 
import { useColorScheme } from '@mui/material/styles'

function Settings() {

  const { theme, setTheme } = useContext(ThemeContext)
  const { mode, setMode } = useColorScheme()

  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24 }}>
          <label>
        <input
          type='checkbox'
          checked={theme === 'PINK'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'PINK' : 'GREEN')
          }}
        />
        Use pink mode
      </label>
          <label>
        <input
          type='checkbox'
          checked={mode === 'dark'}
          onChange={(e) => {
            setMode(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </div>
  )
}

export default Settings
