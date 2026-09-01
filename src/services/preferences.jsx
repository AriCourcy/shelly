import { db } from '../db'

export async function saveTheme(theme) {
  await db.preferences.update('theme', { 'value': theme })
}

export async function getTheme() {
  const theme = await db.preferences.get('theme')
  return theme.value
}

export async function saveMode(mode) {
  await db.preferences.update('mode', { 'value': mode })
}

export async function getMode() {
  const mode = await db.preferences.get('mode')
  return mode.value
}

export async function saveLanguage(language) {
  await db.preferences.update('language', { 'value': language })
}

export async function getLanguage() {
  const language = await db.preferences.get('language')
  return language.value
}
