import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const { query, setQuery,IsError } = useGlobalContext();

  return (
    <div className='shadow-2xl mx-auto  w-full rounded-xl bg-slate-800 m-5'>
    <section className='w-full shadow-xl p-2 text-white text-center '>
    <div className='font-bold text-3xl py-5'>Search Movie Engine</div>
    <form action='#' onSubmit={(e) => { e.preventDefault() }}>
      <div className=''>
        <input className=' border-4 w-2/3 shadow-2xl mx-5 p-2 rounded-2xl text-gray-900 text-xl' type='text' placeholder='search here'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        ></input>
      </div>
    </form>
    <div className='text-center text-xl mx-auto py-4'>
    <p>{IsError.show && IsError.msg}</p>
    </div>
  </section></div>
   
  )
}

export default Search
