import React from 'react'
import { useState } from 'react';

import { BiSearch } from 'react-icons/bi'
import { AiOutlineVideoCamera } from "react-icons/ai";


import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!search){
      return
    }else{
      navigate(`/search?q=${search}`)
      setSearch("")
    }
  }

  return (
   <nav>
    <h1>
        <Link to="/">Top<span className='orange'>Filmes</span><AiOutlineVideoCamera className='icon-camera'/></Link>
    </h1>
    
    <form id='form-desk' onSubmit={handleSubmit}>
    <input id='searchInput' type="text" placeholder='Digite o nome de um filme' onChange={(e)=>setSearch(e.target.value)} 
    value={search} />
    <button type='submit'><BiSearch/></button>
    </form>

  
   </nav>
  )
}

export default Navbar