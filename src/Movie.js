import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'
import ReactLoading from "react-loading";

const Movie = () => {

  const { movie ,IsLoading} = useGlobalContext();

  if (IsLoading) {
    return (
      <div className="flex items-center  mx-auto  fixed top-[45%] left-[49%]">
      <ReactLoading
      type="spinningBubbles"
      className="bg-slate-900 p-1 border rounded-full h-[100px] w-[100px]"
    />
      </div>
    )
  }

  return (
    <section className='shadow-xl  bg-slate-800 border rounded-xl h-auto w-[1240px]  mx-auto'>
      <div className='shadow-xl grid auto-cols-max auto-rows-max md:grid-cols-4 flex-item-center p-10'>
        {movie.map((cmovie) => {

          const { imdbID, Title, Year, Poster } = cmovie;
          const movieName = Title.substring(0, 14);
          return (

            <NavLink key={imdbID} to={`movie/${imdbID}`}>
              <div>
                <div className='transform transition-all hover:scale-110 h-[450px] w-[250px] bg-slate-50 hover:bg-gray-400 hover:text-white duration-150 shadow-2xl  gap-9 m-5  p-5'>
                  <h3 className='font-bold text-center p-5'>{movieName.length >= 14 ? `${movieName}...` : movieName}</h3>
                  <img className=''src={Poster} alt='imdbID' />
                 
                    <div className='mx-auto py-2 text flex justify-center font-semibold'>{`Year: ${Year}`}</div>
                   


                </div>
              </div>

            </NavLink>

          )
        })}
      </div>
    </section>

  )



}

export default Movie
