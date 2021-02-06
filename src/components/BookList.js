import React from 'react'

import BookItem from './BookItem'
import PropTypes from 'prop-types'

const BookList = ({books, changeShelf}) => {
    return (
    <ol className="books-grid">
        {books.error 
          ? <h4>No Results</h4>
          : books.map(book => (
                <BookItem 
                  key={book.id} 
                  book={book} 
                  changeShelf={changeShelf} 
                />
        ))}
    </ol>
    )
}

BookList.propTypes = {
    books: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object
    ]),
    changeShelf: PropTypes.func.isRequired,
}

export default BookList