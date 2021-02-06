import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

const Bookshelf = ({shelfTitle, books, changeShelf}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        
        <BookList 
          books={books}
          changeShelf={changeShelf} 
        />
      
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelfTitle: PropTypes.string,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}


export default Bookshelf