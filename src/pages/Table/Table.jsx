import React from 'react'

const Table = ({book}) => {
    console.log(book);

    const {
      image,
      author,
      bookName,
      tags,
      publisher,
      yearOfPublishing,
      totalPages,
      category,
      rating,
    } = book;

  return (
    <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow border border-gray-200 max-w-5xl mb-5 mt-8">
      {/* Book Image */}
      <img
        src={image}
        alt="Book Cover"
        className="w-50 h-50 object-cover rounded"
      />

      {/* Book Details */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{bookName}</h2>
        <p className="text-sm text-gray-600 mb-3">By : {author}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-5 text-sm text-gray-700 mb-3">
          <div className="flex items-center gap-1">
            <span>👥</span>
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📄</span>
            <span>Page: {totalPages}</span>
          </div>
        </div>

        {/* Category, Rating, Button */}
        <div className="flex items-center gap-3">
          <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
            Category: {category}
          </span>
          <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
            Rating: {rating}
          </span>
          <button className="ml-auto px-4 py-1.5 text-white bg-green-500 hover:bg-green-600 rounded-full text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table
