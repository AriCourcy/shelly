import Dexie from 'dexie'

const db = new Dexie('ShellyDatabase')

db.version(1).stores({
  books: 'id, isbn, title, author, publicationDate',
  bookCovers: 'bookId, sourceId',
  preferences: 'id, value',
})

export async function populate() {
  await db.preferences.add({
    id: "tint",
    value: "GREEN"
  })

  await db.preferences.add({
    id: "mode",
    value: "light",
  })

  await db.preferences.add({
    id: "language",
    value: "en",
  })
}

db.on('populate', populate)

export { db }
