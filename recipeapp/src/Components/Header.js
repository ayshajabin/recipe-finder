import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {  Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Recipe from "./Pages/Recipe"



const Header = () => {
  return (
    <>
    <div className='header'>
    
      <Navbar  className="nav">
        <Container>
          <Navbar.Brand >Foodiee</Navbar.Brand>
          <Nav >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="recipe">Recipe</Nav.Link>
          </Nav>  
        </Container>
   </Navbar>

  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="recipe" element={<Recipe/>}/>

      </Routes>
   
    </div>
   
     
   
    </>
  )
}

export default Header