import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

const fetchItems = (page)=>{
    return axios.get(`http://localhost:3001/items?_limit=10&_page=${page}`)
}
const Pagination = () => {

    const [page,setPage] =useState(1)

    const { data, isLoaing} = useQuery({
        queryKey : ["items",page],
        queryFn : ()=> fetchItems(page),
    })
    console.log(data);
    
  return (
    <div className='container'>
        <h2>Pagination</h2>
            {data?.data.map((val)=>{
                return <div key={val.id}>{val.name}</div>
            })}
        <button className='page-btn' onClick={()=> {setPage((prev)=> prev - 1)}}>Previous</button>
        <button className='page-btn' onClick={()=> {setPage((prev)=> prev + 1)}}>Next</button>
    </div>
  )
}

export default Pagination