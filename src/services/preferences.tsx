import { db } from '../db'
import { type Theme, type Mode } from '../theme/CustomTheme'

export async function saveTheme(theme: string) {
  await db.preferences.update('theme', { 'value': theme })
}

export async function getTheme():Promise<Theme> {
  const theme = await db.preferences.get('theme')
  return theme!.value as Theme
}

export async function saveMode(mode: string) {
  await db.preferences.update('mode', { 'value': mode })
}

export async function getMode():Promise<Mode> {
  const mode = await db.preferences.get('mode')
  return mode!.value as Mode
}
