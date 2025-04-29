import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { setItemsData } from '../../utils/AddToData';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const singleData = data.find((book) => book.bookId === parseInt(id));
    const {
      author,
      image,
      review,
      bookName,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
    } = singleData;


    const handleBookStorage = (id) => {
      setItemsData(id);
    }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Book Image */}
        <div className="w-[500px] h-[600px] md:w-1/2 flex justify-center">
          <img src={image} alt="Book Cover" className="rounded-lg shadow-md" />
        </div>

        {/* Book Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{bookName}</h1>
          <p className="text-gray-600 mb-4">By : {author}</p>

          <p className="font-semibold text-gray-700 mb-4">Fiction</p>

          <div className="mb-6">
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              <span className="font-semibold">Review :</span> {review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            tag:
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              );
            })}
          </div>

          {/* Book Info */}
          <div className="space-y-2 mb-8 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Number of Pages:</span>{" "}
              {totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher: {publisher}</span><br />
              <span className="font-bold">J.B Lippincott & Co.</span>
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span>{yearOfPublishing} 
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button onClick={() => handleBookStorage(id)} className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
              Mar as Read
            </button>
            <button className="px-6 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails
