import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

const Movie = () => {

  const { movie } = useGlobalContext();

  return (
    <section className='shadow-xl m-10 h-auto w-[1240px] mx-auto'>
      <div className='shadow-xl grid auto-rows-max md:grid-cols-4 w-full p-10'>
        {movie.map((cmovie) => {

          const { imdbID, Title, Year, Type, Poster } = cmovie;
            const movieName = Title.substring(0,14);
          return (

            <NavLink key={imdbID} to={`movie/${imdbID}`}>
              <div>
                <div className='h-[450px] w-[250px] shadow-xl gap-9 m-5 border border-black p-5 '>
                  <h3 className='font-bold text-center p-5'>{movieName.length >=14 ? `${movieName}...` :movieName}</h3>
                  <img className='' src={Poster} alt='imdbID' />
                </div></div>

            </NavLink>

          )
        })}
      </div>
    </section>

  )



}

export default Movie
