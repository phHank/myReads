import React from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger'
import { placeholder as coverPlaceholder } from '../icons/placeholder'

class BookItem extends React.Component {
    state = {
        opacity: 1
    }

    toggleOpacity = (opacity = 0.5) => {
        this.setState(() => ({opacity}))
    }

    render() {
        return (
            <li style={{opacity: this.state.opacity }}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${
                            this.props.book.imageLinks
                            ? this.props.book.imageLinks.smallThumbnail
                            : coverPlaceholder})`}}>
                        </div>
                        <ShelfChanger 
                            book={this.props.book} 
                            changeShelf={this.props.changeShelf} 
                            toggleOpacity={this.toggleOpacity}
                        />
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">
                        By: {' '}
                        { this.props.book.authors === undefined
                            ? this.props.book.authors
                            : this.props.book.authors.join(' & ') 
                        }
                    </div>
                </div>
            </li>
        )
    }
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookItem

