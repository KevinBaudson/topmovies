import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'




const url = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;
const img =  import.meta.env.VITE_IMG;
const movie = import.meta.env.VITE_MOVIE;

//CSS
import './Home.css'

//slider swiper
import { register } from 'swiper/element/bundle';
import{ Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



register()

const Home = () => {
  const[moviesBetter, setMoviesBetter] = useState([]);
  const[slidePerView,setSlidePerView] = useState(2)
  
  const getMoviesBetter = async () =>{
    const res = await fetch(`${url}${key}`)
    const data = await res.json()
    const api = data.results
   
    setMoviesBetter(api)
  };     

 
 
  useEffect(()=>{
    getMoviesBetter()

  },[])
 
  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 720){
        setSlidePerView(2)
      }else{
        setSlidePerView(5)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[])
  
  return (
    
    <div>
      <h1 className='title'>Melhores Filmes</h1>
      <section id='container'>
        {moviesBetter === 0 && <p>Carregando Filmes...</p>}
      <Swiper
      slidesPerView={slidePerView}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      >
        {moviesBetter.map((movie)=>(
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <img src={img + movie.poster_path} />

            </Link>
          </SwiperSlide>
        ))}

      </Swiper>

      
      </section>
      <section className='secondary'>
        <div className="containers">
        
          <div className='divs'>
            <span>Ação</span>
            <span>Aventura</span>
            <span>Drama</span>
            <span>Suspense</span>
            <span>Comédia</span>
            <span>e muito mais...</span>
          </div>
          <div className='content-text'>
            <h2>Conheça nossa lista de filmes</h2>
            <p>Os filmes que marcaram época, do passado ao futuro no cinema!</p>
          </div>

        </div>

      </section>
    </div>
  )
};

export default Home