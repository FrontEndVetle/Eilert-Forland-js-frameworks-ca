import React, { useState, useEffect } from "react";
import {BASE_URL} from "../../constants/Api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "./GameItem";
import Search from "./Search";



function GameList() {

const [games, setGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);


useEffect (() => {
    fetch(BASE_URL)
    .then(response => response.json())
          //  .then(json => console.dir(json))
.then(json => {
    setGames(json.results);
    setFilteredGames(json.results);
})    .catch(error =>console.log(error));
}, []);

   const filterGames = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = games.filter(function(char) {
        const lowerCaseName = char.name.toLowerCase();

        if (lowerCaseName.includes(searchValue)) {
            return true;
        }
        return false;
        });

         setFilteredGames(filteredArray);
   }

    return (
    <>
        <Search handleSearch={filterGames} />
        <Row>
            {filteredGames.map(game => {
                const { id, name, background_image, rating,released } = game;
                return (
                    <Col sm={6} md={3} key={id}>
                        <GameItem id={id} name={name} image={background_image} rating={rating} released={released} />
                    </Col>
                );
            })}
        </Row>
    </>
);

}

export default GameList