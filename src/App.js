import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import './App.css'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class App extends React.Component {
  state = {
    books: [],
    searchResults: [],
    query: ''
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(booksInDB => this.setState({books: booksInDB}) )
  }
  
  changeBookShelf = (newShelf, bookID) => {
    const allBooks = [...this.state.books, ...this.state.searchResults]
    const [updateBook] = allBooks.filter(book => book.id === bookID)
    updateBook.shelf = newShelf
    this.setState(() => ({
      books: allBooks.filter(book => book.id !== updateBook.id).concat([updateBook])
    }))
    
    BooksAPI.update(updateBook, newShelf)
      .then(() => {
        this.componentDidMount()
      })
      .catch(() => {
        this.setState(() => ({error: true}))
      })
  }

  onSearch = searchTerm => {
    this.setState(() => ({
        query: searchTerm
    }))

    // only performs search if query length is > 0 
    if (this.state.query.length > 0) {
      BooksAPI.search(this.state.query)
        .then(books => this.setState(() => ({searchResults: books})))
    }
  }
  
  render() {
    return (
      <div className="app">
        {this.state.error && <h4>Error: Book shelf could not be moved. Server responded with error.</h4>}
        
        <Route exact path='/' render={() => (
            <ListBooks 
              books={this.state.books} 
              changeShelf={this.changeBookShelf} 
            />
          )}
        />

        <Route path='/search' render={() =>(
            <SearchBooks 
              changeShelf={this.changeBookShelf}
              results={this.state.searchResults}
              handleSearch={this.onSearch}
              query={this.state.query}
            />
          )}
        />

      </div>
    )
  }
}

export default App
