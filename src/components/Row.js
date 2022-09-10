import React, { useEffect, useState, useRef } from 'react'
import { getMovies } from '../hooks/Api'
import './Row.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Row = ({title, path, isLarge}) => {

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

   const carousel = useRef(null)

   useEffect(() => {
      fetchData(path)
   })

   const clickRowLeft = (e) => {
      e.preventDefault()
      carousel.current.scrollLeft -= carousel.current.offsetWidth
      //carousel.current.offsetLeft -= 
   } 

   const clickRowRight= (e) => {
      e.preventDefault()
      carousel.current.scrollLeft += carousel.current.offsetWidth
   } 

  return (
    <section>
       <h1>{title}</h1>
            <div className='movies' ref={carousel}>
               {movies && movies.map((movie) => (
                  <img className={isLarge ? 'item-cu' : 'item'} key={movie.id} src={isLarge ? `${image}/${movie.backdrop_path}` : `${image}/${movie.poster_path}`} alt={movie.name} />
               ))}
            </div>
            <div className='buttons'>
               <AiOutlineArrowLeft className='arrow-left' onClick={clickRowLeft}></AiOutlineArrowLeft>
               <AiOutlineArrowRight className='arrow-right' onClick={clickRowRight}></AiOutlineArrowRight>
            </div>
    </section>
  )
}

export default Row