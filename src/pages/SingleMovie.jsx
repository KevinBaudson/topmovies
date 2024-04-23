import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {FaStar, FaArrowCircleLeft} from "react-icons/fa";


const key = import.meta.env.VITE_API_KEY;
const img =  import.meta.env.VITE_IMG;
const urlMovie = import.meta.env.VITE_MOVIE;


import './SingleMovie.css'

const SingleMovie = () => {
  
  const [singleMovie, setSingleMovie] = useState(null)
  let {id} = useParams()

  const getSingleMovie = async (urlMovie) =>{
    const res = await fetch(urlMovie)
    const data = await res.json()
    console.log(data)
    setSingleMovie(data)
  };     
 
  useEffect(()=>{
    const movieUrlSingle = `${urlMovie}${id}?language=pt-BR${key}`
    getSingleMovie(movieUrlSingle)
  },[])


  return (
   <div className="container-single-movie">
    {singleMovie.length === 0 && <p>Carregando...</p>}
    {singleMovie && (
      <>
        <Link to="/">
        <button className='btn-voltar'>
          <FaArrowCircleLeft size={50}/>
        </button>
        </Link>
        <div className="img-single-movie"><img src={img + singleMovie.poster_path} /></div>
        <div className="text-content">
          <h1>{singleMovie.title}</h1>
          <p>{singleMovie.tagline}</p>
          <p>{"Gênero: "+ singleMovie.genres[0].name}</p>
          <span><FaStar/> {singleMovie.vote_average}</span>
          <p>{singleMovie.overview}</p>
        </div>

      </>
    )}
   </div>
  )
}

export default SingleMovie