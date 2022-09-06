import React, { useEffect, useState } from 'react'
import { getMovies } from '../hooks/Api'
import './Row.css'

const Row = ({title, path}) => {

   const [movies, setMovies] = useState([])
   const image = 'https://image.tmdb.org/t/p/original'

   const fetchData = async (_path) => {
     try {
         const response = await getMovies(_path)
         setMovies(response.results)
     } catch (error) {
         console.log(error)
     }
   }

   useEffect(() => {
      fetchData(path)
   })

  return (
    <section>
       <h1>{title}</h1>
         <div className='movies'>
            {movies && movies.map((movie) => (
               <img className='item' key={movie.id} src={`${image}/${movie.poster_path}`} alt={movie.name} />
            ))}
       </div>
    </section>
  )
}

export default Row