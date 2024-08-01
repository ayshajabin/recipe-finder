import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
  

         <div className='home'>
      <h1 className=' head  '>CHOOSE YOUR RECIPE</h1>
      <Link to="recipe" className='btn'>search recipe</Link>  
      </div>
   
    </>
  )
}

export default Home