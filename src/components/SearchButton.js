import React from 'react'
import { Link } from 'react-router-dom'

const SearchButton = () => (
    <Link className="open-search" to='/search'>
        <button>Add a Book</button>
    </Link>
)

export default SearchButton