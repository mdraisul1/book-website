import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const singleData = data.find((book) => book.bookId === parseInt(id));
    const {author} = singleData;
  return (
    <div>
      <h1>{author}</h1>
    </div>
  )
}

export default BookDetails
