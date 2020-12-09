import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, name, image, rating, released }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>

      <Card.Text>
               Rating: {rating}<br></br>
                 Release date: {released}
    				</Card.Text>
                    <div className="mt-auto">
                        <Button type="button" variant="secondary" block>
                        Add to favorite
                        </Button>
                        <Link to={"game/" + id}>
                            <Button  variant="secondary" block>
                                View
                            </Button>
                        </Link>

                </div>
            </Card.Body>
        </Card>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default GameItem;