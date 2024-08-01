import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const RecipeList = (getMeal) => {
 
  return (
    <>
  
    <div className='card d-inline-flex p-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={getMeal.data.strMealThumb} />
      <Card.Body>
        <Card.Title>{getMeal.data.strMeal}</Card.Title>
        <Card.Text>
          {getMeal.data.strArea}food
        </Card.Text>
        <h2>recipe</h2>
        <p>{getMeal.data.strInstructions}</p>
        <Button  href={getMeal.data.strYoutube}>watch video</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default RecipeList

 