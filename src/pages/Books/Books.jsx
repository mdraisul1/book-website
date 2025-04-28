import React, { Suspense } from 'react'
import Book from '../Book/Book'

const Books = ({data}) => {

  return (
    <div className="py-12">
      <h1 className="text-center text-3xl font-bold mb-10">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default Books
