import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const { query, setQuery,IsError } = useGlobalContext();

  return (
    <div>
    <section className='shadow-xl p-2 text-center '>
    <div className='font-bold'>Search your favourite movie</div>
    <form action='#' onSubmit={(e) => { e.preventDefault() }}>
      <div className=''>
        <input className=' border-4  border-red-500 m-1 p-1 rounded-2xl' type='text' placeholder='search here'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        ></input>
      </div>
    </form>
    <div className='text-center'>
    <p>{IsError.show && IsError.msg}</p>
    </div>
  </section></div>
   
  )
}

export default Search
