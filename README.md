# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. The project was initially seeded with templates to save time by providing a static example of the CSS and HTML markup for the app, but without any of the React code that was needed to complete the project. Here is a link to the starter code (https://github.com/udacity/reactnd-project-myreads-starter)

I added interactivity to the app by refactoring the static code in the templates. Users of the app are able to categorise books by, 'currently reading', 'want to read' and 'read', or remove a book from a shelf. There is also (restricted) search capabilites, users can add a book of their choice to a destination shelf. 

React Router facilitates navigation between the main view and the search view. 

The components are a mix of class and functional components. Hooks are not used in this project as the version of React is < v16.8 and predates the introduction of hooks. This project does not utilise state management, for example, Redux. 

## Testing Locally
    - You can fork or clone this repository to a local directory and test the functionality.
        - `git clone https://github.com/phHank/myReads.git /path/to/local/directory`
        - cd into the project's root directory
        - `npm install`
        - `npm start`

## Backend Server

To simplify the development process, a backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).