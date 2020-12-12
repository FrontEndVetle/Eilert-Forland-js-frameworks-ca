import React from 'react'
import Card from "react-bootstrap/Card";

function FavoriteList() {
let favorite = JSON.parse(localStorage.getItem("favoriteList"));

return(
<>
{favorite.map(game => {
        const {name, id, image, rating, released} = game;
    console.log(image)
return (

          <div key={id} >
         <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
      <Card.Text>
               Rating: {rating}<br></br>
                 Release date: {released}
    				</Card.Text>

            </Card.Body>
        </Card>
          </div>
)
})}
</>



        );

}

export default FavoriteList
