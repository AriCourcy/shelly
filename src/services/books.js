import { db } from '../db'

export async function searchBooks(query) {
    const url = new URL("https://openlibrary.org/search.json")
    url.searchParams.set("q", query);  
    url.searchParams.set("limit", "10");  
    url.searchParams.set("fields", [ "title", "author_name", "isbn", "cover_i", "number_of_pages_median", "first_publish_year", "publisher", "key", "edition_key", "first_sentence"].join(","))

  const response = await fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))

  const books = response.docs.map(mapOpenLibraryBook)

  return books
}

function mapOpenLibraryBook(doc) {
  const workId = doc.key?.replace("/works/", "")
  const editionId = doc.edition_key?.[0]

  return {    
    isbn: doc.isbn?.[0],
    title: doc.title ?? "Untitled",
    coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-S.jpg` : undefined,
    pages: doc.number_of_pages_median,
    author: doc.author_name?.join(", "),
    publicationDate: doc.first_publish_year ? new Date(`${doc.first_publish_year}-01-01`) : undefined,
    publishingHouse: doc.publisher?.[0],
    openLibraryWorkId: workId,
    openLibraryEditionId: editionId,
  }

}

export async function saveBook(
  id,
  title,
  isbn,
  pages,
  type,
  author,
  publicationDate,
  publishingHouse,
  openLibraryWorkId,
  openLibraryEditionId,
) {

  await db.books.put({
  id,
  isbn,
  title,
  pages,
  type,
  author,
  publicationDate,
  publishingHouse,
  openLibraryWorkId,
  openLibraryEditionId,
  })
}

export async function getBook(id) {
  return db.books.get(id)
}
