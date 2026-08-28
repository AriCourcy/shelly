import Dexie, { type EntityTable } from 'dexie'

export interface Book {
  id?: string
  isbn?: string
  title: string
  coverUrl?: string
  pages?: number
  type?: string
  author?: string
  publicationDate?: Date
  publishingHouse?: string
  openLibraryWorkId?: string
  openLibraryEditionId?: string
}

export interface BookCover {
  bookId: string
  blob: Blob
  source: 'openlibrary'
  sourceId?: string
}

export interface Preference {
  id: string
  value: string
}

const db = new Dexie('ShellyDatabase') as Dexie & {
  books: EntityTable<Book, 'id'>
  bookCovers: EntityTable<BookCover, 'bookId'>
  preferences: EntityTable<Preference, 'id'>
}

db.version(1).stores({
  books: 'id, isbn, title, author, publicationDate',
  bookCovers: 'bookId, sourceId',
  preferences: 'id, value',
})

export async function populate() {
  await db.preferences.add({
    id: "theme",
    value: "GREEN"
  })

  await db.preferences.add({
    id: "mode",
    value: "light"
  })
}

db.on('populate', populate)

export { db }
