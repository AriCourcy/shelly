import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../theme/CustomTheme' 
import { useColorScheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { save, get } from '../services/preferences'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

function Settings() {

  const { t, i18n } = useTranslation()

  useEffect(() => {
    async function init() {
      i18n.changeLanguage(await get('language'))
    }

    init()
  }, [])

  const { tint, setTint } = useContext(ThemeContext)
  const { mode, setMode } = useColorScheme()

  const changeLanguage = (event) => {
    save('language', event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24 }}>
          <label>
        <input
          type='checkbox'
          checked={tint === 'PINK'}
          onChange={(e) => {
            setTint(e.target.checked ? 'PINK' : 'GREEN')
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

        <Select
          labelId='select-language'
          id='select-language'
          value={i18n.language}
          label={t('language')}
          onChange={changeLanguage}
        >
          <MenuItem value={'fr'}>{t('french')}</MenuItem>
          <MenuItem value={'en'}>{t('english')}</MenuItem>
        </Select>

        <p>{t('hi')}</p>
    </div>
  )
}

export default Settings
