import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';

//CSS
import './Search.css'

const movie = import.meta.env.VITE_MOVIE;

const key = import.meta.env.VITE_API_KEY;
const img =  import.meta.env.VITE_IMG;
const search = import.meta.env.VITE_SEARCH

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([])


  const query =  searchParams.get("q")



  const getSearchMovies = async () =>{
    const res = await fetch(`${search}query=${query}${key}`)
    const data = await res.json()
    const api = await data.results
    setMovies(api)
  };     
 
  useEffect(()=>{


    getSearchMovies()
  },[query])
 
  
  return (
    <div>
      <Link to="/"><button className='btn-voltar'><FaArrowCircleLeft size={50} /></button></Link>
      <h1 className='title'>Resultados para : {query}</h1>
      {movies.length === 0 && <p>Carregando...</p>}
      <div className="container">
        <div className="cards">
            {movies.map((movie)=>(
           
              <div className='card' key={movie.id}>
                <div className='img-card'>
                <img src={img + movie.poster_path} />
                </div>
                <p>{movie.title}</p>
              </div>
            ))}
        </div>
     </div>
    </div>
  )
}

export default Search