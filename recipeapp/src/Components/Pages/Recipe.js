import React, { useState } from 'react';
import "./Recipe.css";
import RecipeList from './RecipeList';



const Recipe = () => {
  const [search,setSearch]=useState("");
  const [myMeal,setMeal]=useState();
  const searchMeal=(evt) =>{
   if (evt.key==="Enter")
   {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(response => response.json())
      .then(data =>{
         setMeal(data.meals)
      }) 
        

   }
  }
  return (
    <>
    
    <div className='recipe'>
      <h1>get your recipe here</h1>
      <div className='search'>
       <input type='text' placeholder='search your recipe' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={searchMeal}/>

    </div>
    <div className='container'>
      {
      (myMeal==null)?<p className='notfound'>not found</p>: myMeal.map((response)=>
      {
        return(
          <RecipeList data={response}/>
        )
      })
      }
   
   
    
   

    </div>
      
    </div>
    </>
  )
}

export default Recipe