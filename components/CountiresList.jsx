import React from 'react'
import countriesdata from '../data.js'
import CountryCard from './CountryCard.jsx';

function CountiresList() {
  const array = countriesdata.map((country)=>{
    console.log(country)

    return <CountryCard countryName ={country.name.common} flag= {country.flags.svg} population= {country.population} capital = {country.capital} region = {country.region} />
  })
  return (
    <>
    <div className="countries-container">
    {array}
    </div>
    </>
  )
}

export default CountiresList