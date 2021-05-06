import React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import './App.css'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import NotFound from './components/NotFound'

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

  onSearch = async searchTerm => {
    this.setState(() => ({
        query: searchTerm
    }))

    // only performs search if query length is > 0 
    if (this.state.query.length > 0) {
      const resultBooks = await BooksAPI.search(this.state.query)
      
      const bookIds = this.state.books.map(book => book.id)

      if (resultBooks.error) {
        this.setState(() => ({searchResults: resultBooks}))
      } else {
        // merge listed books with search results
        const mergedResults = resultBooks.map(book => (
          bookIds.includes(book.id) 
            ? this.state.books.filter(bk => bk.id === book.id)[0]
            : book
        ))
        
        this.setState(() => ({searchResults: mergedResults}))
      }
    }
  }
  
  render() {
    return (
      <div className="app">
        {this.state.error && <h4>Error: Book shelf could not be moved. Server responded with error.</h4>}
        
        <Switch>
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

          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
