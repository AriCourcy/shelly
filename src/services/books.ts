import { db, type Book } from '../db'

type OpenLibrarySearchDoc = {
  title?: string
  author_name?: string[]
  isbn?: string[]
  cover_i?: number
  number_of_pages_median?: number
  first_publish_year?: number
  publisher?: string[]
  key?: string
  edition_key?: string[]
  ebook_access?: string
}


export async function searchBooks(query: string) {
    const url = new URL("https://openlibrary.org/search.json")
    url.searchParams.set("q", query);  
    url.searchParams.set("limit", "10");  
    url.searchParams.set("fields", [ "title", "author_name", "isbn", "cover_i", "number_of_pages_median", "first_publish_year", "publisher", "key", "edition_key", "first_sentence"].join(","))

  const response = await fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))

  const books: Book[] = response.docs.map(mapOpenLibraryBook)

  return books
}

function mapOpenLibraryBook(doc: OpenLibrarySearchDoc): Book {
  const workId = doc.key?.replace("/works/", "")
  const editionId = doc.edition_key?.[0]

  return {    
    isbn: doc.isbn?.[0],
    title: doc.title ?? "Untitled",
    coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : undefined,
    pages: doc.number_of_pages_median,
    author: doc.author_name?.join(", "),
    publicationDate: doc.first_publish_year ? new Date(`${doc.first_publish_year}-01-01`) : undefined,
    publishingHouse: doc.publisher?.[0],
    openLibraryWorkId: workId,
    openLibraryEditionId: editionId,
  }

}

export async function saveBook(
  id: string,
  title: string,
  isbn?: string,
  pages?: number,
  type?: string,
  author?: string,
  publicationDate?: Date,
  publishingHouse?: string,
  openLibraryWorkId?: string,
  openLibraryEditionId?: string,
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

export async function getBook(id: string) {
  return db.books.get(id)
}
