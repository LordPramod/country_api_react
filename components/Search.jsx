import React from 'react'
import App from '../App'
import { useState } from 'react-dom'

function Search({query, setQuery}) {
  return (
    <>
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={(e) => 
        // console.log(e.target.value)
        setQuery(e.target.value)
        } type="text" placeholder="Search for a country..." />
    </div>
    </>
  )
}

export default Search