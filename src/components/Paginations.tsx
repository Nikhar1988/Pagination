import { FC } from 'react'

interface PaginationProps {
    countriesPerPage: number, 
    totalCountries: number,
    paginate:(paginate:number) => void,
    nextPage:()=> void,
    prevPage:()=> void,
}

const Paginations:FC<PaginationProps> = ({countriesPerPage, totalCountries, paginate,nextPage,prevPage}) => {
    const pageNumbers = []

    for (let i =1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

return (
    <div>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li
                    className='page-item' 
                    key={number}
                   
                >
                    <a 
                        href='#' 
                        onClick={() => paginate(number)}
                        className='pageLink'>
                        {number}
                    </a>   
                </li>  
            ))}
        </ul>
       <div className='button'>
           <button 
                className='button-item'
                onClick={prevPage}
            >Prev Page</button>
            <button 
                className='button-item'
                onClick={nextPage}
            >Next Page</button>
        </div>         
        
    </div>
  )
}

export default Paginations