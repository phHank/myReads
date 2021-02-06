import React from 'react' 
import Header from './Header'
import Bookshelf from './Bookshelf'
import SearchButton from './SearchButton'
import PropTypes from 'prop-types'

const ListBooks = ({books, changeShelf}) => {
    return (
        <div className="list-books">
            <Header /> 
            <div className="list-books-content">
                
                <Bookshelf 
                  shelfTitle={'Currently Reading'} 
                  books={books.filter(book => book.shelf === 'currentlyReading')}
                  changeShelf={changeShelf}
                />
    
                <Bookshelf 
                  shelfTitle={'Want to Read'} 
                  books={books.filter(book => book.shelf === 'wantToRead')}
                  changeShelf={changeShelf}
                />
                
                <Bookshelf 
                  shelfTitle={'Read'} 
                  books={books.filter(book => book.shelf === 'read')}
                  changeShelf={changeShelf}
                />
    
            </div>
            <SearchButton />
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}


export default ListBooks