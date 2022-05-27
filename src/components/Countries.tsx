import React, { FC } from 'react';
import { RootObject } from '../types/data';

interface CountriesProps {
    countries:Array<RootObject>,
    loading: boolean
}

const Countries:FC<CountriesProps> = ({countries, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>   
    }

    console.log(countries)
    const viewCountries = countries.map((country)  => (
            <li 
                className='list-group-item'
                key={country.area}
            >
                {country.name.official}
                <img src={country.flags.png} alt="flag" />
            </li>
        ))

  return (
    <div>
       <ul className='list-group'>
               {viewCountries}
            </ul>
     </div>
  )
}

export default Countries