import React from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchBooks = ({handleSearch, changeShelf, query, results}) => {
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to='/'>Close</Link>
      <div className="search-books-input-wrapper">
        <input 
          type="text" 
          placeholder="Search by title or author"
          onChange={ ({target}) => handleSearch(target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      
      {query !== "" && (
        <BookList 
          books={ !results ? undefined : results }
          changeShelf={changeShelf}
          query={query} 
        />  
      )}

    </div>
  </div>
  )
}

SearchBooks.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  results: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  changeShelf: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default SearchBooks