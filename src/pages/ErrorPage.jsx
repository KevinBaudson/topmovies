import React from 'react'
import Navbar from '../components/Navbar'


import './ErrorPage.css'
const ErrorPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1>Desculpe, resultado não encontrado :(</h1>
        </div>
    </div>
  )
}

export default ErrorPage