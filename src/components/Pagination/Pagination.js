import React from 'react'
import {Link} from 'react-router-dom';

import './Pagination.css'


const Pagination = ({productsPerPage, totalProducts,paginate}) => {
    const pageNumbers = []
    for (let i=1; i<= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i)       
    }

  return(
    <nav>
        <ul className='pagination'>
        {
            pageNumbers.map(number =>{
                return(
                    <li key={number} className="page-item">
                        <Link onClick={()=>paginate(number)} to='#' className='page-link'>{number}</Link>
                    </li>
                )
            })
        }
        </ul>
    </nav>
  )
}

export default Pagination