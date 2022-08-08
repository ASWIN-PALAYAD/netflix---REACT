import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instance'

function Banner() {
    const [movie, setMovies] = useState([])

    async function fetchData(){
        const movieData = await instance.get(requests.fetchNetflixOriginals)
        setMovies(movieData.data.results[
            Math.floor(Math.random()* movieData.data.results.length-1)
        ])
    }

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }

    useEffect(() => {
        fetchData()
      
    }, [])

    console.log("my movie",movie)
    

  return (
    <div>
        <header className='header'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
            )`,
            backgroundPosition:"center center",
        }}>

        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie.title || movie.name || movie.original_name}
            </h1>
            <h1 className='banner_description'>
                {truncate(movie?.overview,150)}
            </h1>

        </div>

        </header>

    </div>
  )
}

export default Banner