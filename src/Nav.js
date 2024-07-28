import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className="Nav">
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search Posts</label>
            <input
                id="search"
                type="text"
                placeholder='Searh Posts'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
        </form>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/post">Post</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav