import React, { useEffect, useState } from 'react'
import categories, { getMovies } from '../hooks/Api'
import './Banner.css'

const Banner = () => {

  const [banner, setBanner] = useState("")

  const fetchData = async () => {
    const filme = categories.find((category) => category.name === "netflixOriginals")
    const response = await getMovies(filme.path)
    const randomFilme = Math.floor(Math.random() * response.results.length)
    setBanner(response.results[randomFilme])
  }

  useEffect(() =>{
    fetchData()
  }, [])

  return (
    <header  style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${banner.backdrop_path}')`}}>
      <div className='banner-container'>
        <h1>{banner.title || banner.name || banner.originalName}</h1>
        <div className='banner-buttons'>
          <button>Play</button>
          <button>Minha Lista</button>
        </div>
        <p>{banner.overview}</p>
      </div>
    </header>
  )
}

export default Banner