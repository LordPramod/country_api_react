import React from 'react'

function CountryCard({countryName, flag, population, region, capital}) {

  return (
    <>
        <a className="country-card" href={'/'}>
      <img src={flag} alt={countryName} />
      <div className="card-text">
        <h3 className="card-title">{countryName}</h3>
        <p>
          <b>Population: </b> {population}
          
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
    </>
  )
}

export default CountryCard