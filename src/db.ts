import Dexie, { type EntityTable } from 'dexie'

export interface Book {
  id: string
  isbn?: string
  title: string
  url?: string
  pages?: number
  type?: string
  description?: string
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

const db = new Dexie('ShellyDatabase') as Dexie & {
  books: EntityTable<Book, 'id'>
  bookCovers: EntityTable<BookCover, 'bookId'>
}

db.version(1).stores({
  books: 'id, isbn, title, author, publicationDate',
  bookCovers: 'bookId, sourceId',
})

export { db }
