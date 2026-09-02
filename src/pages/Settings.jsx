import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../theme/CustomTheme' 
import { useColorScheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { save, get } from '../services/preferences'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import SunnyIcon from '@mui/icons-material/Sunny'
import BedtimeIcon from '@mui/icons-material/Bedtime'

function Settings() {

  const { t, i18n } = useTranslation()
  const { tint, setTint } = useContext(ThemeContext)
  const { mode, setMode } = useColorScheme()

  useEffect(() => {
    async function init() {
      i18n.changeLanguage(await get('language'))
      setTint(await get('tint'))
      setMode(await get('mode'))
    }

    init()
  }, [])

  const changeTint = (event) => {
    setTint(event.target.value)
  }

  const changeMode = () => {
    setMode(mode == 'dark' ? 'light' : 'dark')
  }

  const changeLanguage = (event) => {
    save('language', event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24, gap: 16 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        <Select
          labelId='select-tint'
          id='select-tint'
          value={tint ?? 'GREEN'}
          onChange={changeTint}
          style = {{ flexGrow: 1 }}
        >
          <MenuItem value={'PINK'}>{t('pink')}</MenuItem>
          <MenuItem value={'GREEN'}>{t('green')}</MenuItem>
        </Select>

        <IconButton aria-label='mode' onClick={changeMode} sx={{ padding: 0 }} >
            {
              mode == 'dark' ?
                <BedtimeIcon sx={{ fontSize: 38, color: 'white' }} />
              :
                <SunnyIcon sx={{ fontSize: 38, color: 'black' }} />
            }
        </IconButton>
      </div>

        <Select
          labelId='select-language'
          id='select-language'
          value={i18n.language}
          onChange={changeLanguage}
        >
          <MenuItem value={'fr'}>{t('french')}</MenuItem>
          <MenuItem value={'en'}>{t('english')}</MenuItem>
        </Select>

    </div>
  )
}

export default Settings
