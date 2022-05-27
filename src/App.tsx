import axios from 'axios'
import React, { useEffect, useState } from 'react';
import  Paginations  from './components/Paginations';
import './App.css'
import Countries from './components/Countries';

function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);

    useEffect(() =>  {
       
        const getCountries = async ()=> {
            setLoading(true) 
            const res = await axios.get('https://restcountries.com/v3.1/all') 
            setCountries(res.data)
            setLoading(false) 
            
        } 
            getCountries();
    },[])

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1 )  
    const prevPage = () => setCurrentPage(prev => prev - 1 )
    
    


    return (
        <div className='conteiner'>
            <h1>Countries</h1>
            <Countries countries={currentCountry} loading={loading}/>
            <Paginations 
                countriesPerPage={countriesPerPage} 
                totalCountries={countries.length}
                paginate={paginate}
                nextPage= {nextPage}
                prevPage = {prevPage}
            />
        </div> 
    );
}

export default App;
