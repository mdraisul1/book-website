import React from 'react'
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  console.log(singleBook);
 
  const { author, image, bookName,bookId,tags } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-300">
        <div className="flex justify-center bg-gray-300 p-3 rounded-lg">
          <img src={image} alt="Book Cover" className="h-40 object-contain" />
        </div>

        <div className="flex gap-2 mt-4">
          {tags.map((tag,index) => (
            <span key={index} className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mt-3 text-lg font-semibold text-gray-800">{bookName}</h2>

        <p className="text-gray-500 text-sm mt-1">By : {author}</p>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <span>Fiction</span>
          <div className="flex items-center gap-1">
            <span>5.00</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.39 2.464a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.39-2.464a1 1 0 00-1.176 0l-3.39 2.464c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.174 9.382c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.955z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book
