import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/Api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import GenrePlatform from "./GenrePlatform";

function GameDetail(){
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "/" + id;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);




    if (loading) {
        return <Spinner className="spinner" animation="border" className="spinner" />;
    }
    return (

        <Row>
            <Col className="detail-image">
                <h1>{detail.name}</h1>
                <div className="row justify-content-center" >
                <Image className="detail-image" src={detail.background_image} roundedCircle />
                </div>
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />;
                <Col className="d-flex justify-content-between mb-5 mt-2">
                    <GenrePlatform key={id} platforms={detail.platforms} genres={detail.genres} />
                </Col>
                <Row>
                    <Col>
                        <div className=" row justify-content-center" >
                        <a href={detail.website}><Button >LINK TO WEBSITE</Button></a>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

    );

}


export default GameDetail;