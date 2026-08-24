import { db } from '../db'

export async function saveBookCover(
  bookId: string,
  coverUrl: string,
  sourceId?: string,
) {
  const response = await fetch(coverUrl)

  if (!response.ok) {
    throw new Error(`Failed to download cover: ${response.status}`)
  }

  const blob = await response.blob()

  await db.bookCovers.put({
    bookId,
    blob,
    source: 'openlibrary',
    sourceId,
  })
}

export async function getBookCover(bookId: string) {
  return db.bookCovers.get(bookId)
}
