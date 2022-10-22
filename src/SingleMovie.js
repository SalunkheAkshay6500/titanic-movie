import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context'
import ReactLoading from "react-loading";

const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([]);
  const [IsLoading, setIsloading] = useState(true);



  const getAllMovies = async (url) => {
    setIsloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      if (data.Response === "True") {
        setIsloading(false);
        setMovie(data);


      }

    }
    catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    //setMovie([]);
    let timerOut = setTimeout(() => {
      getAllMovies(`${API_URL}&i=${id}`);
    }, 500);

    return () => clearTimeout(timerOut);

  }, [id])
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
    <div >
      <div className="md:flex justify-center shadow-2xl p-[50px] mt-[80px] h-1/2 w-2/3 mx-auto bg-slate-100 rounded-2xl ">
        <div className="shadow-2xl bg-slate-900 p-5"><img className="transform transition-all hover:scale-125" src={movie.Poster} alt="Poster" /></div>
        <div className=" p-5">
          <h1 className="font-bold text-xl">{`Title: ${movie.Title}`}</h1>
          <h5>{`Actors : ${movie.Actors}`}</h5>
          <h5>{`Awards : ${movie.Awards}`}</h5>
          <h5>{`BoxOffice : ${movie.BoxOffice}`}</h5>
          <h5>{`Genre : ${movie.Genre}`}</h5>
          <h5>{`Released : ${movie.Released}`}</h5>
          <h5>{`Type : ${movie.Type}`}</h5>
          <h5>{`Year : ${movie.Year}`}</h5>
          <h5>{`imdbRating : ${movie.imdbRating}`}</h5>
          <h5>{`Runtime : ${movie.Runtime}`}</h5>
          <h5>{`Country : ${movie.Country}`}</h5>


          <NavLink to='/'>
            <button className="bg-slate-900 text-white rounded-2xl p-5 m-9 font-bold hover:bg-gray-400 hover:text-slate-900">Go Back</button>
          </NavLink>

        </div>
      </div>

    </div>
  )
}

export default SingleMovie
