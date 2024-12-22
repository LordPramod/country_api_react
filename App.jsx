import React from 'react'
import Header from './components/Header'
import './App.css'
import Search from './components/Search'
import SelectMenu from './components/SelectMenu'
import CountiresList from './components/CountiresList'
const App = () => {
  return (
    <>
    <Header />
    <main>
    <div className="search-filter-container">
    <Search/>
    <SelectMenu />
    </div>
    <CountiresList />
    </main>
   
    </>
  )
}

export default App