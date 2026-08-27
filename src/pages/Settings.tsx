import { useContext } from 'react'
import { ThemeContext } from '../theme/CustomTheme' 

function Settings() {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24 }}>
          <label>
        <input
          type="checkbox"
          checked={theme === 'PINK'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'PINK' : 'GREEN')
          }}
        />
        Use pink mode
      </label>
    </div>
  )
}

export default Settings
