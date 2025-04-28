import React, { Suspense } from 'react'
import Book from '../Book/Book'

const Books = ({data}) => {
    console.log(data)

  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>Books</h1>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Book data={data}></Book>
      </Suspense>
    </div>
  )
}

export default Books
