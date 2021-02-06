import React from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = ({book, changeShelf, toggleOpacity}) => {
    return(
        <div className="book-shelf-changer">
            <select 
                defaultValue={book.shelf ? book.shelf : 'none'} 
                onChange={({target}) => {
                    const { value } = target

                    changeShelf(value, book.id)

                    value !== 'none'
                      ? toggleOpacity()
                      : toggleOpacity(1)
                    }}
                >
                <option disabled>Move to...</option> 
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read" >Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ShelfChanger