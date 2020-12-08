import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function GameDetail(){
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "/" + id;
console.log(detail);
 useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <Row>
            <Col md={3} className="detail-image">
                <Image src={detail.background_image} roundedCircle />
            </Col>
            <Col>
                <h1>{detail.name}</h1>
                <p></p>{detail.description}
                <a href={detail.website}><Button>LINK TO WEBSITE</Button></a>
            </Col>
        </Row>
    );
}


export default GameDetail;